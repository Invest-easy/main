import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, TextInput, ImageBackground,
  Dimensions, Image, Text, TouchableOpacity } from 'react-native';

import bgImage from '../assets/bgConnexion.jpg';
import logo from '../assets/logo.png';

import Icon from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH } = Dimensions.get('window');

class RegAddNat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textCity: '',
      textNation: ''
    };
  };
  userSignup() {
    const { textCity } = this.state.textCity;
    const { textNation } = this.state.textNation;
  }

  render() {
    const data = this.props.route.params;
    return (
      <ImageBackground source={ bgImage } style={ styles.backgroundContainer }>
        <View style = { styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={ styles.text }>Invest'EZ</Text>
        </View>
        <View style={styles.inputContainer}>
        <Icon name='flag' size={26} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
          <TextInput
            style = { styles.input }
            placeholder={'Linving city'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            onChangeText={(text) => this.setState({textCity:text})}
            value={this.state.textCity}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style = { styles.input }
            placeholder={'Nationality'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            onChangeText={(text) => this.setState({textNation:text})}
            value={this.state.textNation}
          />
        </View>

        <TouchableOpacity style={styles.btnLog}
          onPress={() => {
            fetch('https://invest3asy.herokuapp.com/users/signup', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
              "name": data.name,
              "firstname": data.firstname,
              "email": data.email,
              "password": data.password,
              "telephone": data.telephone,
              "birthDate": data.birthDate,
              "adress": this.state.textCity,
              "nationality": this.state.textNation
              })
            }).then(res=>console.log(res))
            .catch(res=>console.log(res))

            this.props.navigation.navigate('Home')}
            }>
          <Text style={styles.logText}>Finish !</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 39,
  },
  inputIcon2: {
    position: 'absolute',
    top: 8,
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

export default RegAddNat