// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView, Image, ImageBackground, Button } from 'react-native'
import {Chip, FAB} from 'react-native-paper'
import TagItDetails from './TagItDetails'
import BuyButton from './BuyButton'
import ChartDetails from './ChartDetails'
import Modal from 'react-native-modal'



class StockDetails extends React.Component {

  state = {
      isModalVisible: false,
    };

  title_size_fct = function(size) {
     return {
       fontWeight: 'bold',
       fontSize: size,
     }
   }

   toggleModal = () => {
       this.setState({isModalVisible: !this.state.isModalVisible});
     };

  render() {

    const stock = this.props.navigation.state.params.idStock
    var icon = stock.isUp ? require('../Images/green_rectangle.png') : require('../Images/red_rectangle.png');

    var font_size;
    if(stock.name.length > 10){
      this.font_size = 20;
    } else {
      this.font_size = 25
    }


    return (
      <View style={styles.main_container}>
        {/*header*/}
        <View style = {styles.header}>
          <View style={styles.logo_container}>
            <Image
              style={styles.logo}
              source={stock.logo_name}
            />
          </View>
          <View style={styles.name_container}>
            <Text style={this.title_size_fct(this.font_size)}>{stock.name}</Text>
            <Text style={styles.ticker_text}>{stock.ticker}</Text>
          </View>
          <View style={styles.fav_container}>
            <Image
              style={styles.fav}
              source={require("../Images/heart_empty.png")}
            />
          </View>
        </View>

        <View style={styles.body}>
          <ScrollView style={styles.scrollpart}>
              {/*chart*/}
              <Text style={{fontWeight: "bold", fontSize: 35, marginLeft:20, marginTop: 10, marginBottom: 15}}>
              320.14€
              </Text>
              <View style = {styles.chart_container}>
                <ChartDetails/>
              </View>
              <View style={styles.belowchart_container}>
                <View style={styles.tags1}>
                  {/*tags*/}
                  <FlatList
                    data={stock.tags}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => <TagItDetails item ={item}/>}
                    horizontal = {true}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                <View style={styles.description_container}>
                  <Text style={{fontSize : 18, fontWeight: 'bold'}}>A propos</Text>
                  <Text style={{fontSize : 15, marginTop : 2}}>{stock.description}</Text>
                </View>
                {/*Variation 24H*/}
                <View style={styles.variation_container}>
                  <View style={styles.title_item_container}>
                    <Text style={styles.title_basic_item}>Variation 24H</Text>
                  </View>
                  <View style={styles.text_item_container}>
                    <ImageBackground style={styles.price_panelbg} source = {icon}>
                      <Text style={styles.text_basic_item}>+5%</Text>
                    </ImageBackground>
                  </View>
                </View>
                {/*Capitalisation*/}
                <View style={styles.basic_line_container}>
                  <View style={styles.title_item_container}>
                    <Text style={styles.title_basic_item}>Capitalisation</Text>
                  </View>
                  <View style={styles.text_item_container}>
                    <Text style={styles.text_basic_item}>{stock.volume}M</Text>
                  </View>
                </View>
                {/*Volume*/}
                <View style={styles.basic_line_container}>
                  <View style={styles.title_item_container}>
                    <Text style={styles.title_basic_item}>Volume</Text>
                  </View>
                  <View style={styles.text_item_container}>
                    <Text style={styles.text_basic_item}>{stock.per}</Text>
                  </View>
                </View>
                {/*PER*/}
                <View style={styles.basic_line_container}>
                  <View style={styles.title_item_container}>
                    <Text style={styles.title_basic_item}>P/E Ratio</Text>
                  </View>
                  <View style={styles.text_item_container}>
                    <Text style={styles.text_basic_item}>{stock.per}</Text>
                  </View>
                </View>
              </View>
          </ScrollView>
        </View>
        {/*Boutons acheter/vendre*/}
        <View style={styles.buysellbu_container}>
          <FAB
            style={styles.fab}
            label={"Acheter"}
            onPress={() => this.props.navigation.navigate("BuyScreen", {stockToBuy: {stock}})}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop:40,
    flex: 1,
    flexDirection : 'column'
  },
  fab: {
    position: 'absolute',
    bottom : 15,
    width : 500,
    height : 50
    },
  price_panelbg:{
  //  backgroundColor: 'red',
    justifyContent : 'center',
    width: 60,
    height:30,
    alignItems: 'center',
    marginRight: 20,
    marginLeft:20
  },
  header: {
    flex : .5,
    flexDirection : 'row',
    marginTop:10
  },
  logo_container: {
    flex: 1,
    marginLeft : 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 40,
    height : 40
  },
  name_container:{
    flex : 4,
    justifyContent: 'center',
    alignItems : 'center',
    flexDirection: 'column',
  },
  title_text:{
    fontSize : 25,
    fontWeight : 'bold'
  },
  ticker_text:{
    fontStyle: 'italic',
    fontSize: 20,
    color: '#FC3E6E',
  },
  fav_container: {
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fav:{
    width: 40,
    height : 40
  },
  body: {
    flex: 8,
    marginTop : 30,
  },
  scrollpart: {

  },
  bodyscroll: {
    //flex: 5,
    //flexDirection: 'column',
  },
  chart_container: {
    //flex:4,
    height : 250
    //backgroundColor: 'gray'
  },
  belowchart_container: {
  //  flex:5
  },
  tags1: {
    marginTop : 10,
    marginLeft : 5,
    marginBottom : 10
  },
  description_container: {
    borderBottomColor : "rgba(140,140,140,.5)",
    borderBottomWidth : 1,
    borderTopColor : "rgba(140,140,140,.5)",
    borderTopWidth : 1,
    paddingTop : 5,
    paddingBottom : 7,
    marginLeft : 10,
    marginRight : 10,
  },
  basic_line_container:{
    flexDirection: 'row',
    borderBottomColor : "rgba(140,140,140,.5)",
    borderBottomWidth : 1,
    marginLeft : 10,
    marginRight : 10,
    paddingTop : 7,
    paddingBottom : 7,
    alignItems: 'center',
  },
  text_basic_item:{
    fontSize : 18
  },
  title_basic_item:{
    fontSize : 18,
    fontWeight: 'bold'
  },
  title_item_container:{
    flex: 2,
    justifyContent:'flex-start',
    flexDirection: 'row'
  },
  text_item_container:{
    flex: 1,
    justifyContent:'center',
    flexDirection: 'row'
  },
  variation_container: {
    flexDirection: 'row',
    borderBottomColor : "rgba(140,140,140,.5)",
    borderBottomWidth : 1,
    marginLeft : 10,
    marginRight : 10,
    paddingTop : 5,
    paddingBottom : 5,
    alignItems: 'center',
  },
  buysellbu_container: {
    alignItems : 'center',
    height : 65
  }
})

export default StockDetails
