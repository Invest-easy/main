import React from 'react';
import { StyleSheet, Text, View, Image, Color, TouchableOpacity, ImageBackground } from 'react-native';
import LineChartLight from './LineChartLight';
import { Avatar, Card, IconButton } from 'react-native-paper';


class StockItem extends React.Component {

  title_size_fct = function(size) {
     return {
       fontWeight: 'bold',
       fontSize: size,
     }
   }

  render() {
    const {displayDetailsForStock, stock} = this.props
    var icon = stock.isUp ? require('../Images/green_rectangle.png') : require('../Images/red_rectangle.png');
    var font_size;
    if(stock.name.length > 10){
      this.font_size = 17;
    } else {
      this.font_size = 20
    }
    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailsForStock(stock)}>
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

            <LineChartLight style={styles.chart}/>
            <View style={styles.price_overall_container}>
              <ImageBackground style={styles.price_panelbg} source = {icon}>
                <Text style={styles.price_text}>{stock.lastPrice}</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
    height: 80,
    flexDirection: 'row',
    borderBottomWidth : 1,
    borderBottomColor : "rgba(140,140,140,.5)",
    marginLeft:10,
    marginRight:10,
  },
  chart:{
    flex : 3
  },
  image: {
    width: 40,
    height: 40,
    marginTop : 20,
    marginRight : 5
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
    flex: 2,
    justifyContent : 'center',
    alignItems: 'center',
  },
  price_text: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white'
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

export default StockItem
