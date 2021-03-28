import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, TextInput, ImageBackground,
  Dimensions, Image, Text, TouchableOpacity } from 'react-native';

import bgImage from '../assets/bgConnexion.jpg';
import logo from '../assets/logo.png';

import Icon from 'react-native-vector-icons/FontAwesome';


const { width: WIDTH } = Dimensions.get('window');

class Connexion extends React.Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false,
      textEmail: '',
      textPass: ''
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
          <Icon name='user-secret' size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
          <TextInput
            style = { styles.input }
            placeholder={'Enter your email'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            keyboardType='email-address'
            autoCompleteType='email'
            onChangeText={(text) => this.setState({textEmail:text})}
            value={this.state.textEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name='lock' size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
          <TextInput
            style = { styles.input }
            placeholder={'Password'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            secureTextEntry={this.state.showPass}   
            onChangeText={(text) => this.setState({textPass:text})}
            value={this.state.textPass}
          />

          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'eye' : 'eye-slash'}
              size={26} color={'rgba(255,255,255,0.7)'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLog}
        onPress={() => {
          fetch('https://invest3asy.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email": this.state.textEmail,
              "password": this.state.textPass
            })
          }).then(res=>res.json()).then(console.log)
          .catch(res=>console.log(res))

          this.props.navigation.navigate('Home')}
          }>
          <Text style={styles.logText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLog2} 
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.logText}>Register</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
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
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnLog2: {
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

export default Connexion
