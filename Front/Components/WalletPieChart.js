import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { VictoryPie, VictoryChart, VictoryTheme, VictoryLabel } from 'victory-native'


const sampleData = [
    { x: "Amazon", y: 70 },
    { x: "Apple", y: 50 },
    { x: "Tesla", y: 45 },
    { x: "Microsoft", y: 25 },
    { x: "LVMH", y: 10 }
  ];

let sum = 0;
sampleData.forEach(element => {
    sum += element.y
})

let listPercentages = [];
sampleData.forEach(element => {
    listPercentages.push(element.y / sum)
})

let data = []
for(let i=0;i<sampleData.length;i++){
    data.push({
        x: sampleData[i].x,
        y: listPercentages[i]
    })
}


export default function PieChart() {

  return (
    <View style={styles.container}>
        <VictoryPie width={230} height={300}
            theme={VictoryTheme.grayscale}
            colorScale={["red", "orange", "yellowgreen", "olive", "green", "blue" ]}
            data={data}
            innerRadius={80}
            cornerRadius={5}
            padAngle={1.5}
            animate={{
                duration: 2000
              }}
            labelComponent={
                <View/>
            }
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop : 95
  },

});
