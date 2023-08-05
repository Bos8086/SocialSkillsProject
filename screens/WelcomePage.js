import { View, Text, TouchableWithoutFeedback, StyleSheet,Image } from "react-native";

import React from "react";

const WelcomePage = ({ navigation }) => {
  const buttonHandler = () => {
    navigation.navigate("IntroPage");
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
        <TouchableWithoutFeedback onPress={buttonHandler}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click Here to continue </Text>
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
