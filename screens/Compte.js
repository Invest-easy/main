import { CardStyleInterpolators } from '@react-navigation/stack';
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

export default class Comptesss extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Informations personnelles</Text>
        <TextInput style={styles.input}>Votre nom</TextInput>
        <Separator/>
        <TextInput style={styles.input}>Votre e-mail</TextInput>
        <Separator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform : {
    alignSelf: "stretch",
  },
  header: {
    fontSize: 24,
    padding: 15,
    marginBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  input: {
    alignSelf: "stretch",
    height: 40,
    padding: 15,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: "5%",
    maxWidth: "90%",
  }
});

const Separator = () => <View style={styles.separator} />;