import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Search'
import LineChartLight from './LineChartLight';
import { NavigationContainer } from '@react-navigation/native';
import NavSearchAndDetails from '../Navigation/NavSearchAndDetails'

const SearchBase = () => {
    return (
      <NavigationContainer>
        <NavSearchAndDetails/>
      </NavigationContainer>
    )
  }


export default SearchBase
