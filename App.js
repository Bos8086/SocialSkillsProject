
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from './screens/ProfilePage';
import IntroPage from './screens/IntroPage';
import AutisticHomePage from './screens/AutisticHomePage';
import NonAutistcHomePage from './screens/NonAutisticHomePage';
import FormalPage from './screens/FormalPage';
import InformalPage from './screens/InformalPage';
import WelcomePage from './screens/WelcomePage';
import Settings from './screens/Settings';
import SupportServices from './screens/SupportServices';



const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


function AutisticSupportDrawerNavigator(){
  return <Drawer.Navigator>
    <Drawer.Group>
     
      <Drawer.Screen
        name='AutisticHomePage'
        component={NonAutistcHomePage}
      >    
      </Drawer.Screen>
      <Drawer.Screen 
      name='AutisticServices'
      component={SupportServices}
      >
      </Drawer.Screen>
      <Drawer.Screen
        name='HomePage'
        component={IntroPage}
      >

      </Drawer.Screen>
    </Drawer.Group>
  </Drawer.Navigator>
}


 

export default function App() {
 

  return (
     
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='WelcomePage'
        component={WelcomePage}
      />
      <Stack.Screen
        name='Settings'
        component={Settings}
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
        component={AutisticSupportDrawerNavigator}
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
