import { View, Text, StyleSheet, Pressable, Appearance } from "react-native";
import React from "react";
import darkMode from "../styles/darkMode";


const DisclaimerScreen = ({ navigation }) => {
  const onPressContine = () => {
    navigation.navigate("WelcomePage");
  };

  const colorScheme = Appearance.getColorScheme();

  return (
    <View style={colorScheme == "light" ? styles.mainView : darkMode.mainView}>
      <View style={{paddingHorizontal:10}}>
        <Text
          style={
            colorScheme == "light" ? styles.headingText : darkMode.headingText
          }
        >
          This software is for research purposes, testing, and user feedback. It
          does not offer any form of medical advice. The application provides
          links to organizations and charities that offer support to people with
          Autism. Please seek professional advice if needed This application
          does not store any user data.
        </Text>
      </View>

      <View>
        <Pressable
          onPress={onPressContine}
          style={
            colorScheme == "light" ? styles.mainButton : darkMode.mainButton
          }
        >
          <Text
            style={
              colorScheme == "light" ? styles.buttonText : darkMode.buttonText
            }
          >
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

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
    marginBottom: 50,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DisclaimerScreen;
