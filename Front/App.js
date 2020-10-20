import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'
import LineChartLight from './Components/LineChartLight';
import { NavigationContainer } from '@react-navigation/native';
import NavSearchAndDetails from './Navigation/NavSearchAndDetails'

export default function App() {
  return (
    <NavigationContainer>
      <NavSearchAndDetails/>
    </NavigationContainer>
  );
}
