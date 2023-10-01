import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Pressable,
  Button,
} from "react-native";
import { formalQuestionBank } from "../utils/DummyData";
import React, { useState, useEffect } from "react";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../utils/constants";
import darkMode from "../styles/darkMode";

const FormalQuizPage = ({navigation}) => {
  const [Exam, setExam] = useState(false);
  const [IntroPage, setIntroPage] = useState(true);
  const [InfoPage, setInfoPage] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [remainingTime, setRemainingTime] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [userAnswers, setUserAnswers] = useState(
    new Array(formalQuestionBank.length)
  );

  const colorScheme = Appearance.getColorScheme();

  const currentQuestionTwo = formalQuestionBank[currentQuestionIndex];

  const onPressMoreInfo = () => {
    setExam(false);
    setIntroPage(false);
    setInfoPage(true);
    setShowInstructions(false);
    setShowExam(false);
  };

  const onPressInstructions = () => {
    setExam(false);
    setIntroPage(false);
    setInfoPage(false);
    setShowInstructions(true);
    setShowExam(false);
  };

  const onPressExam = () => {
    setExam(true);
    setIntroPage(false);
    setInfoPage(false);
    setShowInstructions(false);
    setShowExam(false);
  };

  const onPressDisplayExam = () => {
    setExam(false);
    setIntroPage(false);
    setInfoPage(false);
    setShowInstructions(false);
    setShowExam(true);
    handleStartTimer();
  };

  const onPressTryAgain = () => {
    navigation.navigate("FormalHomePage")
  }


  const instruction = () => {
    return (
      <>
        <View
          style={
            colorScheme == "light" ? styles.mainHeading : darkMode.mainHeading
          }
        >
          <Text style={{ alignSelf: "center" }}>Instructions</Text>

          <Text style={styles.instructionsHeading}>
            Purpose and Objectives:
          </Text>

          <Text>
            This practice exam is designed to test your knowledge and
            understanding of React Native concepts and principles. By completing
            this practice exam, you will gain a better understanding of the
            format and style of the actual exam and be better prepared to
            succeed.
          </Text>

          <Text style={styles.instructionsHeading}>Instructions:</Text>

          <Text>
            To begin the practice exam, download and install the React Native
            application on your device. Once installed, navigate to the
            "Practice Exam" section within the app and select "Start Exam." The
            exam will consist of 20 multiple-choice questions and 5 coding
            questions, with a total time limit of 2 hours.
          </Text>

          <Text style={styles.instructionsHeading}>Using the Exam:</Text>

          <Text>
            To answer each multiple-choice question, select the answer that you
            believe is correct. To answer the coding questions, write your code
            in the provided text editor. You can navigate between questions
            using the "Previous" and "Next" buttons. Once you have completed all
            questions, select "Submit Exam" to submit your answers.
          </Text>
        </View>
      </>
    );
  };

  const answeredQuestions = userAnswers.filter(
    (answer) => answer !== undefined
  );

  const progress = (answeredQuestions.length / formalQuestionBank.length) * 100;

  const handleNextQuestion = () => {
    if (currentQuestionIndex === formalQuestionBank.length - 1) {
      () => {
        console.log("I have come from Last Question");
        handleSubmission;
      };
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === formalQuestionBank[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmission = () => {
    const answeredAllQuestions = userAnswers.every(
      (answer) => answer !== undefined
    );
    const hasAnswer = userAnswers.some((answer) => answer !== undefined);
    if (answeredAllQuestions && hasAnswer) {
      setSubmitted(true);
      setExam(false);
      setInfoPage(false);
      setIntroPage(false);
      setShowExam(false);
    } else {
      // Display an error message to the user
      alert("Please answer all questions before submitting.");
    }
  };

  const handleAnswerSelection = (selectedOption) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedUserAnswers);
    if (currentQuestionIndex === formalQuestionBank.length - 1) {
      () => {
        console.log("I have come from Last Question");
        handleSubmission;
      };
    } else {
      handleNextQuestion();
    }
  };

  const handleStartTimer = () => {
    setIsTimerRunning(true);
    setRemainingTime(3600);
  };

  useEffect(() => {
    // Set the initial remaining time to 60 minutes (3600 seconds)

    // Update the remaining time every second
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Convert remaining time in seconds to minutes and seconds
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;



  return (
    <View>
      {IntroPage && (
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
            Welcome, Hopefully you feel prepared for the Quiz. Click below to
            find out more
          </Text>

          <Pressable
            onPress={onPressMoreInfo}
            style={
              colorScheme == "light" ? styles.mainButton : darkMode.mainButton
            }
          >
            <Text
              style={
                colorScheme == "light" ? styles.buttonText : darkMode.buttonText
              }
            >
              More Information
            </Text>
          </Pressable>
        </View>
      )}

      {InfoPage && (
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
            Select a button
          </Text>

          <Pressable
            onPress={onPressInstructions}
            style={
              colorScheme == "light" ? styles.mainButton : darkMode.mainButton
            }
          >
            <Text
              style={
                colorScheme == "light" ? styles.buttonText : darkMode.buttonText
              }
            >
              Instructions
            </Text>
          </Pressable>

          <Pressable
            onPress={onPressExam}
            style={
              colorScheme == "light" ? styles.mainButton : darkMode.mainButton
            }
          >
            <Text
              style={
                colorScheme == "light" ? styles.buttonText : darkMode.buttonText
              }
            >
              Exam
            </Text>
          </Pressable>
        </View>
      )}

      {showInstructions && instruction()}

      {Exam && (
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
            Select to begin the Test
          </Text>

          <View>
            <Text
              style={
                colorScheme == "light"
                  ? styles.headingText
                  : darkMode.headingText
              }
            >
              {" "}
              Goodluck ! :)
            </Text>
          </View>

          <Pressable
            onPress={onPressDisplayExam}
            style={
              colorScheme == "light" ? styles.mainButton : darkMode.mainButton
            }
          >
            <Text
              style={
                colorScheme == "light" ? styles.buttonText : darkMode.buttonText
              }
            >
              Begin Test
            </Text>
          </Pressable>
        </View>
      )}

      {showExam && (
        <View>
          <View>
            <Ionicons name="timer" size={15} style={{ paddingRight: 10 }} />
            <Text>
              {minutes}mins {seconds < 10 ? `0${seconds}` : seconds}s
            </Text>
          </View>

          <View>
            <Progress.Bar
              progress={progress / 100}
              borderRadius={20}
              width={180}
              height={20}
              color={COLORS.colorThree}
              unfilledColor="#E1E5E7"
              style={{ margin: 10, alignSelf: "center" }}
            >
              <Text
                style={{
                  position: "absolute",
                  color: "white",
                  left: (progress / 100) * 130,
                }}
              >
                {(progress / 100) * 100}%
              </Text>
            </Progress.Bar>

            <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
              <Text style={{ paddingHorizontal: 10 }}>
                Q{currentQuestionTwo ? currentQuestionTwo.key : "N/A"}
              </Text>
              <Text style={{ fontWeight: "bold" }}>
                Q{currentQuestionTwo ? currentQuestionTwo.question : "N/A"}
              </Text>
            </View>
            {currentQuestionTwo?.options.map((option) => (
              <Button
                title={option}
                key={option}
                onPress={() => handleAnswerSelection(option)}
              />
            ))}
            <View>
              <Button
                title="Previous Question"
                disabled={currentQuestionIndex === 0}
                onPress={handlePrevQuestion}
              />
              <Button
                title="Next Question"
                disabled={
                  currentQuestionIndex === formalQuestionBank.length - 1
                }
                onPress={handleNextQuestion}
              />

              <View>
                <Pressable
                  onPress={() => handleSubmission()}
                  style={{
                    backgroundColor: COLORS.colorThree,
                    alignItems: "center",
                    height: 60,
                    justifyContent: "center",
                    marginBottom: 20,
                    marginTop: 50,
                    marginLeft: 20,
                    marginRight: 20,
                    borderRadius: 40,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.colorFive,
                      fontSize: 15,
                      fontWeight: "300",
                    }}
                  >
                    Submit
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      )}

      {submitted && (
        <View
          style={
            colorScheme == "light" ? styles.mainHeading : darkMode.mainHeading
          }
        >
          <Text style={{ marginBottom: 30 }}>
            Your score is {calculateScore()} out of {formalQuestionBank.length}
          </Text>
          {calculateScore() === formalQuestionBank.length && (
            <View style={{ flexDirection: "row" }}>
              <Text>Congratulations!</Text>
              <Ionicons name="trophy" size={30} color={"black"} />
            </View>
          )}

          {calculateScore() != formalQuestionBank.length && (
            <View style={{ flexDirection: "row" }}>
              <Text>Try Again!</Text>
              <Pressable>
                <Text>Redo</Text>
              </Pressable>
            </View>
          )}

          <Pressable
          onPress={onPressTryAgain}
            style={
              colorScheme == "light" ? styles.mainButton : darkMode.mainButton
            }
          >
            <Text style={
                colorScheme == "light" ? styles.buttonText : darkMode.buttonText
              }>Try again</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}


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
    marginBottom: 50,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  instructionsHeading: {
    fontWeight: "900",
    padding: 5,
  },
});

export default FormalQuizPage