import { View, Text, TouchableWithoutFeedback, StyleSheet,Image,Appearance } from "react-native";
import React , { useEffect,useState,useContext,createContext } from "react";
import * as Speech from 'expo-speech';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import darkMode from "../styles/darkMode";
import { createSlice, configureStore } from '@reduxjs/toolkit'
import {secureGet, secureSave,storeLocal,secureDelete} from "../utils/storage"
import { getData } from "../utils/helper";




const Settings = () => {

    const [darkModeButton, setDarkMode] = useState(true);
    const [textToSpeechButton, setTextToSpeechButton] = useState(false);
    
    const colorScheme = Appearance.getColorScheme();


    const asyncValue = async () => {
        await getData("textToSpeech")
        .then(data => data)
        .then(value => {
          //a state or constant = value
          console.log("Settings yourKey Value:  " + value)
        })
        .catch(err => console.log(err))
      }

      useEffect(()=>{
        const myStringValue = asyncValue()
        if(myStringValue==="TRUE"){
            console.log("mySTringValue",myStringValue)
            setTextToSpeechButton(true)
        }
        else if(myStringValue==="FALSE"){
            setTextToSpeechButton(false)
        }
        //setTextToSpeechValue(myStringValue)
        //console.log("This is my text to speech value",textToSpeechValue)
       },[textToSpeechButton])

    useEffect(() => {
        console.log("TextToSpeechButton Value", textToSpeechButton)
        toggleTextToSpeech()
    },[textToSpeechButton])


    const toggleTextToSpeech = () => {
        console.log("I am here")
        if (textToSpeechButton) {
            console.log("Inside True")
            secureDelete('textToSpeech')
            storeLocal('textToSpeech',"TRUE")
        }

        else 
        {
            console.log("Inside False")
            secureDelete('textToSpeech')
            storeLocal('textToSpeech',"FALSE")
        }
    }

    //secureSave('textToSpeech' , textToSpeechButton)
    //storeLocal('textToSpeech',textToSpeechButton)
    console.log("This is my texttospeech butotn",textToSpeechButton)



    

    
   
    const textToSpeechFunction = ({children}) => {
        return(
            <MyContext.Provider value={{ textToSpeechButton, setTextToSpeechButton }}>
            {children}
          </MyContext.Provider>
        )
    }

   
    

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
            <TouchableWithoutFeedback onPress={
                () => {
                    setTextToSpeechButton(!textToSpeechButton)
                    
                }
                }>
                <View>
                    <FontAwesome  name={textToSpeechButton ? 'toggle-on' : 'toggle-off'} size={30} />
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