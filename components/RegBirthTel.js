import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, ImageBackground,
  Dimensions, Image, Text, TouchableOpacity } from 'react-native';

import bgImage from '../assets/bgConnexion.jpg';
import logo from '../assets/logo.png';

import DatePicker from 'react-native-datepicker';

import PhoneInput from 'react-native-phone-input';


const { width: WIDTH } = Dimensions.get('window');

class RegBirthTel extends React.Component {
    constructor(props){
        super(props)
        this.state = {date:''}
      }

    render() {
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
          />
        </View>
        <View style={styles.inputContainer}>
          <DatePicker
            style={styles.inputDate}
            date={this.state.date}
            mode="date"
            placeholder="Select Brithday"
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            format="DD-MM-YYYY"
            minDate="01-01-1950"
            maxDate="31-07-2002"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 5
            },
            dateInput: {
                marginLeft: 0,
            }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
        />
        </View>

        <TouchableOpacity style={styles.btnLog}
          onPress={() => this.props.navigation.navigate('Register3')}>
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
    height: 40,
    paddingLeft: 6,
    backgroundColor: 'white',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputDate: {
    width: WIDTH - 50,
    height: 40,
    fontSize: 18,
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
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default RegBirthTel