import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    SafeAreaView,
    View,
    TouchableOpacity,
    Button,
    ScrollView,
  } from "react-native";
import Navigation from '../App';

export default class User extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View>
                    <View style={{height:120, backgroundColor: '#07337a'}} />
                    <Image source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}} style={styles.pic}/>
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    header: {
        flex: 1,
        backgroundColor: "#06127a",
    },
    pic: {
        width: 100,
        height: 100,
        borderRadius: 200 / 2
    }
})