import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { VictoryPie, VictoryChart, VictoryTheme, VictoryLabel, VictoryArea, VictoryAxis, VictoryTooltip } from 'victory-native'


export default function Plot() {

    return (
      <View style={styles.container}>
        <VictoryChart
            animate={{
                duration: 1000,
                onLoad: { duration: 500 }
              }}

        >
          <VictoryArea
            style={{ data: { stroke: "white", strokeWidth: 5 } }}
            data={[
                { x: 1, y: 2000},
                { x: 2, y: 1800},
                { x: 3, y: 1900},
                { x: 4, y: 2300},
                { x: 5, y: 3500},
                { x: 6, y: 4015}]}
                labels={({ datum }) => `${datum.y}`}
                labelComponent={<VictoryTooltip style={{ fill: "tomato" }} active={false}/>}
                />

          <VictoryAxis dependentAxis
            orientation="right"
             style={{
               axis: {stroke: "#756f6a"},
               axisLabel: {fontSize: 20},
               grid: {stroke: "transparent"},
               ticks: {stroke: "grey", size: 5},
               tickLabels: {fontSize: 10, padding: 5, stroke: "white"}
             }}
          />
        </VictoryChart>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 270,
    marginTop: 30,
  },


});
