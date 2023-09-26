import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Appearance,
} from "react-native";
import React from "react";
import darkMode from "../styles/darkMode";
import { ScrollView } from "react-native-gesture-handler";

const BodyLanguage = () => {
  const colorScheme = Appearance.getColorScheme();

  const BulletPoint = ({ children }) => {
    const colorScheme = Appearance.getColorScheme();
    //const colorScheme = "light"
    return (
      <View style={styles.bulletPoint}>
        <View
          style={colorScheme == "light" ? styles.bullet : darkMode.bullet}
        />
        <Text
          style={
            colorScheme == "light" ? styles.bulletText : darkMode.bulletText
          }
        >
          {children}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={colorScheme == "light" ? styles.mainView : darkMode.mainView}>
      <Text
        style={
          colorScheme == "light" ? styles.mainInfoText : darkMode.mainInfoText
        }
      >
        Body language refers to the non-verbal communication cues that
        individuals use to convey their thoughts, feelings, and intentions. It
        involves the use of facial expressions, gestures, posture, and other
        physical movements to communicate without words. Body language can be a
        powerful form of communication as it can convey emotions, attitudes, and
        messages, often subconsciously.
      </Text>

      <View>
        <Text
          style={
            colorScheme == "light" ? styles.smallHeading : darkMode.smallHeading
          }
        >
          Types of Body language
        </Text>

        <View>
          <Text>Positive Body Language</Text>
          <Text>Negative Body Language</Text>
        </View>

        <View>
          <Text
            style={
              colorScheme == "light"
                ? styles.smallHeading
                : darkMode.smallHeading
            }
          >
            Positive Body Language
          </Text>
          <Text>
            This type of body language conveys openness, approchability and
            confidence
          </Text>
          <Text
            style={
              colorScheme == "light"
                ? styles.smallHeading
                : darkMode.smallHeading
            }
          >
            Examples Include
          </Text>
          <View style={styles.bulletPointView}>
            <BulletPoint>Smiling</BulletPoint>
          </View>
          <View style={styles.bulletPointView}>
            <BulletPoint>Open Posture</BulletPoint>
          </View>
          <View style={styles.bulletPointView}>
            <BulletPoint>Relaxed Posture</BulletPoint>
          </View>
          <View style={styles.bulletPointView}>
            <BulletPoint>Nodding</BulletPoint>
          </View>


          <Text
            style={
              colorScheme == "light"
                ? styles.smallHeading
                : darkMode.smallHeading
            }
          >
            Negative Body Language
          </Text>
          <Text>
            This type of body language conveys uncomfortability,disinterest,discomfort
          </Text>
          <Text
            style={
              colorScheme == "light"
                ? styles.smallHeading
                : darkMode.smallHeading
            }
          >
            Examples Include
          </Text>
          <View style={styles.bulletPointView}>
            <BulletPoint>Interrupting</BulletPoint>
          </View>
          <View style={styles.bulletPointView}>
            <BulletPoint>Frowning</BulletPoint>
          </View>
          <View style={styles.bulletPointView}>
            <BulletPoint>Sighing</BulletPoint>
          </View>
          <View style={styles.bulletPointView}>
            <BulletPoint>Closed Posture</BulletPoint>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
    
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
    color: "black",
  },
  bodyText: {
    //marginBottom: 100,
    color: "black",
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
    // marginVertical:60,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    // margin: 20,
    backgroundColor: "rgba(149,149,155, 0.9)",
    // backgroundColor: '#CCCCC9',
    borderRadius: 20,
  },
  modalTextView: {
    opacity: 1,
    position: "absolute",
    top: 300,
    left: 80,
    height: "30%",
    width: "70%",
    borderRadius: 15,
    elevation: 40,
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 100,
    backgroundColor: "white",
    width: "20%",
    height: "10%",
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  modalTextContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    opacity: 1,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 2,
    height: "100%",
    width: "100%",
    //justifyContent:"center",
  },
  headingModalText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  mainInfoText: {
    color: "black",
  },
  closeIcon: {
    color: "black",
  },
  bulletPointView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 30,
    marginRight: 20,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
    marginRight: 8,
  },
});

export default BodyLanguage;
