import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    SafeAreaView,
    View,
    TouchableOpacity,
    Button,
    ScrollView,
  } from "react-native";

export default class Parrainage extends React.Component {
  render() {
    return (
        <View style={styles.container}>
      <Text>Parrainage Screen</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})