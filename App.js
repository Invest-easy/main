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

function RegNF({ navigation }) {
  return (
    <RegNameFirst navigation={ navigation }/>
  );
}

function RegMP({ navigation }) {
  return (
    <RegMailPass navigation={ navigation }/>
  );
}

function RegBT({ navigation }) {
  return (
    <RegBirthTel navigation={ navigation }/>
  );
}

function RegAN({ navigation }) {
  return (
    <RegAddNat navigation={ navigation }/>
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
