import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './routes/AuthStack'
// import AppStack from './routes/AppStack'

export default function App() {
  return (
    <NavigationContainer>
        {/* Rest of your app code */}
        <AuthStack />    
    </NavigationContainer>
  );
}