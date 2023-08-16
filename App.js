
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable,Appearance,useWindowDimensions} from 'react-native';
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
import ConversationsPage from './screens/ConversationsPage';
import TipsPage from './screens/TipsPage';
import react , {useState} from 'react';



const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


const colorScheme = Appearance.getColorScheme();




function AutisticSupportDrawerNavigator(){
  const dimensions = useWindowDimensions();
  return <Drawer.Navigator
  screenOptions={{
    drawerStyle: {
      backgroundColor: colorScheme=="light"?"white":"lightgrey",
      width: dimensions.width / 2,
    },
  }}
  >
    <Drawer.Group>
     
      <Drawer.Screen
        name='AutisticHomePage'
        component={NonAutistcHomePage}
        options={{title:"Ways to Support",drawerActiveBackgroundColor:colorScheme=="light"?"blue":"grey",}}
      >    
      </Drawer.Screen>
      <Drawer.Screen 
      name='AutisticServices'
      component={SupportServices}
      options={{title:"Support Services",drawerActiveBackgroundColor:colorScheme=="light"?"blue":"grey"}}
      
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
        options={{title:"Welcome"}}
      />
      <Stack.Screen
        name='Settings'
        component={Settings}
      />
      <Stack.Screen
        name="IntroPage"
        component={IntroPage}
        options={{title:"Home Page"}}
      /> 
      <Stack.Screen
        name="AutisticHomePage"
        component={AutisticHomePage}
        options={{title:"Autistic"}}
      />
      <Stack.Screen
        name="ConversationsPage"
        component={ConversationsPage}
        options={{title:"Conversations"}}
      />
      <Stack.Screen
        name='TipsPage'
        component={TipsPage}
        options={{title:"Tips"}}
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
