import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      
    </Stack.Navigator>
  );
}