import React from 'react'
import { StyleSheet, View, TextInput, Text, FlatList, ActivityIndicator, ScrollView, Animated } from 'react-native'
import StockItem from './StockItem'
import stocks from '../Helpers/StockData'
import { SearchBar } from 'react-native-elements';
import TagList from './TagList'
import StockCard from './StockCard'
import StockDetails from './StockDetails'
import {Chip, FAB, Button, Snackbar} from 'react-native-paper'
import ResearchItem from './ResearchItem'


// Composant retournant la vue de la page de recherche

class Search extends React.Component {

  constructor(props){
    super(props)
    this.addTagToList = this.addTagToList.bind(this)
    this.removeTagFromList = this.removeTagFromList.bind(this)
    this.tagPressed = this.props.navigation.state.params.tagPressed
    this.searchedText = ""
    this.tagsSearched = []
    this.state = {
     stocks: null,
     inSearchBar: false,
     tagsSearched: [],
     scrollY: new Animated.Value(0),
     snackVisible: false,
     snackName: ""
    }
  }


  _displayDetailsForStock = (idStock) => {
    this.props.navigation.navigate("StockDetails", {idStock: idStock})
  }

  _addToFavorites = (idStock) => {
    this.setState({snackName : idStock.name})
    this.onToggleSnackBar()
  }

   onToggleSnackBar = () => this.setState({snackVisible : true});

   onDismissSnackBar = () => this.setState({snackVisible : false});


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
    if(this.searchedText.length == 0 && this.tagsSearched.length == 0)
      this.setState({stocks: null})
    else
      this.setState({stocks: this._dynamicSearch()})
  }

  removeTagFromList(tag){
  //  console.log(tag + "removed")
  //  this.setState({tagsSearched: this.state.tagsSearched.filter(item => item != tag)})
    this.tagsSearched = this.tagsSearched.filter(item => item != tag)
    this._loadStocksResearched()
  }

  addTagToList(tag){
    console.log(tag.toString() + " added")
  //  this.setState({tagsSearched: this.state.tagsSearched.concat(tag)})
    this.tagsSearched = this.tagsSearched.concat(tag)
    this._loadStocksResearched()
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


   _SearchButtonClicked(){

     this.search.focus()
     this.scrollListReftop.scrollTo({x: 0, y: 0, animated: true})
   }

  render() {
    /*if(this.tagPressed != undefined && this.tagPressed != null){
      console.log(this.tagPressed)
      this.addTagToList(this.tagPressed)
      this.tagPressed = undefined
    }*/

    return (

      <View style={styles.main_container}>
        {/*Header*/}
        <View style={styles.header}>
          <View style={{flex: 1, justifyContent:'center'}}>
            <Button icon="arrow-left-bold"   color="gray"
              labelStyle={{fontSize: 30, color:'gray'}} onPress={() => this.props.navigation.goBack()}>
            </Button>
          </View>
          <View style={{flex : 7}}>
            <SearchBar
              ref={search => this.search = search}
              style={styles.textinput}
              placeholder="Rechercher une action"
              onChangeText={(text) => {this._searchTextInputChanged(text)}}
              value = {this.searchedText}
              round = {true}
              showCancel = {true}
              cancelIcon = {true}
              lightTheme= {true}
              containerStyle = {
                {
                  borderTopWidth: 0,
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderBottomWidth: 0
                }
              }
            />
          </View>
        </View>


          <FlatList
            scrollEventThrottle={16}
            ref={(ref) => { this.scrollListReftop = ref; }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {y: this.state.scrollY}}
                }
              ], {useNativeDriver: false}
            )}

            ListHeaderComponent={
              <>
                  <TagList addTagFct = {this.addTagToList} removeTagFct={this.removeTagFromList} tagPressed={this.tagPressed}
                  />
              </>
            }
            data={this.state.stocks}
            keyExtractor={(item) => item.ticker}
            renderItem={({item}) => <ResearchItem addToFav={this._addToFavorites} displayDetailsForStock={this._displayDetailsForStock} stock={item}/>}
          />

          <Snackbar
            visible={this.state.snackVisible}
            duration = {2000}
            onDismiss={this.onDismissSnackBar}
          >
          {this.state.snackName} ajouté à votre liste de surveillance !
          </Snackbar>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30
  },
  header:{
    flexDirection: 'row',
    marginTop : 10
  },
  textinput: {
    height : 50,
  },
  title_text:{
    fontSize: 40,
    fontWeight: "bold",
    marginLeft : 10,
    marginTop : 10,
    marginBottom: 5
  }
})

export default Search
