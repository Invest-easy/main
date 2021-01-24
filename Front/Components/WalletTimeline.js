import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function Line({string}) {
    return (
            <TouchableOpacity style={styles.line}><Text>{string}</Text></TouchableOpacity> 
    )}

export default function Timeline() {

  return (
    <View style={styles.container}>
        <Line string={"1D"}/>
        <Line string={"1W"}/>
        <Line string={"1M"}/>
        <Line string={"1Y"}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 300,
        height: 30,
        justifyContent: 'space-evenly'
  },
    line: {
        height: 20,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
  }
});
