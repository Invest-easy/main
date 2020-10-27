import React from 'react';
import { StyleSheet, Text, View, Image, Color, TouchableOpacity, ImageBackground } from 'react-native';
import LineChartLight from './LineChartLight';
import { Avatar, Card, IconButton, Snackbar } from 'react-native-paper';


class ResearchItem extends React.Component {

  title_size_fct = function(size) {
     return {
       fontWeight: 'bold',
       fontSize: size,
     }
   }

  render() {
    const {addToFav, displayDetailsForStock, stock} = this.props
    var varcolor = stock.isUp ? 'green' : 'red';
    //var icon = stock.isUp ? require('../Images/green_rectangle.png') : require('../Images/red_rectangle.png');
    var font_size;
    if(stock.name.length > 10){
      this.font_size = 20;
    } else {
      this.font_size = 22
    }
    return (
      <View style={styles.main_container}>
        <TouchableOpacity style={styles.touchableDetails} onPress={() => displayDetailsForStock(stock)}>
          <Image
            style={styles.image}
            source={stock.logo_name}
          />
          <View style={styles.content_container}>
            <View style={styles.texts_container}>
              <View style={styles.name_container}>
                <Text
              //  numberOfLines={1}
                // allowFontScaling
                 style={this.title_size_fct(this.font_size)}>{stock.name}</Text>
                <Text style={styles.ticker_text}>{stock.ticker}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.price_overall_container} onPress={() => addToFav(stock)}>
          <Image source={require("../Images/add.png")} style={{width : 25, height : 25}}/>
        </TouchableOpacity>
      </View>

    )
  }
}

/*       //heart favorite logo after first /TouchableOpacity
          <TouchableOpacity style={styles.heart_container}>
            <Image
              style={styles.heart}
              source={require('../Images/heart_empty.png')}/>
          </TouchableOpacity>*/

const styles = StyleSheet.create({
  testflex:{
    flexDirection: 'row',
  },

  main_container: {
    height: 70,
    flexDirection: 'row',
    borderBottomWidth : 1,
    borderBottomColor : "rgba(140,140,140,.5)",
    marginLeft:20,
    marginRight:20,
  },
  touchableDetails: {
    flexDirection: 'row',
    flex : 5
  },
  image: {
    width: 40,
    height: 40,
    marginTop : 15,
    marginRight : 5,
    marginLeft: 10
  //  backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',

  },
  name_container: {
    flex: 2.5,
    marginLeft : 5,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  ticker_text: {
    fontStyle: 'italic',
    fontSize: 15,
    color: '#FC3E6E',
  },

  price_overall_container: {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center',
  },
  price_text: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight:'bold'
  },
  price_panelbg:{
  //  backgroundColor: 'red',
    justifyContent : 'center',
    width: 75,
    height:35,
    alignItems: 'center',
    marginRight: 20,
    marginLeft:20
  },
  heart:{
  //  backgroundColor: "yellow",
    width:22,
    height:22
  },
  heart_container:{
    flex:0.2
  },
  texts_container:{
    flex: 3,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ResearchItem
