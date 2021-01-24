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

export default class Securite extends React.Component {
  render() {
    return (
        <View style={styles.container}>
      <Text>Security Screen</Text>
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