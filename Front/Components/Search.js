import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator, ScrollView, Animated } from 'react-native'
import StockItem from './StockItem'
import stocks from '../Helpers/StockData'
import { SearchBar } from 'react-native-elements';
import TagList from './TagList'
import StockCard from './StockCard'
import StockDetails from './StockDetails'
import { Searchbar } from 'react-native-paper';


// Composant retournant la vue de la page de recherche

class Search extends React.Component {

  constructor(props){
    super(props)
    this.addTagToList = this.addTagToList.bind(this)
    this.removeTagFromList = this.removeTagFromList.bind(this)
    this.searchedText = ""
    this.tagsSearched = []
    this.state = {
     stocks: stocks,
     inSearchBar: false,
     tagsSearched: []
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

  addTagToList(tag){
    console.log(tag.toString() + " added")
  //  this.setState({tagsSearched: this.state.tagsSearched.concat(tag)})
    this.tagsSearched = this.tagsSearched.concat(tag)
    this._loadStocksResearched()
  }



  render() {

    return (
      <View style={styles.main_container}>

          <FlatList
            ListHeaderComponent={
              <>
              <Text style={styles.title_text}>Découvrir</Text>

                <SearchBar
                  style={styles.textinput}
                  placeholder="Rechercher une action"
                  onChangeText={(text) => {this._searchTextInputChanged(text)}}
                  value = {this.searchedText}
                  round = {true}
                  lightTheme= {true}
                  containerStyle = {
                    {
                      borderTopWidth: 0,
                      backgroundColor: 'rgba(0,0,0,0)',
                      borderBottomWidth: 0
                    }
                  }
                />
                <TagList addTagFct = {this.addTagToList} removeTagFct={this.removeTagFromList}
                />
              </>
            }
            data={this.state.stocks}
            keyExtractor={(item) => item.ticker}
            renderItem={({item}) => <StockItem displayDetailsForStock={this._displayDetailsForStock} stock={item}/>}
          />
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
    fontSize: 30,
    fontWeight: "bold",
    marginLeft : 10,
    marginTop : 40,
    marginBottom: 5
  }
})

export default Search
