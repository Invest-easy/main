import React from 'react'
import { StyleSheet, View, TextInput, Text, FlatList, ActivityIndicator, ScrollView, Animated } from 'react-native'
import StockItem from './StockItem'
import stocks from '../Helpers/StockData'
import { SearchBar } from 'react-native-elements';
import TagList from './TagList'
import StockCard from './StockCard'
import StockDetails from './StockDetails'
import {Chip, FAB, Button} from 'react-native-paper'
import CardStock from './CardStock'
import WinnerLoser from './WinnerLoser'
import ItemFront from './ItemFront'

// Composant retournant la vue de la page de recherche

class Discover extends React.Component {

  constructor(props){
    super(props)
    this.addTagToList = this.addTagToList.bind(this)
    this.removeTagFromList = this.removeTagFromList.bind(this)
    this.searchedText = ""
    this.tagsSearched = []
    this.state = {
     stocks: stocks,
     inSearchBar: false,
     tagsSearched: [],
     scrollY: new Animated.Value(0)
    }
  }


  _displayDetailsForStock = (idStock) => {
    this.props.navigation.navigate("StockDetails", {idStock: idStock})
  }

  _searchTextInputChanged(text){
    this.searchedText = text
    this._loadStocksResearched()
  }

  _dynamicSearch(){
    let checker = (arr, target) => target.every(v => arr.includes(v))
  //  console.log("tableau de tags : " + this.state.tagsSearched)
    return stocks.filter(stock => ((stock.name.toLowerCase().includes(this.searchedText.toLowerCase()) || stock.ticker.toLowerCase().includes(this.searchedText.toLowerCase()))) && checker(stock.tags, this.tagsSearched))
  }

  _loadStocksResearched(){
      this.setState({stocks: this._dynamicSearch()})
  }

  removeTagFromList(tag){
  //  console.log(tag + "removed")
  //  this.setState({tagsSearched: this.state.tagsSearched.filter(item => item != tag)})
    this.tagsSearched = this.tagsSearched.filter(item => item != tag)
    this._loadStocksResearched()
  }

  addTagToList = (tag) => {
    console.log(tag.toString() + " added")
    this.props.navigation.navigate("Search", {tagPressed: tag})
  }

   _getIconFlex = () => {
       const {scrollY} = this.state;

       return scrollY.interpolate({
           inputRange: [30, 80],
           outputRange: [0.001, 1],
           extrapolate: 'clamp',
           useNativeDriver: true
       });
   };

   _getHeaderTitleOpacity = () => {
       const {scrollY} = this.state;

       return scrollY.interpolate({
           inputRange: [30, 60, 70],
           outputRange: [0, 0.5, 1],
           extrapolate: 'clamp',
           useNativeDriver: true
       });
   };

   _getHeaderIconOpacity = () => {
       const {scrollY} = this.state;

       return scrollY.interpolate({
           inputRange: [100, 130, 150],
           outputRange: [0, 0.5, 1],
           extrapolate: 'clamp',
           useNativeDriver: true
       });
   };


   _SortDoubles = (a, b) => {
     if(a > b)
      return -1
    else if (a < b)
      return 1
    else
      return 0
   }

   _SearchButtonClicked(){

     this.props.navigation.navigate("Search", {tagPressed: null})
   }

  render() {

    return (
      <View style={styles.main_container}>

      <Animated.View style={{height : 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        <Animated.View style={{opacity : this._getHeaderTitleOpacity(), flex: 1}}>

        </Animated.View>
        <Animated.View style={{opacity : this._getHeaderTitleOpacity(), justifyContent: 'center', alignItems: 'center', flex : 6}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Découvrir</Text>
        </Animated.View>
        <Animated.View style={{opacity : this._getHeaderTitleOpacity(), flex: 1}}>
          <Button icon="magnify"   color="gray"
            labelStyle={{fontSize: 30, color:'gray' }} onPress={() => this._SearchButtonClicked()}>
          </Button>
        </Animated.View>
      </Animated.View>

      <ScrollView
          scrollEventThrottle={16}
          ref={(ref) => { this.scrollListReftop = ref; }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: this.state.scrollY}}
              }
            ], {useNativeDriver: false}
          )}
        >
          <View style={{flexDirection : 'row', justifyContent: 'center'}}>
            <Text style={styles.title_text}>Découvrir</Text>
            <Button icon="magnify"   color="gray"
              labelStyle={{fontSize: 40, color:'gray', flex : 2 }} onPress={() => this._SearchButtonClicked()}>
            </Button>
          </View>




          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.part_title}>Tendances</Text>
            <Button icon="fire" labelStyle={{fontSize : 30, color:'red'}}></Button>
          </View>
          <FlatList
            data={this.state.stocks.sort((a, b) => this._SortDoubles(a.volume, b.volume)).slice(0,5)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.ticker}
            renderItem={({item}) => <CardStock displayDetailsForStock={this._displayDetailsForStock} stock={item}/>}
          />

          <View style={{marginTop : 25}}>
            <Text style={styles.part_title}>Catégories</Text>
            <TagList addTagFct = {this.addTagToList} removeTagFct={this.removeTagFromList}
            />
            {/*<FlatList
              data={["testA", "testB"]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({item}) => <Chip mode = {'flat'} onPress={() => console.log({item})}>{item}</Chip>}
            />*/}

          </View>

          <View style={{marginTop : 10, flexDirection: 'row'}}>
            <View style={{flex : 1}}>
              <Text style={styles.part_title}>Gagnants</Text>
              <FlatList
                style={{marginTop : 5}}
                data={this.state.stocks.sort((a, b) => this._SortDoubles(parseFloat(a.var24), parseFloat(b.var24))).slice(0,4)}
                keyExtractor={(item) => item.ticker}
                renderItem={({item}) => <WinnerLoser displayDetailsForStock={this._displayDetailsForStock} stock={item}/>}
              />
            </View>
            <View style={{justifyContent: 'flex-end', flex : 1}}>
              <Text style={styles.part_title}>Perdants</Text>
              <FlatList
                style={{marginTop : 5}}
                data={this.state.stocks.sort((a, b) => this._SortDoubles(parseFloat(b.var24), parseFloat(a.var24))).slice(0,4)}
                keyExtractor={(item) => item.ticker}
                renderItem={({item}) => <WinnerLoser displayDetailsForStock={this._displayDetailsForStock} stock={item}/>}
              />
            </View>
          </View>

          <View style={{marginTop : 25}}>
            <Text style={styles.part_title}>Recommandés pour vous</Text>
            <FlatList
            style={{marginRight: 2, marginLeft: 2}}
              data={this.state.stocks.sort((a, b) => this._SortDoubles(a.capitalization, b.capitalization))}
              keyExtractor={(item) => item.ticker}
              renderItem={({item}) => <StockItem displayDetailsForStock={this._displayDetailsForStock} stock={item}/>}
            />
          </View>


        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30
  },
  textinput: {
    height : 50,
  //  borderColor :'#000000',
  //  borderWidth : 1,

    paddingLeft : 5,
  },
  title_text:{
    fontSize: 40,
    fontWeight: "bold",
    marginLeft : 10,
    marginTop : 10,
    marginBottom: 5,
    flex : 3
  },
  part_title:{
    fontWeight:'bold',
    color:'#2F3131',
    marginLeft : 10,
    fontSize:30
  }
})

export default Discover
