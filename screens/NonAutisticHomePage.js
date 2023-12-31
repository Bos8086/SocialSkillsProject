import { View, Text, StyleSheet,Appearance } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAws5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import darkMode from "../styles/darkMode";




const BulletPoint = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  //const colorScheme = "light"
  return (
    <View style={styles.bulletPoint}>
      <View style={colorScheme == "light" ? styles.bullet : darkMode.bullet} />
      <Text style={colorScheme == "light" ? styles.bulletText : darkMode.bulletText}>{children}</Text>
    </View>
  );
};

const NonAutistcHomePage = ({navigation}) => {


  const colorScheme = Appearance.getColorScheme();
  //const colorScheme = "light"


  

  return (
    <ScrollView>
      <View style={colorScheme == "light" ? styles.mainView : darkMode.mainView}>
      <Text style={colorScheme == "light" ? styles.headingText : darkMode.headingText}>Ways to Support An Autistic Person</Text>

      <View style={styles.container}>
        <View style={styles.bulletPointView}>
          <BulletPoint>Be Kind</BulletPoint>
          <Fontisto name="smiley" size={25} style={colorScheme == "light" ? styles.iconStyle4: darkMode.iconStyle4}/>
        </View>

        <View style={styles.bulletPointView}>
          
          <BulletPoint>Avoid Speaking in Idioms and Parables</BulletPoint>
          <FontAws5 name="teamspeak" size={25} style={colorScheme == "light" ? styles.iconStyle3: darkMode.iconStyle3}/>
        </View>
       

        <View style={styles.bulletPointView}>
          <BulletPoint>
            Be clear and concise about ending the Conversations
          </BulletPoint>
          <AntDesign name="arrowright" size={25}  style={colorScheme == "light" ? styles.iconStyle1: darkMode.iconStyle1}/>
        </View>


        <View style={styles.bulletPointView}>
        <BulletPoint>
          Avoid relying on tonal expressions while speaking
        </BulletPoint>
        <MaterialCommunityIcons name="text-to-speech-off" size={30} style={colorScheme == "light" ? styles.iconStyle4: darkMode.iconStyle4}/>
        </View>
       

        <BulletPoint>Be clear and concise when giving instructions</BulletPoint>

        <View style={styles.bulletPointView}>
          <BulletPoint>Do not make assumptions</BulletPoint>
          <AntDesign name="disconnect" size={30} style={colorScheme == "light" ? styles.iconStyle2: darkMode.iconStyle2}/>
        </View>

        <View style={styles.bulletPointView}>
          <BulletPoint>
            Ask for people's prefered method of conversation
          </BulletPoint>
          <FontAws5 name="people-arrows" size={30} style={colorScheme == "light" ? styles.iconStyle4: darkMode.iconStyle4} />
        </View>

        <View style={styles.bulletPointView}>
          <BulletPoint>
            Check for understanding, Ask follow up questions to ensure you have
            summarised what you are expecting of the person
          </BulletPoint>
          <FontAws5 name="handshake" size={30} style={colorScheme == "light" ? styles.iconStyle4: darkMode.iconStyle4} />
        </View>

        <View style={styles.bulletPointView}>
          <BulletPoint>
            Say a persons's name to get their focus and attention
          </BulletPoint>
          <Fontisto name="battery-full" size={30} style={colorScheme == "light" ? styles.iconStyle1: darkMode.iconStyle1} />
        </View>

        <View style={styles.bulletPointView}>
          <BulletPoint>
            Give people time to process the question and answers
          </BulletPoint>
          <Ionicons name="timer-sharp" size={35} style={colorScheme == "light" ? styles.iconStyle1: darkMode.iconStyle1}/>
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
    marginTop: 50,
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
  headingText: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    marginLeft: 10,
    marginTop: 20,
  },
  bulletText: {
    fontSize: 17,
    marginTop: -7,
    color:"black"
  },
  bulletPointView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
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

export default NonAutistcHomePage;
