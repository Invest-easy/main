import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Root from "../Root";

export default function SettingsBase() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
