import { View, Text, TouchableWithoutFeedback, StyleSheet,Image,Appearance } from "react-native";
import React , { useEffect,useState } from "react";
import * as Speech from 'expo-speech';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import darkMode from "../styles/darkMode";

const Settings = () => {

    const [darkModeButton, setDarkMode] = useState(true);
    const [textToSpeechButton, setTextToSpeechButton] = useState(true);

    const colorScheme = Appearance.getColorScheme();

    

  return (
    <View style={colorScheme == 'light'?styles.mainView:darkMode.mainView}> 
      <View style={colorScheme == 'light'?styles.mainHeading:darkMode.mainHeading}>
            <Text style={colorScheme == 'light'?styles.headingText:darkMode.headingText}>Settings</Text>
        </View>
        <View style={styles.content}>
           <View style={styles.language}>
            <Text style={colorScheme == 'light'?styles.settingsText:darkMode.settingsText}>
                Language
            </Text>
            <Text style={colorScheme == 'light'?styles.settingsText:darkMode.settingsText}>
                English
            </Text>
           </View>
           <View style={styles.language}>
            <Text style={colorScheme == 'light'?styles.settingsText:darkMode.settingsText}>
                Dark Mode
            </Text>
            <TouchableWithoutFeedback onPress={() => setDarkMode(!darkMode)}>
                <View>
                    <FontAwesome  name={darkMode ? 'toggle-off' : 'toggle-on'} size={30} />
                </View>
            </TouchableWithoutFeedback>
            
           </View>
           <View style={styles.language}>
            <Text style={colorScheme == 'light'?styles.settingsText:darkMode.settingsText}>
                Text to speech
            </Text>
            <TouchableWithoutFeedback onPress={() => setTextToSpeechButton(!textToSpeechButton)}>
                <View>
                    <FontAwesome  name={textToSpeechButton ? 'toggle-off' : 'toggle-on'} size={30} />
                </View>
            </TouchableWithoutFeedback>
            
           </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "black",
      padding: 10,
    },
    mainView:{
      backgroundColor:"lightgrey",
      width:"100%",
      height:"100%"
  },
  buttonText:{
      color:"#ffffff",
      fontSize:16,  
  },
  mainHeading:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:50,
  },
  headingText:{
      fontSize:20,
      fontWeight:"bold"
  },
  buttonContainer:{
      alignSelf:"center",
      marginTop:10,
  },
  homeImage:{
      alignSelf:"center",
      width:"80%",
     resizeMode: 'contain',
     height:300
  },
  viewImage:{
      width:"100%",
      height:"30%"
  },
  content:{
    marginHorizontal:20
  },
  language:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:30
  },
  settingsText:{
    color:"black"
  }
  });

export default Settings