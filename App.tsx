//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, TouchableOpacity, Text,} from 'react-native';
// import all basic components
import QRCode from 'react-native-qrcode';
import Color from './Module/Color';


function getTextInputValue(){
  // Function to get the value from input
  // and Setting the value to the QRCode
  this.setState({ valueForQRCode: this.state.inputValue });
};



export default function App() {
  let data = {
    time:'23:56',
    date:'12/23/1995'
  }
  let valueForQRCode = JSON.stringify(data);

  let color = new Color('nishant Kumar','Mukesh Kumar');

  let date = new Date();

  console.log("Today Date : ",date.toLocaleDateString() );

  return (
            <View style={styles.MainContainer}>
            <QRCode
              value={valueForQRCode}
              //Setting the value of QRCode
              size={250}
              //Size of QRCode
              bgColor="#000"
              //Backgroun Color of QRCode
              fgColor="#ffffff"
              //Front Color of QRCode
            />
            {/* <TextInput
              // Input to get the value to set on QRCode
              style={styles.TextInputStyle}
              onChangeText={text => this.setState({ inputValue: text })}
              underlineColorAndroid="transparent"
              placeholder="Enter text to Generate QR Code"
            />
            <TouchableOpacity
              onPress={this.getTextInputValue}
              activeOpacity={0.7}
              style={styles.button}>
              <Text style={styles.TextStyle}> Generate QR Code </Text>
            </TouchableOpacity> */}
          </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
  },

  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },

  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#000000',
    marginBottom: 20,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

/*** <QRCode
              value={this.state.valueForQRCode}
              //Setting the value of QRCode
              size={250}
              //Size of QRCode
              bgColor="#000"
              //Backgroun Color of QRCode
              fgColor="#fff"
              //Front Color of QRCode
            /> */