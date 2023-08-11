import { View, Text, Pressable, StyleSheet,Linking } from "react-native";
import React from "react";

const AutisticHomePage = ({ navigation }) => {

  const onPressConversations = () => {
    navigation.navigate("ConversationsPage");
  };

  const onPressIdioms = () => {
    Linking.openURL("https://www.ef.co.uk/english-resources/english-idioms/");
  };

  const onPressTips = () => {
    navigation.navigate("TipsPage");
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.mainHeading}>
        <Text style={styles.headingText}>
          Select an Option
        </Text>
      </View>

      <View style={styles.optionView}>
        <Pressable onPress={onPressConversations} style={styles.mainButton}>
          <Text style={styles.buttonText}>Conversations</Text>
        </Pressable>

        <Pressable onPress={onPressIdioms} style={styles.mainButton}>
          <Text style={styles.buttonText}>Idioms</Text>
        </Pressable>

        <Pressable onPress={onPressTips} style={styles.mainButton}>
          <Text style={styles.buttonText}>Tips</Text>
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
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AutisticHomePage;
