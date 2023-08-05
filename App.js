import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfilePage from './screens/ProfilePage';
import IntroPage from './screens/IntroPage';
import AutisticHomePage from './screens/AutisticHomePage';
import NonAutistcHomePage from './screens/NonAutisticHomePage';
import FormalPage from './screens/FormalPage';
import InformalPage from './screens/InformalPage';
import WelcomePage from './screens/WelcomePage';

const Stack = createNativeStackNavigator();


 

export default function App() {
 

  return (
     
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='WelcomePage'
        component={WelcomePage}
      />
      <Stack.Screen
        name="IntroPage"
        component={IntroPage}
        options={{title:"HomePage"}}
      /> 
      <Stack.Screen
        name="AutisticHomePage"
        component={AutisticHomePage}
        options={{title:"Autistic"}}
      />
      <Stack.Screen
        name='NonAutisticHomePage'
        component={NonAutistcHomePage}
        options={{title:" Autistc Support"}}
      />
      <Stack.Screen
        name='FormalPage'
        component={FormalPage}
        options={{title:" Formal Conversations "}}
      />
      <Stack.Screen
        name='InformalPage'
        component={InformalPage}
        options={{title:" InFormal Conversations "}}
      />

      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
