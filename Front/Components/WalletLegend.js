import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Legend({color,text}) {

  return (
    <View style={styles.container}>
        <View style={[styles.block,{backgroundColor: color}]}/>
        <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  block:{
      width: 10,
      height: 10,
      marginRight: 10,
  },
  text: {
    //  color: 'white'
    color : 'black'
  }

});
