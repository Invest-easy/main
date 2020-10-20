// Components/FilmDetail.js

import * as React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, Image, ImageBackground, TextInput } from 'react-native'
import {Chip, FAB, Portal, Provider} from 'react-native-paper'
import TagItDetails from './TagItDetails'
import SwitchSelector from "react-native-switch-selector"
import SwipeButton from 'rn-swipe-button';


class BuyScreen extends React.Component {


  title_size_fct = function(size) {
     return {
       fontWeight: 'bold',
       fontSize: size,
     }
   }

   constructor(props){
     super(props)
     this.fee_rate = 0.01
     this.state = {
       buyTab: false,
       orderType : "market",
       numberOfShares: 0,
     }
   }


       _changeNumberOfShares(n){
         this.setState({numberOfShares : n})
       }

      _total_fee(price){
        return Number((this.state.numberOfShares * this.fee_rate * price).toFixed(2))
      }

      _total_price(price){
        return Number((this._subtotal_price(price) + this._total_fee(price)).toFixed(2))
      }

      _subtotal_price(price){
        return Number((this.state.numberOfShares * price).toFixed(2))
      }

      _order_submitted(){
        console.log("Swipe Sucess")
      }





  render() {
    const stock = this.props.navigation.state.params.stockToBuy.stock

    var font_size;
    if(stock.name.length > 10){
      this.font_size = 25;
    } else {
      this.font_size = 35
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
              />
            </View>
          </View>
          <View style = {styles.body}>
            <SwitchSelector
              style={{marginBottom : 15}}
              initial={0}
              onPress={value => this.setState({ buyTab: value })}
              textColor={"#FC3E6E"} //'#7a44cf'
              selectedColor={"#ffffff"}
              buttonColor={"#FC3E6E"}
              borderColor={"#FC3E6E"}
              hasPadding
              options={[
                { label: "Achat", value: "buy", activeColor: "#53D54E" },
                { label: "Vente", value: "sell", activeColor: "#EC3D3D"}
              ]}
            />

            <SwitchSelector
              style={{marginBottom : 15, marginRight : 45, marginLeft : 45}}
              initial={0}
              onPress={value => this.setState({ buyTab: value })}
              textColor={"#FC3E6E"} //'#7a44cf'
              selectedColor={"#ffffff"}
              buttonColor={"#FC3E6E"}
              borderColor={"#FC3E6E"}
              hasPadding
              options={[
                { label: "Ordre au marché", value: "market", activeColor: "#FC3E6E" },
                { label: "Ordre limite", value: "limit", activeColor: "#FC3E6E"}
              ]}
            />

            <View style={styles.basic_line_container}>
              <View style={styles.title_item_container}>
                <Text style={styles.title_basic_item}>Quantité</Text>
              </View>
              <View style={styles.text_item_container}>
                <TextInput keyboardType={"phone-pad"} placeholder={"0"} onChangeText={(value) => this._changeNumberOfShares(value)} style={styles.text_basic_item}/>
              </View>
            </View>

            <View style={[styles.basic_line_container, {borderBottomColor : 'rgb(0,0,0)'}]}>
              <View style={styles.title_item_container}>
                <Text style={styles.title_basic_item}>Prix unitaire</Text>
              </View>
              <View style={styles.text_item_container}>
                <Text style={styles.text_basic_item}>≈{stock.lastPrice}€</Text>
              </View>
            </View>

            <View style={styles.basic_line_container}>
              <View style={styles.title_item_container}>
                <Text style={styles.title_basic_item}>Sous-total</Text>
              </View>
              <View style={styles.text_item_container}>
                <Text style={styles.text_basic_item}>{this._subtotal_price(stock.lastPrice)}€</Text>
              </View>
            </View>

            <View style={[styles.basic_line_container, {borderBottomColor: 'rgb(0,0,0)'}]}>
              <View style={styles.title_item_container}>
                <Text style={[styles.title_basic_item, {fontStyle: 'italic', fontWeight: 'normal', fontSize: 15}]}>Frais de traitement</Text>
              </View>
              <View style={styles.text_item_container}>
                <Text style={styles.text_basic_item}>{this._total_fee(stock.lastPrice)}€</Text>
              </View>
            </View>

            <View style={styles.basic_line_container}>
              <View style={styles.title_item_container}>
                <Text style={styles.title_basic_item}>Total</Text>
              </View>
              <View style={styles.text_item_container}>
                <Text style={styles.text_basic_item}>{this._total_price(stock.lastPrice)}€</Text>
              </View>
            </View>

          </View>

          {/*Boutons acheter/vendre*/}
          <SwipeButton
            title = "Confirmer"
            titleColor = "#ffffff"
            thumbIconBackgroundColor = "#ffffff"
            shouldResetAfterSuccess = {true}
            railFillBackgroundColor = "#ffffff"
            railFillBorderColor = "#ffffff"
            railBackgroundColor="#FC3E6E"
            railBorderColor="#FC3E6E"
            onSwipeSuccess={() => this._order_submitted()}
          />

          {/*<View style={styles.buysellbu_container}>
          <FAB
              style={styles.fab}
              label={"Valider"}
              onPress={() => this.props.navigation.navigate("BuyScreen", {stockToBuy: {stock}})}
            />
          </View>
          */}
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
  header: {
    flex : .5,
    marginTop : 10,
    flexDirection : 'row',
    backgroundColor : 'rgba(0,0,0,0)'
  },
  logo_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 50,
    height : 50
  },
  name_container:{
    flex : 4,
    justifyContent: 'center',
    alignItems : 'center',
    flexDirection: 'column',
  },
  title_text:{
    fontSize : 40,
    fontWeight : 'bold'
  },
  ticker_text:{
    fontStyle: 'italic',
    fontSize: 25,
    color: '#FC3E6E',
  },
  fav_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fav:{
    width: 50,
    height : 50
  },
  body: {
    flex: 5,
    marginTop : 30
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
  buysellbu_container:{
    marginRight : 20,
    marginLeft: 20,
    marginBottom : 20,
  }
})

export default BuyScreen
