import { View, Text, StyleSheet, Appearance, Pressable } from "react-native";
import React from "react";
import darkMode from "../styles/darkMode";

const InformalHomePage = ({navigation}) => {
  const colorScheme = Appearance.getColorScheme();

  const onPressExamples = () => {
    navigation.navigate("InformalPage");
  };

  const onPressQuizes = () => {
    navigation.navigate("InFormalQuizPage");
  };

  return (
    <View
      style={colorScheme == "light" ? styles.optionView : darkMode.optionView}
    >
      <View
        style={
          colorScheme == "light" ? styles.mainHeading : darkMode.mainHeading
        }
      >
        <Text
          style={
            colorScheme == "light" ? styles.headingText : darkMode.headingText
          }
        >
          Select an Option
        </Text>
      </View>
      <Pressable
        onPress={onPressExamples}
        style={colorScheme == "light" ? styles.mainButton : darkMode.mainButton}
      >
        <Text
          style={
            colorScheme == "light" ? styles.buttonText : darkMode.buttonText
          }
        >
          Examples
        </Text>
      </Pressable>

      <Pressable
        onPress={onPressQuizes}
        style={colorScheme == "light" ? styles.mainButton : darkMode.mainButton}
      >
        <Text
          style={
            colorScheme == "light" ? styles.buttonText : darkMode.buttonText
          }
        >
          Quizes
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: "black",
    marginBottom: 50,
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
    marginTop: 30,
    marginBottom: 30,
  },
  mainText: {
    fontSize: 20,
  },
  body: {
    marginLeft: 11,
    marginRight: 10,
  },
  smallHeading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  bodyText: {
    marginBottom: 10,
  },
  bodyHeadingText: {
    fontWeight: "bold",
  },
  mainButton: {
    backgroundColor: "black",
    marginBottom: 50,
    marginTop: 50,
    padding: 5,
    width: "60%",
    height: 100,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  mainButtonText: {
    fontSize: 20,
    color: "white",
  },
  smallButtonText: {
    fontSize: 15,
    color: "white",
  },
  smallButton: {
    backgroundColor: "black",
    marginBottom: 30,
    marginTop: 30,
    padding: 5,
    width: "30%",
    height: 100,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContent: {
    marginLeft: 11,
    marginRight: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default InformalHomePage;
