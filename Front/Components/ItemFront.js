import React from 'react';
import { StyleSheet, Text, View, Image, Color, TouchableOpacity, ImageBackground } from 'react-native';
import LineChartCard from './LineChartCard';
import { Avatar, Card, IconButton, Button, Surface } from 'react-native-paper';
import { Dimensions } from 'react-native';


class ItemFront extends React.Component {

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
    var font_size;
    if(stock.name.length > 10){
      this.font_size = 25;
    } else {
      this.font_size = 30
    }
    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailsForStock(stock)}>
        <View style={{marginLeft : 7, marginTop : 2, marginRight: 7, flexDirection:'row'}}>

          <View style={{flex : 5}}>
            <Text style={this.title_size_fct(this.font_size)}>{stock.name}</Text>
            <Text style={styles.ticker_text}>{stock.ticker}</Text>
          </View>
          <View style={{flex : 2.5, alignItems:'flex-end'}}>
            <Text style={{fontSize : 25, marginTop : 0, fontWeight:'bold'}}>{stock.lastPrice}€</Text>
            <Button icon={icon} labelStyle={{fontSize: 20, color: varcolor, letterSpacing: 0.1}}>{stock.var24}</Button>
          </View>
        </View>
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
    height: 200,
    width :  Dimensions.get('window').width - 25,
    backgroundColor:'white',
    borderColor : '#FFFFFF',
    overflow: 'hidden',
    marginLeft:10,
    marginRight: 10,
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
    fontSize: 20,
    flex : 6,
    color: '#FC3E6E',
  },
})

export default ItemFront
