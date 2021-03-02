import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { VictoryPie, VictoryChart, VictoryTheme, VictoryLabel, VictoryArea, VictoryAxis, VictoryTooltip } from 'victory-native'
import ChartDetails from './ChartDetails';



export default function Plot() {



    return (
      <View style = {styles.container}>
        <ChartDetails style={{flex: 1}}/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 270,
    marginTop: 75,
  },


});
