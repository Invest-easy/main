import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';

class Tests extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cca2: 'US',
      withFlag: true,
      withFilter: true,
      countryCode: 'US'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Country Picker !
        </Text>
        <CountryPicker
          onSelect={(value)=> this.setState({countryCode: value, cca2: value.cca2})}
          cca2={this.state.cca2}
          translation='eng'
          withFlag={this.state.withFlag}
          withFilter={this.state.withFilter}
          countryCode={this.state.countryCode}
        />
        <Text style={styles.instructions}>
          Press on the flag
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
});

export default Tests;