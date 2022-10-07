import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
import Review from '../screens/app/Review';
import Home  from '../screens/app/Home';

function AppStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;