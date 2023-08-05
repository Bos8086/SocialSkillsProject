import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const AutisticHomePage = ({ navigation }) => {
  const onPressFormal = () => {
    navigation.navigate("FormalPage");
  };

  const onPressInformal = () => {
    navigation.navigate("InformalPage");
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.mainHeading}>
        <Text style={styles.headingText}>Select the Option that applies to you</Text>
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
  headingText:{
    fontSize:20,
    fontWeight:"bold"
}
});

export default AutisticHomePage;
