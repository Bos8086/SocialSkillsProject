import { View, Text, StyleSheet,Pressable,Modal } from "react-native";
import React from "react";

const ConversationsPage = ({ navigation }) => {
  const onPressFormal = () => {
    navigation.navigate("FormalPage");
  };

  const onPressInformal = () => {
    navigation.navigate("InformalPage");
    
  };

  const onPressTips = () => {
    Linking.openURL("https://www.ef.co.uk/english-resources/english-idioms/");
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.mainHeading}>
        <Text style={styles.headingText}>
          Select an option 
        </Text>
      </View>

      <View>
        <Pressable onPress={onPressFormal} style={styles.mainButton}>
          <Text style={styles.buttonText}>Formal</Text>
        </Pressable>

        <Pressable onPress={onPressInformal} style={styles.mainButton}>
          <Text style={styles.buttonText}>InFormal</Text>
        </Pressable>
      </View>
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

export default ConversationsPage;
