import React from 'react';
import { StyleSheet, Text, View, Image, Color, TouchableOpacity, ImageBackground } from 'react-native';
import LineChartCard from './LineChartCard';
import { Avatar, Card, IconButton, Button, Surface } from 'react-native-paper';
import { Icon } from 'react-native-elements'



class CardStock extends React.Component {

  title_size_fct = function(size) {
     return {
       fontWeight: 'bold',
       fontSize: size,
     }
   }


  render() {
    const {displayDetailsForStock, stock} = this.props
    var varcolor = stock.isUp ? 'green' : 'red';
    var icon = stock.isUp ? 'arrow-top-right' : 'arrow-bottom-right'
    console.log(icon)
    var font_size;
    if(stock.name.length > 10){
      this.font_size = 19;
    } else {
      this.font_size = 24
    }
    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailsForStock(stock)}>
          <View style={{marginLeft : 7, marginTop : 2, marginRight: 7}}>
            <Text numberOfLines={1} style={this.title_size_fct(this.font_size)}>{stock.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', height : 20}}>
              <Text style={styles.ticker_text}>{stock.ticker}</Text>
              <Button icon={icon} labelStyle={{fontSize: 15, color: varcolor, letterSpacing: 0.1}} style={{flex : 2.5, alignItems:'flex-end'}}>{stock.var24}</Button>
            </View>
          </View>
          <Image
            style={{width : 30, height : 30, position : 'absolute', bottom : 3, left : 5, zIndex: 5, opacity : 0.85}}
            source={stock.logo_name}
          />
          <Text style={{position:'absolute', bottom: 3, right : 5, fontWeight : 'bold', fontSize: 22, zIndex: 5}}>{stock.lastPrice}€</Text>
          <LineChartCard/>

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
  main_container: {
    height: 150,
    width: 150,
    backgroundColor:'white',
    borderColor : '#FFFFFF',
    overflow: 'hidden',
    marginLeft:10,
    marginRight:5,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
      },

  ticker_text: {
    fontStyle: 'italic',
    fontSize: 15,
    flex : 6,
    color: '#FC3E6E',
  },
})

export default CardStock
