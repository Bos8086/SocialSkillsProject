import { View, Text, Pressable, StyleSheet,Linking, Appearance } from 'react-native'
import React , {useState} from 'react'
import darkMode from '../styles/darkMode';
import * as Speech from 'expo-speech'



const IntroPage = ({ navigation }) => {



    // const [theme,setTheme] = useState(Appearance.getColorScheme());
    // Appearance.addChangeListener((scheme) => {
    //     console.log("scheme",scheme.colorScheme)
    // })
    const colorScheme = Appearance.getColorScheme();

    const onPressAutistic = () => {
        navigation.navigate("AutisticHomePage")
    }

    const onPressNonAutistic = () => {
        navigation.navigate("NonAutisticHomePage")
    }

    const onPressIdioms = () => {
        Linking.openURL('https://www.ef.co.uk/english-resources/english-idioms/');
    }

    const handleVoice = () => {
        Speech.speak("I am here")
        console.log("pressed")
    }

   

  return (
    <View style={colorScheme == 'light'?styles.mainView:darkMode.mainView}>

        <View style={colorScheme == 'light'?styles.mainHeading:darkMode.mainHeading}>
            <Text style={colorScheme == 'light'?styles.headingText:darkMode.headingText}>Select the Option that applies to you</Text>
        </View>

        <View style={colorScheme == 'light'?styles.optionView:darkMode.optionView}>
            <Pressable onPress={onPressAutistic} style={colorScheme == 'light'?styles.mainButton:darkMode.mainButton}>
                <Text style={colorScheme == 'light'?styles.buttonText:darkMode.buttonText}>
                    Autistic
                </Text>   
            </Pressable>


            <Pressable onPress={onPressNonAutistic} style={colorScheme == 'light'?styles.mainButton:darkMode.mainButton}>
                <Text style={colorScheme == 'light'?styles.buttonText:darkMode.buttonText}>
                    Autistic Support
                </Text>
  
                
            </Pressable>

            {/* <Pressable onPress={handleVoice} style={colorScheme == 'light'?styles.mainButton:darkMode.mainButton}>
                <Text style={colorScheme == 'light'?styles.buttonText:darkMode.buttonText}>
                    TTS Pressable
                </Text>             
            </Pressable> */}

            
        </View>
     
    </View>
  )
}

export default IntroPage


const styles = StyleSheet.create({
    mainButton: {
      backgroundColor: "black",
      marginBottom: 10,
      marginTop: 50,
      padding: 5,
      width: "60%",
      height:100,
      alignItems: "center",
      alignSelf: "center",
      justifyContent:"center"
    },
    optionView:{
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        height:"60%",
    },
    buttonText: {
      fontSize: 20,
      color:"white",     
    },
    centerView:{
      width:"100%",
      height:"100%"
    },
    mainView:{
        backgroundColor:"lightgrey",
        width:"100%",
        height:"100%"
    },
    mainHeading:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
        marginBottom:50
    },
    headingText:{
        fontSize:20,
        fontWeight:"bold"
    }
  });