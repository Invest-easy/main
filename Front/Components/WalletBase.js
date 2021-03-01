import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PieChart from './WalletPieChart'
import Legend from './WalletLegend'
import Plot from './WalletPlotB'
import Timeline from './WalletTimeline'



export default function WalletBase() {


  const [balance, changeVisibility] = useState(' ****')


  return (
    <View style={styles.container}>
    <Text style={{fontWeight:'bold', fontSize: 40, marginLeft: 10}}>Portefeuille</Text>

        <View style={{flexDirection:'row'}}>
          <Text style={styles.balance}>$ {balance}</Text>
          <TouchableOpacity style={styles.eye} onPress={() => {
             if(balance === ' ****')
             {
               changeVisibility(' 4015.53') // Il faudra aller chercher la valeur qui correspond à la personne connectée
             }
             else{
              changeVisibility(' ****')
             }
             }}>
               <Icon style={styles.eyicon} name="ios-eye" size={25} color={'#c0c0c0'} />
          </TouchableOpacity>
        </View>

      {/*A changer*/}
      <View style={{marginTop : -75}}>
        <Plot style={{flex: 1}}/>
      </View>
      {/*<Timeline style={styles.timeline}/>*/}
      <View style={styles.piechart}>
        <PieChart />
        <View style={{ paddingRight: 35, alignItems: 'flex-start', height: 150, marginBottom: 25 }}>
          {
            // On fait juste le top 5 de ses assets, en dessous on a les détails
            // On peut faire un map() de la liste des assets
          }
          <Legend text={'Amazon'} color={'red'}/>
          <Legend text={'Apple'} color={'orange'}/>
          <Legend text={'Tesla'} color={'yellow'}/>
          <Legend text={'Microsoft'} color={'yellowgreen'}/>
          <Legend text={'LVMH'} color={'green'}/>

        </View>
      </View>


      <StatusBar backgroundColor="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  //  backgroundColor: "#222",

  },
  title:{
    fontSize: 30,
  //  color: "#fff",
    color: "black",
  },
  balance: {
    fontSize: 30,
    //color: '#fff',
    color: "black",
    marginTop: 10,
    marginLeft: 10
  },
  piechart: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 250,
    marginBottom: 130,

  },
  eye:{
    width: 50,
    height: 50,
  },
  eyicon: {
    marginTop: 13,
    marginLeft: 13,

  },

  timeline: {
    marginBottom: 0,
  }

});
