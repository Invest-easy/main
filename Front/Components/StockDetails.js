// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView, Image, ImageBackground, Animated, TouchableOpacity } from 'react-native'
import {Chip, FAB, Button, Snackbar} from 'react-native-paper'
import TagItDetails from './TagItDetails'
import BuyButton from './BuyButton'
import ChartDetails from './ChartDetails'
import Modal from 'react-native-modal'
import LineChartLight from './LineChartLight'



class StockDetails extends React.Component {

  state = {
      scrollY: new Animated.Value(0),
      snackVisible: false
    };

  title_size_fct = function(size) {
     return {
       fontWeight: 'bold',
       fontSize: size,
     }
   }

    onToggleSnackBar = () => this.setState({snackVisible : true});

    onDismissSnackBar = () => this.setState({snackVisible : false});



   toggleModal = () => {
       this.setState({isModalVisible: !this.state.isModalVisible});
     };


 //header title opacity
  _getHeaderTitleOpacity = () => {
      const {scrollY} = this.state;

      return scrollY.interpolate({
          inputRange: [50, 75, 100],
          outputRange: [0, 0.5, 1],
          extrapolate: 'clamp',
          useNativeDriver: true
      });
  };

  _getTitleFlex = () => {
      const {scrollY} = this.state;

      return scrollY.interpolate({
          inputRange: [0, 60],
          outputRange: [0.001, 1],
          extrapolate: 'clamp',
          useNativeDriver: true
      });
  };

  render() {

    const stock = this.props.navigation.state.params.idStock
    var icon = stock.isUp ? require('../Images/green_rectangle.png') : require('../Images/red_rectangle.png');

    var font_size;
    if(stock.name.length > 10){
      this.font_size = 18;
    } else {
      this.font_size = 22
    }

    var font_size_big;
    if(stock.name.length > 10){
      this.font_size_big = 30;
    } else {
      this.font_size_big = 40
    }

    var varcolor = stock.isUp ? 'green' : 'red';
    var icon = stock.isUp ? 'arrow-top-right' : 'arrow-bottom-right'

    const headerTitleOpacity = this._getHeaderTitleOpacity();

    return (
      <View style={styles.main_container}>
        {/*header*/}
        <View style = {styles.header}>
          <View style={styles.logo_container}>
            <Button icon="arrow-left-bold"   color="gray"
              labelStyle={{fontSize: 30, color:'gray' }} onPress={() => this.props.navigation.goBack()}>
            </Button>
          </View>
          <Animated.View style={styles.name_container}>
            <Animated.View style={{flex: this._getTitleFlex(), opacity: headerTitleOpacity}}>
              <Text style={this.title_size_fct(this.font_size)}>{stock.name}</Text>
              <Text style={{fontSize : 13, fontStyle:'italic', color:'#FC3E6E'}}>{stock.ticker}</Text>
            </Animated.View>
            <Animated.View style={{flex : 1, justifyContent:'center', alignItems: 'center'}}>
              <Animated.Text style={{fontWeight: "bold",  fontSize: 28}}>
              {stock.lastPrice}€
              </Animated.Text>
            </Animated.View>
          </Animated.View>
          <TouchableOpacity style={styles.fav_container} onPress={this.onToggleSnackBar}>
            <Image
              style={styles.fav}
              source={require("../Images/add.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Animated.ScrollView style={styles.scrollpart}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {y: this.state.scrollY}}
                }
              ], {useNativeDriver: false}
            )}
          >
            <View style={styles.subheader_container}>
              <View style={styles.title_container}>
                <Text style={this.title_size_fct(this.font_size_big)}>{stock.name}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text style={{fontSize : 22, fontStyle:'italic', color:'#FC3E6E'}}>{stock.ticker}</Text>
                  <Text style={{fontSize: 20, fontWeight:'bold', color: varcolor, marginLeft: 25}}>{stock.var24}</Text>
                </View>
              </View>
              <View style={{flex : 1, marginRight : 45}}>
                <Image
                  style={styles.logo}
                  source={stock.logo_name}
                />
              </View>
            </View>
              {/*chart*/}
              <View style = {styles.chart_container}>
                <LineChartLight style={{flex: 1}}/>
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
                    <Text style={styles.title_basic_item}>Tendance 24H</Text>
                  </View>
                  <View style={styles.text_item_container}>
                    <Button icon={icon} labelStyle={{fontSize: 18, color: varcolor, letterSpacing: 0.1}} style={{height: 30, justifyContent:'center'}}>{stock.var24}</Button>
                  </View>
                </View>
                {/*Capitalisation*/}
                <View style={styles.basic_line_container}>
                  <View style={styles.title_item_container}>
                    <Text style={styles.title_basic_item}>Capitalisation</Text>
                  </View>
                  <View style={styles.text_item_container}>
                    <Text style={styles.text_basic_item}>{stock.capitalization}</Text>
                  </View>
                </View>
                {/*Volume*/}
                <View style={styles.basic_line_container}>
                  <View style={styles.title_item_container}>
                    <Text style={styles.title_basic_item}>Volume</Text>
                  </View>
                  <View style={styles.text_item_container}>
                    <Text style={styles.text_basic_item}>{stock.volume}M</Text>
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
          </Animated.ScrollView>
          <Snackbar
            visible={this.state.snackVisible}
            duration = {2000}
            onDismiss={this.onDismissSnackBar}
          >
          {stock.name} ajouté à votre liste de surveillance !
          </Snackbar>
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
    bottom : 0,
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
    height: 50,
    flexDirection : 'row',
  },
  subheader_container: {
    flexDirection:'row',
    alignItems:'center'
  },
  logo_container: {
    flex: 1,
    marginLeft : 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 60,
    height : 60
  },
  name_container:{
    flex : 4,
    justifyContent: 'center',
    alignItems : 'center',
    flexDirection: 'row',
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
  title_container:{
    marginLeft : 25,
    flex : 6
  },
  fav_container: {
    flex: 1,
    marginRight: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fav:{
    width: 25,
    height : 25
  },
  body: {
    flex:1,
    marginTop : 10,
  },
  scrollpart: {

  },
  bodyscroll: {
    //flex: 5,
    //flexDirection: 'column',
  },
  chart_container: {
    //flex:4,
    height : 250,
    marginTop : 10
    //backgroundColor: 'gray'
  },
  belowchart_container: {
  //  flex:5
  },
  tags1: {
    marginTop : 15,
    marginLeft : 5
  },
  description_container: {
    borderBottomColor : "rgba(140,140,140,.5)",
    borderBottomWidth : 1,
    borderTopColor : "rgba(140,140,140,.5)",
    borderTopWidth : 0,
    marginTop : 10,
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
    height : 50
  }
})

export default StockDetails
