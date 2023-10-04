import React from "react";
import { View, Text, ScrollView, StyleSheet, Appearance } from "react-native";
import { inFormalQuestionBank } from "./DummyData";
import darkMode from "../styles/darkMode";

const QuestionDetail = ({ questionData }) => {
  const {key, question, correctAnswer, explanation } = questionData;
  const colorScheme = Appearance.getColorScheme();

  return (
    <View style={{marginHorizontal:20}}>
      <View style={{flexDirection:"row",marginBottom:10}}>
        <Text  style={
          colorScheme == "light" ? styles.quizResultsHeading: darkMode.quizResultsHeading
        }>{key}</Text>
        <Text style={
          colorScheme == "light" ? styles.quizResultsHeading: darkMode.quizResultsHeading
        }>Question: {question}</Text>
      </View>
      <Text style={
          colorScheme == "light" ? styles.quizResultsCorectAnswer: darkMode.quizResultsCorectAnswer
        }>Correct Answer: {correctAnswer}</Text>
      <Text style={ colorScheme == "light" ? styles.quizResultsExplanation: darkMode.quizResultsExplanation}>Explanation: {explanation}</Text>
      <View
        style={
          colorScheme == "light" ? styles.dividerQuiz : darkMode.dividerQuiz
        }
      />
    </View>
  );
};

const InformalQuestionsSolution = () => {
  return (
    <ScrollView style={{ marginBottom: 100,marginHorizontal:20 }}>
      {inFormalQuestionBank.map((questionData) => (
        <QuestionDetail key={questionData.key} questionData={questionData} />
      ))}
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  quizTextpoi: {
    color: "white",
  },
  dividerQuiz: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  quizResultsHeading: {
    color: "black",
    fontWeight:"bold",
    paddingHorizontal:10
  },
  dividerQuiz: {
    color: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  quizResultsCorectAnswer:{
    fontWeight:"bold",
    color: "black",
    paddingRight:10,
    marginVertical:5
  },
  quizResultsExplanation:{
    fontWeight:"400",
    color: "black",
    paddingRight:10
  }
});

export default InformalQuestionsSolution;
