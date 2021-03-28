import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground,
  Dimensions, Image, Text, TouchableOpacity, TextInput } from 'react-native';

import bgImage from '../assets/bgConnexion.jpg';
import logo from '../assets/logo.png';

import PhoneInput from 'react-native-phone-input';


const { width: WIDTH } = Dimensions.get('window');

class RegBirthTel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { date: null, dt: null, registrationDate: '', textNum: '' };
  }
  checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  }
  userSignup() {
    const { textNum } = this.state.textNum;
  }

  dateTimeInputChangeHandler = (e) => {
    this.type = 'text';
    var input = e;
    var expr = new RegExp(/\D\/$/);
    if (expr.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[1]) values[1] = this.checkValue(values[1], 12);
    if (values[0]) values[0] = this.checkValue(values[0], 31);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + '/' : v;
    });
    this.setState({
      registrationDate: output.join('').substr(0, 14),
    });
  };
  
  render() {
    const data = this.props.route.params;
    return (
      <ImageBackground source={ bgImage } style={ styles.backgroundContainer }>
        <View style = { styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={ styles.text }>Invest'EZ</Text>
        </View>
        <View style={styles.inputContainer}>
          <PhoneInput
            ref={'phone'}
            style={styles.input}
            confirmText='Confirm'
            cancelText='Cancel'
            textStyle={{fontSize: 14}}
            textProps={{placeholder: 'Choose telephone number and Country'}}
            onChangePhoneNumber={(text) => this.setState({textNum:text})}
            value={this.state.textNum}
          />
        </View>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={{
              width: WIDTH - 50,
              height: 40,
              paddingLeft: 6,
              marginHorizontal: 25,
              textAlign: 'center',
              backgroundColor: 'white',
              padding: 10,
              marginBottom: 30,
              borderWidth: 1,
              borderColor: 'black',
              paddingHorizontal: 30,
            }}
            keyboardType="number-pad"
            maxLength={10}
            placeholder="DD/MM/YYYY"
            onChangeText={(e) => this.dateTimeInputChangeHandler(e)}
            value={this.state.registrationDate}
          />
        </View>

        <TouchableOpacity style={styles.btnLog}
          onPress={() => {
            this.userSignup();

            console.log(data);

            this.props.navigation.navigate('Register3', {
              name: data.name,
              firstname: data.firstname,
              email: data.email,
              password: data.password,
              telephone: this.state.textNum,
              birthDate: this.state.registrationDate
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
    paddingTop: 35,
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
    height: 40,
    paddingLeft: 6,
    backgroundColor: 'white',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
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
  }
});

export default RegBirthTel