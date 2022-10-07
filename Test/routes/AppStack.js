import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/app/home'

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={home} />
      
    </Stack.Navigator>
  );
}