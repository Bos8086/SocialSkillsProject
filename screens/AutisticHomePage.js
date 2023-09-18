import { View, Text, Pressable, StyleSheet,Linking, Appearance,ScrollView } from "react-native";
import React from "react";
import darkMode from "../styles/darkMode";

const AutisticHomePage = ({ navigation }) => {



  const colorScheme = Appearance.getColorScheme();

  const onPressConversations = () => {
    navigation.navigate("ConversationsPage");
  };

  const onPressIdioms = () => {
    Linking.openURL("https://www.ef.co.uk/english-resources/english-idioms/");
  };

  const onPressTips = () => {
    navigation.navigate("TipsPage");
  };

  const onPressBodyLanguage = () => {
    navigation.navigate("BodyLanguage");
  }

  return (
    <ScrollView>
      <View  style={colorScheme == 'light'?styles.mainView:darkMode.mainView}>
      <View style={colorScheme == 'light'?styles.mainHeading:darkMode.mainHeading}>
        <Text style={colorScheme == 'light'?styles.headingText:darkMode.headingText}>
          Select an Option
        </Text>
      </View>

      <View style={colorScheme == 'light'?styles.optionView:darkMode.optionView}>
        <Pressable onPress={onPressConversations} style={colorScheme == 'light'?styles.mainButton:darkMode.mainButton}>
          <Text style={colorScheme == 'light'?styles.buttonText:darkMode.buttonText}>Conversations</Text>
        </Pressable>

        <Pressable onPress={onPressIdioms} style={colorScheme == 'light'?styles.mainButton:darkMode.mainButton}>
          <Text style={colorScheme == 'light'?styles.buttonText:darkMode.buttonText}>Idioms</Text>
        </Pressable>

        <Pressable onPress={onPressTips} style={colorScheme == 'light'?styles.mainButton:darkMode.mainButton}>
          <Text style={colorScheme == 'light'?styles.buttonText:darkMode.buttonText}>Tips</Text>
        </Pressable>

        <Pressable onPress={onPressBodyLanguage} style={colorScheme == 'light'?styles.mainButton:darkMode.mainButton}>
          <Text style={colorScheme == 'light'?styles.buttonText:darkMode.buttonText}>Body Language</Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
    
  );
};

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
});

export default AutisticHomePage;
