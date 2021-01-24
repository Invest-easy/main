import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Parametres from "./screens/Parametres";
import Identite from "./screens/Identite";
import Compte from "./screens/Compte";
import Messages from "./screens/Messages";
import Securite from "./screens/Securite";
import Parrainage from "./screens/Parrainage";
import Affichage from "./screens/Affichage";
import Langue from "./screens/Langue";
import Conditions from "./screens/Conditions";
import User from "./screens/User";


const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Paramètres" component={Parametres} />
      <Stack.Screen name="Identite" component={Identite} />
      <Stack.Screen name="Compte" component={Compte} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Securite" component={Securite} />
      <Stack.Screen name="Parrainage" component={Parrainage} />
      <Stack.Screen name="Affichage" component={Affichage} />
      <Stack.Screen name="Langue" component={Langue} />
      <Stack.Screen name="Conditions" component={Conditions} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}