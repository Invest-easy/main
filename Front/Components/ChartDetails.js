import React from 'react'
import { StyleSheet, View, TextInput, Text, FlatList, ActivityIndicator, ScrollView, Animated, Dimensions} from 'react-native'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'
import {Chip} from 'react-native-paper'
import { ButtonGroup } from 'react-native-elements'
import chartData from '../Helpers/ChartSampleData'
import stocks from '../Helpers/StockData'



class ChartDetails extends React.PureComponent {

  constructor () {
    super()
    this.state = {
      selectedIndex: 0,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
  this.setState({selectedIndex: selectedIndex})
  }

  _loadChartData(){
    switch(this.state.selectedIndex){
      case 0:
        return chartData.oneDay
        break;
      case 1:
        return chartData.oneWeek
        break;
      case 2:
        return chartData.oneMonth
        break;
      case 3:
        return chartData.oneYear
        break;
    }
  }


    render() {

      const component1 = () => <Text>1D</Text>
      const component2 = () => <Text>1S</Text>
      const component3 = () => <Text>1M</Text>
      const component4 = () => <Text>1Y</Text>

      const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }, { element: component4 }]
      const { selectedIndex } = this.state.selectedIndex

        return(
        <View style={{flex : 1}}>
          <Chart
            style={{flex :1}}
            data={this._loadChartData()}
            padding={{left : 10, bottom: 0, right: 15, top: 65 }}
          >

            <Area theme={{ gradient: { from: { color: 'rgb(19, 138, 187)' }, to: { color: 'rgb(19, 138, 187)', opacity: 0.4 } }}} />
            <Line style={{paddingTop: 20}} theme={{ stroke: { color: 'rgb(19, 138, 187)', width: 2 }, scatter: { default: { width: 0, height: 0, rx: 2 }} }}
               tooltipComponent={<Tooltip
                theme={{
                formatter: ({ x, y, date }) =>
                <View style={{position: 'absolute', top : -65, alignItems:'center', width:Dimensions.get('window').width - 10}}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 15, color:'gray'}}>{date}</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{y}€</Text>
                  </View>
                </View>

                ,
              /*  label: {
                 color: 'black',
                 fontSize: 20,
                 fontWeight: 700,
                 textAnchor: 'middle',
                 opacity: 1,
                 dx: 0,
                 dy: 22.5,
               },*/
               shape: {
                 width: 5,
                 height: 5,
                 dx: 0,
                 dy: 0,
                 rx: 4,
                 color: 'black',
               }
              }
              }/>}
             />
          </Chart>

          <View style={{alignItems: 'center', marginTop: 2}}>
            <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={this.state.selectedIndex}
                  buttons={buttons}
                  containerStyle={styles.containerStyle}
                  buttonStyle={styles.buttonStyle}
                  selectedButtonStyle={styles.selectedButtonStyle}
                  innerBorderStyle={{width: 0, color: 'rgba(255,255,255, 0)'}}
                  containerBorderRadius={0}
                  underlayColor={'rgba(255,255,255,0)'}
                   />
          </View>
        </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerStyle: {
        height: 35,
        // borderTopRightRadius: 20,
        borderWidth: 0,
        backgroundColor: 'rgba(255,255,255,0)',
        marginRight : 15,
        borderRadius: 0,
        width : 250
    },
    buttonStyle: {
        backgroundColor: 'rgba(230,230,230,0)',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 0,
        marginLeft:7.5,
        marginRight : 7.5
    },
    selectedButtonStyle: {
        backgroundColor: '"rgb(210,210,210)"',
    }
});

export default ChartDetails
