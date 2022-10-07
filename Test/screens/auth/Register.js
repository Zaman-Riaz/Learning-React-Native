import React from 'react'
import {StyleSheet, View,Text} from 'react-native'

export default Register  = ()=> {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>My Register Page</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#458b74',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        padding: 20,
        color: 'white'
    },
}) 