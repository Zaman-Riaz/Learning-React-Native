import React,{ useState } from "react";
import { ImageBackground, Alert, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, ToastAndroid } from "react-native";

export default function Signup({navigation}) { 

  const [data,setData] = useState({name:'', number:'', pass:''})
  var regExForChar= /[a-zA-Z]/;
  var phoneNum = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;

  const submitForm = () => {
    if ( data.name == '' && data.number == '' && data.pass == '') {
      // Alert.alert('Input fields could not be empty')
      ToastAndroid.show("Input fields could not be empty", ToastAndroid.SHORT);
    }
    else if ( data.name == '' ) {
        Alert.alert('**Please enter name')
    }
    else if (!data.name.match(regExForChar) ) {
    Alert.alert('Name must contain alphabets')    
    }
    else if ( data.number == '' ) {
      Alert.alert('**Please enter mobile number')
    }
    else if (!data.number.match(phoneNum)) {
      Alert.alert('**Invalid number')
    }
    else if ( data.pass == '' ) {
      Alert.alert('**Please enter password')
    }
    else if (!data.pass.match(regExForChar)) {
      Alert.alert('Password must contain alphabets')    
    }
    else {
    console.log({data})
    navigation.navigate('log-in-screen', {myData: data});
    // navigation.navigate('' , { myData: data })
    }
  }


  return(
    
      <>
      <ImageBackground
      source={ require('../../../images/bg_img.jpeg') }
      resizeMode='stretch'
      style={ {
        flex: 1
      } }
      >        
        
      <View style={styles.container}>
    
      <ScrollView>
    
      <Text style={styles.heading}>SIGN UP 
      <Text style={{color:"orange", fontWeight: 'bold', fontSize: 17}}> Vendor</Text>
      </Text>

      <Text style={styles.text}> Name </Text>
        <TextInput 
           style={styles.input}
           maxLength={15}
           value={data.name}
           placeholder= 'Enter your name'
           onChangeText={name => setData({...data, name: name})}
        />
        
      <Text style={styles.text}> Mobile no </Text>
        <TextInput 
           style={styles.input}
           value={data.number}
           placeholder= '03XX XXXXXXX'
           maxLength={11}
           keyboardType='number-pad'
           onChangeText={number => setData({...data, number: number})}
        />
        
         <Text style={styles.text}> Password </Text>
         <TextInput 
         style={styles.input}
         secureTextEntry= {true}
         placeholder= 'Please enter your password'
         maxLength={6}
         value= {data.pass}
         onChangeText={pass => setData({...data, pass: pass})}
         />

        <TouchableOpacity>
        <Text 
          style={{color:'#28B0D8',  marginLeft: 224, fontWeight:'bold', fontSize: 17}}>
          Forgot Password? </Text>
        </TouchableOpacity>
    
        <TouchableOpacity
         
          onPress={submitForm} 
          style={styles.signup}>
           <Text 
           style={{color:"orange", textAlign: 'center', fontWeight: 'bold', fontSize: 17}}>
           Sign up </Text>
         </TouchableOpacity>
         
         </ScrollView>
       </View>
      </ImageBackground>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    marginHorizontal: 10,
    borderRadius: 25,
    // flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF5EB',
  },
  input: {
    borderWidth: 1,
    borderColor: '#28B0D8',
    width: 350,
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
    width: 350,
    padding: 18,
    backgroundColor: '#28B0D8',
    borderRadius: 20,
    marginLeft: 20,
    margin: 13,
    marginTop: 30
  },
  signup: {
    width: 350,
    padding: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 35
  },
});
