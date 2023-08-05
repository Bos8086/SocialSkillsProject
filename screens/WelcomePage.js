import { View, Text, TouchableWithoutFeedback, StyleSheet,Image } from "react-native";
import React , { useEffect } from "react";
import * as Speech from 'expo-speech';


const WelcomePage = ({ navigation }) => {

  const speakTextContinue = () => {
      const thingToSay = 'hellooooo';
      Speech.speak(thingToSay);  
  };

  const speakTextSettings = () => {
    const thingToSay = 'Settings';
    Speech.speak(thingToSay);  
};



  const buttonHandlerContinue = () => {
    speakTextContinue
    navigation.navigate("IntroPage");
  };

  const buttonHandlerSettings = () => {
    speakTextSettings
    navigation.navigate("Settings");
  };

  return (
    <View style={styles.mainView}>
        <View style={styles.mainHeading}>
            <Text style={styles.headingText}>Welcome</Text>
        </View>


        <View style={styles.viewImage}>
            <Image
            style={styles.homeImage}
            source={require('../assets/peopleImage.png')}
        />
        </View>
     

      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={buttonHandlerContinue}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click Here to continue </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={buttonHandlerSettings}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Settings</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

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
}
});

export default WelcomePage;
