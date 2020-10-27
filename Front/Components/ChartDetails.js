import React from 'react'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'

class ChartDetails extends React.PureComponent {

  state={
    cursorValue: null
  }


    render() {
        return(


          <Chart
            style={{ height: 200, width: '100%', marginTop: 100 }}
            data={[
              { x: -2, y: 15 },
              { x: -1, y: 10 },
              { x: 0, y: 12 },
              { x: 1, y: 7 },
              { x: 2, y: 6 },
              { x: 3, y: 3 },
              { x: 4, y: 5 },
              { x: 5, y: 8 },
              { x: 6, y: 12 },
              { x: 7, y: 14 },
              { x: 8, y: 12 },
              { x: 9, y: 13.5 },
              { x: 10, y: 18 },
            ]}
            padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
          >

            <Area />
          </Chart>
        )
    }
}

export default ChartDetails
