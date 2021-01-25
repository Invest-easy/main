import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PieChart from './WalletPieChart'
import Legend from './WalletLegend'
import Plot from './WalletPlot'
import Timeline from './WalletTimeline'



export default function WalletBase() {


  const [balance, changeVisibility] = useState(' ****')


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balance:</Text>
      <Text style={styles.balance}>$ {balance}   </Text>
      
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
      <Plot style={styles.plot}/>
      <Timeline style={styles.timeline}/>
      <View style={styles.piechart}>
        <PieChart />
        <View style={{ paddingRight: 35, alignItems: 'flex-start', height: 150, marginBottom: 25 }}>
          {
            // On fait juste le top 5 de ses assets, en dessous on a les détails
            // On peut faire un map() de la liste des assets
          }
          <Legend text={'first'} color={'red'}/>
          <Legend text={'second'} color={'orange'}/>
          <Legend text={'third'} color={'yellow'}/>
          <Legend text={'fourth'} color={'yellowgreen'}/>
          <Legend text={'fifth'} color={'green'}/>

        </View>
      </View>
      
      
      <StatusBar backgroundColor="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: "#222",
    
  },
  title:{
    fontSize: 30,
    color: "#fff",
    position: 'absolute',
    top: 35, left: 10,
  },
  balance: {
    fontSize: 30,
    color: '#fff',
    marginTop: 10,
    position: 'absolute',
    top: 60, left: 10,
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
    flexDirection: 'row',
    position: 'absolute',
    top: 70,
    marginBottom: 15,
    
  },
  eyicon: {
    marginTop: 12,
    marginLeft: 13,

  },
  plot: {
    position: 'absolute',
    left: 0,
    top: 0,
    
  },
  timeline: {
    marginBottom: 0,
  }
  
});

