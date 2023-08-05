import { View, Text, TouchableWithoutFeedback, StyleSheet,Image } from "react-native";
import React , { useEffect,useState } from "react";
import * as Speech from 'expo-speech';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Settings = () => {

    const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={styles.mainView}> 
      <View style={styles.mainHeading}>
            <Text style={styles.headingText}>Settings</Text>
        </View>
        <View style={styles.content}>
           <View style={styles.language}>
            <Text>
                Language
            </Text>
            <Text>
                English
            </Text>
           </View>
           <View style={styles.language}>
            <Text>
                Dark Mode
            </Text>
            <TouchableWithoutFeedback onPress={() => setDarkMode(!darkMode)}>
                <View>
                    <FontAwesome  name={darkMode ? 'toggle-off' : 'toggle-on'} size={30} />
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
  }
  });

export default Settings