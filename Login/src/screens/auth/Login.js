
import React, { useState } from "react";
import { ImageBackground, Alert, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from "react-native";

export default function Login({ navigation, route }) {
  // console.log(route.params.myData);
  // const [value] = useState(route.params.myData)  

  const value = route.params.myData
  const [data, setData] = useState({ number1: '', pass1: '' })
  var regExForChar = /[a-zA-Z]/;
  var phoneNum = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;

  const submitForm = () => {
    if (data.number1 == '' && data.pass1 == '') {
      ToastAndroid.show("Input fields could not be empty", ToastAndroid.SHORT);
    }
    else if (data.number1 == '') {
      Alert.alert('**Please enter mobile number')
    }
    else if (!data.number1.match(phoneNum)) {
      Alert.alert('**Invalid number')
    }
    else if (data.pass1 == '') {
      Alert.alert('**Please enter password')
    }
    else if (!data.pass1.match(regExForChar)) {
      Alert.alert('Password must contain alphabets');
    }
    else if (value.number !== data.number1) {
      Alert.alert('Number didnt matched')
    }
    else if (value.pass !== data.pass1) {
      Alert.alert('Password didnt matched')
    }
    else {
      console.log({ data })
      // navigation.navigate('' , { myData: data })
    }
  }


  return (

    <>
      <ImageBackground
        source={require('../../../images/bg_img.jpeg')}
        resizeMode='stretch'
        style={{
          flex: 1
        }}
      >


        <View style={styles.container}>

          <KeyboardAvoidingView>

            <Text style={styles.heading}>LOG IN
              <Text style={{ color: "orange", fontWeight: 'bold', fontSize: 17 }}> Vendor</Text>
            </Text>

            <Text style={styles.text}> Mobile no </Text>
            <TextInput
              style={styles.input}
              value={data.number1}
              placeholder='03XX XXXXXXX'
              maxLength={11}
              keyboardType='number-pad'
              onChangeText={number => setData({ ...data, number1: number })}
            />

            <Text style={styles.text}> Password </Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder='Please enter your password'
              maxLength={6}
              value={data.pass1}
              onChangeText={pass => setData({ ...data, pass1: pass })}
            />
            <TouchableOpacity>
              <Text
                style={{ color: '#28B0D8', marginLeft: 224, fontWeight: 'bold', fontSize: 17 }}>
                Forgot Password? </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={submitForm}
              style={styles.login}>
              <Text
                style={{ color: "white", textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>
                Login </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("sign-up-screen")
              }}
              style={styles.signup}>
              <Text
                style={{ color: "orange", textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>
                Sign up </Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
    borderRadius: 25,
    // flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF5EB',
  },
  input: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#28B0D8',
    width: '90%',
    margin: 8,
    marginLeft: 20,
    padding: 10
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 14,
    marginLeft: 20
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 2,
    padding: 20,
    margin: 10,
    marginTop: 35
  },
  login: {
    width: '90%',
    padding: 18,
    backgroundColor: '#28B0D8',
    borderRadius: 20,
    marginLeft: 20,
    margin: 13,
    marginTop: 30
  },
  signup: {
    width: '90%',
    padding: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 35
  },
});