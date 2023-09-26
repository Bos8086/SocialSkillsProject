import { View, Text, StyleSheet, Pressable,Appearance, Linking } from 'react-native'
import React from 'react'
import darkMode from '../styles/darkMode'

const IdiomsPage = () => {

  const colorScheme = Appearance.getColorScheme();

  const onPressIdioms = () => {
    Linking.openURL("https://www.ef.co.uk/english-resources/english-idioms/");
  };

  return (
    <View>
      <Text> Click here to learn more about Idioms </Text>
      <Pressable onPress={onPressIdioms} style={colorScheme == 'light'?styles.mainButton:darkMode.mainButton}>
          <Text style={colorScheme == 'light'?styles.buttonText:darkMode.buttonText}>Idioms</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: "black",
    marginBottom: 10,
    marginTop: 50,
    padding: 5,
    width: "60%",
    height: 100,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  optionView: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "60%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    //fontFamily:'sans-serif'
  },
  centerView: {
    width: "100%",
    height: "100%",
  },
  mainView: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: "100%",
  },
  mainHeading: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom:50
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bulletPointView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  bulletText: {
    fontSize: 17,
    marginTop: -7,
    color:"black"
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
    marginRight: 8,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 30,
    marginRight: 20,
  },
  iconStyle1:{
    marginLeft: 30,
    color:"black"
  },
  iconStyle2:{
    marginLeft: 80, 
    color:"black"
  },
  iconStyle3:{
    marginLeft:60,
    color:"black"
  },
  iconStyle4:{
    color:"black"
  }
});

export default IdiomsPage