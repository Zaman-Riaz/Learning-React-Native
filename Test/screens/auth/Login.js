// import React from 'react'
// import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

// export default Login  = (props) => {
//   return (
//     <View style={styles.container}>
//         <Text style={styles.text}>My Login Page</Text>


//         <TouchableOpacity onPress={()=>{
//             props.navigation.navigate("Register")
//         }} style={{padding:20,backgroundColor:"black"}}>
//             <Text style={{color:"white"}}>Goto Register Form</Text>
//         </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create ({
//     container: {
//         flex: 1,
//         backgroundColor: '#458b74',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         fontWeight: 'bold',
//         fontSize: 30,
//         padding: 20,
//         color: 'white'
//     },
// }) 


import React,{ useState } from "react";
import { ImageBackground, Alert, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView  } from "react-native";

export default function Login( { navigation } ) {
  console.log(navigation);       

  const [data,setData] = useState({number:'', pass:''})
  var regExForChar = /[a-zA-Z]/;

  const submitForm = () => {
    if ( data.number == '' && data.pass == '') {
      Alert.alert('Input fields could not be empty')
    }
    else if ( data.number == '' ) {
      Alert.alert('**Please enter mobile number')
    }
    else if ( data.number.length < 11 ) {
      Alert.alert('**Invalid number')
    }
    else if ( data.pass == '' ) {
      Alert.alert('**Please enter password')
    }
    else if (!data.pass.match(regExForChar)) {
      Alert.alert('Password must contain alphabets');
    }
    else {
    console.log({data})
    navigation.navigate('' , { myData: data })
    }
  }


  return(
    
      <>
      {/* <ImageBackground
      source={ require('../../../images/bg_img.jpeg') }
      resizeMode='stretch'
      style={ {
        flex: 1
      } }
      > */}
        
        
      <View style={styles.container}>
    
      <ScrollView>
    
      <Text style={styles.heading}>LOG IN 
      <Text style={{color:"orange", fontWeight: 'bold', fontSize: 17}}> Vendor</Text>
      </Text>

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
         style={styles.login}>
           <Text 
           style={{color:"white", textAlign: 'center', fontWeight: 'bold', fontSize: 17}}> 
           Login </Text>
         </TouchableOpacity>
    
          <TouchableOpacity
          onPress={()=>{
            props.navigation.navigate("Register")
            }} 
          style={styles.signup}>
           <Text 
           style={{color:"orange", textAlign: 'center', fontWeight: 'bold', fontSize: 17}}>
           Sign up </Text>
         </TouchableOpacity>
         
         </ScrollView>
       </View>
      {/* </ImageBackground> */}
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
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