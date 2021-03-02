import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useEffect } from 'react-native';
import Search from './Components/Search'
import LineChartLight from './Components/LineChartLight';
import { NavigationContainer } from '@react-navigation/native';
import NavSearchAndDetails from './Navigation/NavSearchAndDetails'
import BottomNav from './Navigation/BottomNav'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const storeData = async (value, storageKey) => {
    try {
      await AsyncStorage.setItem(storageKey, value)
    } catch (e) {
      // saving error
    }
  }
  
  const getData = async (storageKey) => {
    try {
      const value = await AsyncStorage.getItem(storageKey)
      if(value !== null) {
        return value
      }
      else{
        return null
      }
    } catch(e) {
      // error reading value
    }
  }


  return (
    <BottomNav/>
  );
}
