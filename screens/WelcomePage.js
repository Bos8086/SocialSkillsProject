import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Appearance,
} from "react-native";
import React, { useEffect, useState } from "react";
import darkMode from "../styles/darkMode";
import { getData } from "../utils/helper";

const WelcomePage = ({ navigation }) => {
  const [textToSpeechValue, setTextToSpeechValue] = useState("");

  const asyncValue = async () => {
    await getData("textToSpeech")
      .then((data) => data)
      .then((value) => {
        //a state or constant = value
        console.log(" Welcome yourKey Value:  " + value);
      })
      .catch((err) => console.log(err));
  };

  //  getMyStringValue = async () => {
  //   try {
  //     console.log("I am in here")
  //      await AsyncStorage.getItem('textToSpeech').then((data) => {
  //       console.log(data)
  //       return data;
  //      })
  //   } catch(e) {
  //     // read error
  //   }
  //   console.log('Done.')
  // }

  useEffect(() => {
    const myStringValue = asyncValue();
    setTextToSpeechValue(myStringValue);
    console.log("This is my text to speech value", textToSpeechValue);
  }, []);

  //  export const getLocal = async (key: string) => {
  //   try {
  //     await AsyncStorage.getItem(key).then((data: any) => {
  //       // console.log(data);
  //       return data;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const colorScheme = Appearance.getColorScheme();
  //const {textToSpeech} = useContext(textToSpeech)

  // const speakTextContinue = () => {
  //   console.log(textToSpeechValue)
  //   if (textToSpeechValue == true) {
  //     const thingToSay = 'continue';
  //     Speech.speak(thingToSay);
  //   }
  // };

  //   const speakTextSettings = () => {
  //     const thingToSay = 'Settings';
  //     Speech.speak(thingToSay);
  // };

  const buttonHandlerContinue = () => {
    //speakTextContinue()
    navigation.navigate("IntroPage");
  };

  const buttonHandlerSettings = () => {
    //speakTextSettings()
    navigation.navigate("Settings");
  };

  return (
    <View style={colorScheme == "light" ? styles.mainView : darkMode.mainView}>
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
          Welcome
        </Text>
      </View>

      <View style={styles.viewImage}>
        <Image
          style={styles.homeImage}
          source={require("../assets/peopleImage.png")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={buttonHandlerContinue}>
          <View
            style={colorScheme == "light" ? styles.button : darkMode.button}
          >
            <Text style={styles.buttonText}>Click Here to continue </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={buttonHandlerSettings}>
          <View
            style={colorScheme == "light" ? styles.button : darkMode.button}
          >
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
  mainView: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
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
  buttonContainer: {
    alignSelf: "center",
    marginTop: 10,
  },
  homeImage: {
    alignSelf: "center",
    width: "80%",
    resizeMode: "contain",
    height: 300,
  },
  viewImage: {
    width: "100%",
    height: "30%",
    marginBottom: 30,
  },
});

export default WelcomePage;
