import React from "react";
import { render } from "react-dom";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ceil } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";


export default class Parametres extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        const { navigate } = this.props.navigation
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ height: 730 }}>
                <Text style={styles.id}>id à récupérer</Text>
                <Text
                style={{
                    fontSize: 16,
                    fontWeight: "normal",
                    marginLeft: "5%",
                    color: "red",
                    marginBottom: "10%",
                }}
                >
                id à récupérer
                </Text>

                <TouchableOpacity onPress={() => navigate('Identite')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="check" size={25} color="grey" />
                    <Text style={styles.body}>Vérification d'identité</Text>
                </View>
                </TouchableOpacity>

                <Separator />
                <TouchableOpacity onPress={() => navigate('Compte')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="user" size={25} color="grey" />
                    <Text style={styles.body}>Compte</Text>
                </View>
                </TouchableOpacity>

                <Separator />
                <TouchableOpacity onPress={() => navigate('Messages')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="bell" size={25} color="#07337a" />
                    <Text style={styles.body}>Messages</Text>
                </View>
                </TouchableOpacity>

                <Separator />
                <TouchableOpacity onPress={() => navigate('Securite')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="lock" size={30} color="#07337a" />
                    <Text style={styles.body}>Sécurité</Text>
                </View>
                </TouchableOpacity>

                <Separator />
                <TouchableOpacity onPress={() => navigate('Parrainage')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="users" size={25} color="#436bab" />
                    <Text style={styles.body}>Parrainage</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.navbar}></View>

                <TouchableOpacity onPress={() => navigate('Affichage')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="font" size={25} color="green" />
                    <Text style={styles.body}>Affichage</Text>
                </View>
                </TouchableOpacity>

                <Separator />
                <TouchableOpacity onPress={() => navigate('Langue')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="language" size={25} color="green" />
                    <Text style={styles.body}>Langue</Text>
                </View>
                </TouchableOpacity>

                <Separator />
                <TouchableOpacity onPress={() => navigate('Conditions')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="gear" size={25} color="grey" />
                    <Text style={styles.body}>Conditions générales</Text>
                </View>
                </TouchableOpacity>

                <Separator />
                <TouchableOpacity onPress={() => navigate('User')}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    alignItems: "center",
                    }}
                >
                    <Icon name="gear" size={25} color="grey" />
                    <Text style={styles.body}>User Test</Text>
                </View>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
        id: {
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: "5%",
          marginTop: "8%",
        },
        body: {
          fontSize: 20,
          fontWeight: "normal",
          marginLeft: "5%",
          marginTop: "3%",
          marginBottom: "3%",
        },
        separator: {
          marginVertical: 8,
          borderBottomColor: "grey",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginLeft: "5%",
          maxWidth: "90%",
        },
        navbar: {
          backgroundColor: "#DFDFDF",
          height: 55,
          left: 0,
          right: 0,
          marginTop: 20,
          marginBottom: "6%",
        },
      });

      const Separator = () => <View style={styles.separator} />;
