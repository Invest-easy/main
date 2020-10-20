/*import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'*/

/*import React from 'react';
import { StyleSheet, Text, View, Image, Color, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';*/

import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'

import * as shape from 'd3-shape'

class LineChartLight extends React.PureComponent {
    render() {
        const data = [
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,
          Math.random() * 10 + 1,

        ]

        const Gradient = ({ index }) => (
              <Defs key={index}>
                  <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                      <Stop offset={'0%'} stopColor={'rgb(19, 138, 187)'} stopOpacity={0.8}/>
                      <Stop offset={'100%'} stopColor={'rgb(19, 138, 187)'} stopOpacity={0.2}/>
                  </LinearGradient>
              </Defs>
          )

          return (
              <AreaChart
                  style={{flex : 2.5}}
                  data={data}
                  contentInset={{ top: 20, bottom: 20, right:15}}
                  curve={shape.curveNatural}
                  svg={{ fill: 'url(#gradient)' }}
                  showGrid={false}
              >
              <Gradient/>
              </AreaChart>
          )

    /*    const Gradient = ({ index }) => (
              <Defs key={index}>
                  <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                      <Stop offset={'0%'} stopColor={'rgb(19, 138, 187)'} stopOpacity={0.8}/>
                      <Stop offset={'100%'} stopColor={'rgb(19, 138, 187)'} stopOpacity={0.2}/>
                  </LinearGradient>
              </Defs>
          )

          return (
              <AreaChart
                  style={{ height: 50, width:100}}
                  data={data}
                  contentInset={{ top: 10, bottom: 10 }}
                  curve={shape.curveNatural}
                  svg={{ fill: 'url(#gradient)' }}
                  showGrid={false}
              >
              <Gradient/>
              </AreaChart>
          )*/


    }
}

export default LineChartLight


/*class LineChartLight extends React.Component {
  render() {
    return (
        <View>
      <LineChart
        data={{
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={100} // from react-native
        height={50}
        withDots={false}
        withHorizontalLabels = {false}
        withVerticalLabels = {false}
        withShadows = {false}
        withInnerLines = {false}
        withOuterLines = {false}
        chartConfig={{
          backgroundGradientFrom: "#FFFFFF",
           backgroundGradientFromOpacity: 0,
           backgroundGradientTo: "#FFFFFF",
           backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 1.5, // optional, default 3

        }}
        bezier
        style={{
          borderWidth: 1
        }}
      />
    </View>
    )
}
}
export default LineChartLight*/
