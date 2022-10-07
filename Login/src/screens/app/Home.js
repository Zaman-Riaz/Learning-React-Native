import React from "react";
import {Text, View, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
    const nav = () => {
        navigation.navigate('Review');
    }
    return (
        <View>
            <Text>Home Screen </Text>
            <TouchableOpacity
            onPress={nav}>
            <Text>Goto Review Page</Text>    
            </TouchableOpacity>
        </View>
    );
}