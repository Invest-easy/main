import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, TextInput, ImageBackground,
  Dimensions, Image, Text, TouchableOpacity } from 'react-native';

import bgImage from '../assets/bgConnexion.jpg';
import logo from '../assets/logo.png';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';



const { width: WIDTH } = Dimensions.get('window');

class RegMailPass extends React.Component {
    constructor() {
        super()
        this.state = {
          showPass: true,
          press: false
        }
      }
    
      showPass = () => {
        if(this.state.press == false) {
          this.setState( {showPass: false, press: true })
        } else {
          this.setState( {showPass: true, press: false })
        }
      }
  render() {
    return (
      <ImageBackground source={ bgImage } style={ styles.backgroundContainer }>
        <View style = { styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={ styles.text }>Invest'EZ</Text>
        </View>
        <View style={styles.inputContainer}>
            <Icon1 name='email' size={24} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon2} />
          <TextInput
            style = { styles.input }
            placeholder={'Enter your email'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            keyboardType='email-address'
            autoCompleteType='email'
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name='lock' size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
          <TextInput
            style = { styles.input }
            placeholder={'Choose your password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
          />

          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'eye' : 'eye-slash'}
              size={26} color={'rgba(255,255,255,0.7)'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLog}
          onPress={() => this.props.navigation.navigate('Register2')}>
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
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 39,
  },
  inputIcon2: {
    position: 'absolute',
    top: 10,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
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

export default RegMailPass