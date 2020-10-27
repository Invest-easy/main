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

class LineChartCard extends React.PureComponent {
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
                      <Stop offset={'0%'} stopColor={'rgb(19, 138, 187)'} stopOpacity={0.5}/>
                      <Stop offset={'100%'} stopColor={'rgb(19, 138, 187)'} stopOpacity={0.05}/>
                  </LinearGradient>
              </Defs>
          )

          return (
              <AreaChart
                  style={{flex:1}}
                  data={data}
                  contentInset={{top : 3, left : 0, right : 0, bottom: 0 }}
                  curve={shape.curveNatural}
                  svg={{ fill: 'url(#gradient)' }}
                  showGrid={false}
              >
              <Gradient/>
              </AreaChart>
          )


    }
}

export default LineChartCard
