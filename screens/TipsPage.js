import { View, Text, StyleSheet , Appearance } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAws5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import darkMode from "../styles/darkMode";


const TipsPage = ({ navigate }) => {
  const colorScheme = Appearance.getColorScheme();

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

  return (
    <View style={colorScheme == 'light'?styles.mainView:darkMode.mainView}>
      <View style={colorScheme == 'light'?styles.mainHeading:darkMode.mainHeading}>
        <Text style={colorScheme == 'light'?styles.headingText:darkMode.headingText}>Tips</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.bulletPointView}>
            <BulletPoint>Be Kind</BulletPoint>
            <Fontisto name="smiley" size={25} style={colorScheme == "light" ? styles.iconStyle4: darkMode.iconStyle4}/>
          </View>
      </View>
      <View style={styles.bulletPointView}>
          <BulletPoint>
            Be clear and concise about ending the Conversations
          </BulletPoint>
          <AntDesign name="arrowright" size={25}  style={colorScheme == "light" ? styles.iconStyle1: darkMode.iconStyle1}/>
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

export default TipsPage;
