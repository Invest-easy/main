import 'react-native-gesture-handler';
import React from 'react';

import Connexion from './components/Connexion';
import RegAddNat from './components/RegAddNat';
import RegBirthTel from './components/RegBirthTel';
import RegMailPass from './components/RegMailPass';
import RegNameFirst from './components/RegNameFirst';
import Tests from './components/Tests';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return(
    <Connexion navigation={ navigation }/>
  );
}

function RegNF({ route, navigation }) {
  return (
    <RegNameFirst navigation={ navigation } route={route}/>
  );
}

function RegMP({ route, navigation }) {
  return (
    <RegMailPass navigation={ navigation } route={route}/>
  );
}

function RegBT({ route, navigation }) {
  return (
    <RegBirthTel navigation={ navigation } route={route}/>
  );
}

function RegAN({ route, navigation }) {
  return (
    <RegAddNat navigation={ navigation } route={route}/>
  );
}

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegNF} />
      <Stack.Screen name="Register1" component={RegMP} />
      <Stack.Screen name="Register2" component={RegBT} />
      <Stack.Screen name="Register3" component={RegAN} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
