// Navigation/Navigation.js
import {createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import Search from '../Components/Search'
import StockDetails from '../Components/StockDetails'
import BuyScreen from '../Components/BuyScreen'
import Discover from '../Components/Discover'

const SearchStackNavigator = createStackNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      headerShown: false,
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false,
    }
  },

  StockDetails: {
    screen: StockDetails,
    navigationOptions: {
      headerShown: false,
    }
  },
  BuyScreen: {
    screen: BuyScreen,
    navigationOptions: {
      headerShown: false,
      gestureEnabled : true,
    }
  },
})

export default createAppContainer(SearchStackNavigator)
