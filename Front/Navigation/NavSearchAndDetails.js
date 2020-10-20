// Navigation/Navigation.js
import {createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import Search from '../Components/Search'
import StockDetails from '../Components/StockDetails'
import BuyScreen from '../Components/BuyScreen'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false,
    }
  },
  StockDetails: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: StockDetails,
    navigationOptions: {
      headerShown: false,
      gestureEnabled : true,
    }
  },
  BuyScreen: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: BuyScreen,
    navigationOptions: {
      headerShown: false,
      gestureEnabled : true,
    }
  },
})

export default createAppContainer(SearchStackNavigator)
