import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, TextInput, ImageBackground,
  Dimensions, Image, Text, TouchableOpacity } from 'react-native';

import bgImage from '../assets/bgConnexion.jpg';
import logo from '../assets/logo.png';

import Icon from 'react-native-vector-icons/FontAwesome';


const { width: WIDTH } = Dimensions.get('window');

class RegNameFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textName: '',
      textFName: ''
    };
  };
  userSignup() {
    const { textName } = this.state.textName;
    const { textFName } = this.state.textFName;
  }
  render() {
    return (
      <ImageBackground source={ bgImage } style={ styles.backgroundContainer }>
        <View style = { styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={ styles.text }>Invest'EZ</Text>
        </View>
        <View style={styles.inputContainer}>
        <Icon name='vcard' size={24} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
          <TextInput
            style = { styles.input }
            placeholder={'First Name'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}     
            onChangeText={(text) => this.setState({textFName:text})}
            value={this.state.textFName}
          />
        </View>
        <View style={styles.inputContainer}>
        <Icon name='vcard-o' size={24} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
          <TextInput
            style = { styles.input }
            placeholder={'Name'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}     
            onChangeText={(text) => this.setState({textName:text})}
            value={this.state.textName}
          />
        </View>

        <TouchableOpacity style={styles.btnLog}
          onPress={() => {
            this.userSignup();

            this.props.navigation.navigate('Register1', {
              name: this.state.textName,
              firstname: this.state.textFName
            })
          }}>
          <Text style={styles.logText}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    width: 160,
    height: 120,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.7
  },
  inputContainer: {
    marginTop: 7,
  },
  input: {
    width: WIDTH - 50,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37,
  },
  btnLog: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'gold',
    justifyContent: 'center',
    marginTop: 20,
  },
  logText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default RegNameFirst