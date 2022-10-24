import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import DateTimePicker from '../screens/app/DTPicker';
import ImgPicker from '../screens/app/ImgPicker';

// import AuthStack from '../container/AuthStack'
// import AppStack from './AppStack';

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

function MyDrawer() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="sign-up-screen" component={Signup} />
                <Screen name="log-in-screen" component={Login} />
                <Screen name="ImgPicker" component={ImgPicker} />
                <Screen name="DateTimePicker" component={DateTimePicker} />

            </Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer;