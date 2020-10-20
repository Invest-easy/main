import React from 'react'
import { AreaChart, Grid, XAxis } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import dateFns from 'date-fns'

import * as shape from 'd3-shape'

class ChartDetails extends React.PureComponent {
    render() {
        const data = [
          {
            value: Math.random() * 10 + 1,
          },
          {
            value: Math.random() * 10 + 1,
          },{
            value: Math.random() * 10 + 1,
          },{
            value: Math.random() * 10 + 1,
          },{
            value: Math.random() * 10 + 1,
          },{
            value: Math.random() * 10 + 1,
          },{
            value: Math.random() * 10 + 1,
          },{
            value: Math.random() * 10 + 1,
          },

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
                yAccessor={ ({ item }) => item.value }
                style={{flex : 1}}
                data={data}
                contentInset={{ top: 20}}
                curve={shape.curveNatural}
                svg={{ fill: 'url(#gradient)' }}
                showGrid={false}
              >
              <Gradient/>
              </AreaChart>


          )
    }
}

export default ChartDetails
