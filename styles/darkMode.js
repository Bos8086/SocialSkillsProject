import react from "react";
import { StyleSheet } from "react-native";

const darkMode = StyleSheet.create({
  mainButton: {
    backgroundColor: "grey",
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
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  mainHeading: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
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
    backgroundColor: "white",
    marginRight: 8,
  },
  headingText: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "white",
  },
  container: {
    marginLeft: 10,
    marginTop: 20,
  },
  bulletText: {
    fontSize: 17,
    marginTop: -7,
    color: "white",
  },
  bulletPointView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: 10,
    //color:"grey"
  },
  button: {
    alignItems: "center",
    backgroundColor: "grey",
    padding: 10,
  },
  mainText: {
    fontSize: 20,
    color: "white",
  },
  body: {
    marginLeft: 11,
    marginRight: 10,
  },
  bodyText: {
    color: "white",
  },
  smallButtonText: {
    fontSize: 15,
    color: "white",
  },

  smallButton: {
    backgroundColor: "grey",
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
  smallHeading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    color: "white",
  },
  mainInfoText: {
    color: "white",
    paddingHorizontal: 10,
  },
  modalTextContainer: {
    width: "100%",
    backgroundColor: "black",
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
  closeIcon: {
    color: "white",
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 100,
    backgroundColor: "black",
    width: "20%",
    height: "10%",
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  headingModalText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
    color: "white",
  },
  iconStyle1: {
    marginLeft: 30,
    color: "white",
  },
  iconStyle2: {
    marginLeft: 80,
    color: "white",
  },
  iconStyle3: {
    marginLeft: 60,
    color: "white",
  },
  iconStyle4: {
    color: "white",
  },
  normalText: {
    color: "white",
  },
  settingsText: {
    color: "white",
  },
  quizQuestions: {
    fontWeight: "bold",
    flexWrap: "wrap",
    paddingRight: 25,
    color: "white",
  },
  quizQuestionsNo: {
    paddingHorizontal: 10,
    color: "white",
  },
  progressBar: {
    color: "red",
  },
  timerText: {
    color: "white",
    fontSize:20,
    alignSelf:"center"
  },
  timerIcon: {
    color: "white",
    paddingRight: 10,
  },
  instructionsHeading: {
    fontWeight: "900",
    padding: 5,
    color: "white",
  },
  instructionsText: {
    color: "white",
  },
  quizText:{
    color:"white",
    marginVertical:10
  },
  dividerQuiz: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  quizTextpoi: {
    color: "white",
  },
  quizResultsHeading: {
    color: "white",
    fontWeight:"bold",
    paddingHorizontal:10
  },
  quizResultsCorectAnswer:{
    fontWeight:"bold",
    color: "white",
    paddingRight:10,
    marginVertical: 5
  },
  quizResultsExplanation:{
    fontWeight:"500",
    color: "white",
    paddingRight:10
  }
 
});

export default darkMode;
