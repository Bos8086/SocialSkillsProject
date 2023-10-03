import React from 'react';
import { View, Text, ScrollView ,StyleSheet,Appearance } from 'react-native';
import { formalQuestionBank } from './DummyData';
import darkMode from '../styles/darkMode';

const QuestionDetail = ({ questionData }) => {
  const { question, correctAnswer, explanation } = questionData;
  const colorScheme = Appearance.getColorScheme();

  return (
    <View>
      <Text style={styles.quizTextpoi}>Question: {question}</Text>
      <Text style={styles.quizTextpoi}>Correct Answer: {correctAnswer}</Text>
      <Text style={styles.quizTextpoi}>Explanation: {explanation}</Text>
      <View  style={
          colorScheme == "light" ? styles.dividerQuiz : darkMode.dividerQuiz
        }/>
    </View>
  );
};

const FormalQuestionsSolution = () => {

  return (
    <ScrollView style={{marginBottom:150}}>
      {formalQuestionBank.map((questionData) => (
        <QuestionDetail key={questionData.key} questionData={questionData} />
      ))}
      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  quizTextpoi:{
    color:"white"
  }
})

export default FormalQuestionsSolution
