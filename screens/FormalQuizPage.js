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
import FormalQuestionsSolution from "../utils/FormalQuestionsSolutions";

const FormalQuizPage = ({ navigation }) => {
  const [Exam, setExam] = useState(false);
  const [IntroPage, setIntroPage] = useState(true);
  const [InfoPage, setInfoPage] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const [viewResults, setViewResults] = useState(false);
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

  const onPressViewResults = () => {
    setViewResults(true);
    setExam(false);
    setIntroPage(false);
    setInfoPage(false);
    setShowInstructions(false);
    setShowExam(false);
    setSubmitted(false);
  };

  const onPressTryAgain = () => {
    navigation.navigate("FormalHomePage");
  };

  const instruction = () => {
    return (
      <View
        style={colorScheme == "light" ? styles.mainView : darkMode.mainView}
      >
        <View
          style={
            colorScheme == "light" ? styles.mainHeading : darkMode.mainHeading
          }
        >
          <Text style={{ alignSelf: "center" }}>Instructions</Text>
          <Text
            style={
              colorScheme == "light"
                ? styles.instructionsHeading
                : darkMode.instructionsHeading
            }
          >
            Purpose and Objectives:
          </Text>
          <Text
            style={
              colorScheme == "light"
                ? styles.instructionsText
                : darkMode.instructionsText
            }
          >
            The exam is designed to test your knowledge and
            understanding of Formal Conversations. The Instructtion is to help explain the format of the exam so 
             you will gain a better understanding of the
            format and style of the actual exam and be better prepared to
            succeed.
          </Text>
          <Text
            style={
              colorScheme == "light"
                ? styles.instructionsHeading
                : darkMode.instructionsHeading
            }
          >
            Instructions:
          </Text>
          <Text
            style={
              colorScheme == "light"
                ? styles.instructionsText
                : darkMode.instructionsText
            }
          >
           To begin exam Click the Begin Test button after the more information button. The
            exam will consist of 10 multiple-choice questions, in which there is only 1 correct answer to each question
            with a total time limit of 1 hour.
          </Text>
          <Text
            style={
              colorScheme == "light"
                ? styles.instructionsHeading
                : darkMode.instructionsHeading
            }
          >
            Using the Exam:
          </Text>
          <Text
            style={
              colorScheme == "light"
                ? styles.instructionsText
                : darkMode.instructionsText
            }
          >
            To answer each multiple-choice question, select the answer that you
            believe is correct.  You can navigate between questions
            using the "Previous" and "Next" buttons. Once you have completed all
            questions, select "Submit Exam" to submit your answers.
          </Text>
        </View>
      </View>
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
      
      const unansweredIndexes = userAnswers.reduce((unansweredIndexes, answer, index) => {
        if (answer === undefined) {
          unansweredIndexes.push(index);
        }
        return unansweredIndexes;
      }, []);
  
      if (unansweredIndexes.length > 0) {
        const unansweredQuestions = unansweredIndexes.map((index) => `Question ${index + 1}`).join(', ');
        const alertMessage = `Please answer the following questions: ${unansweredQuestions}`;
        alert(alertMessage);
      } 

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
    <View style={colorScheme == "light" ? styles.mainView : darkMode.mainView}>
      <View>
        {IntroPage && (
          <View
            style={
              colorScheme == "light" ? styles.mainHeading : darkMode.mainHeading
            }
          >
            <Text
              style={
                colorScheme == "light"
                  ? styles.headingText
                  : darkMode.headingText
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
                  colorScheme == "light"
                    ? styles.buttonText
                    : darkMode.buttonText
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
                colorScheme == "light"
                  ? styles.headingText
                  : darkMode.headingText
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
                  colorScheme == "light"
                    ? styles.buttonText
                    : darkMode.buttonText
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
                  colorScheme == "light"
                    ? styles.buttonText
                    : darkMode.buttonText
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
                colorScheme == "light"
                  ? styles.headingText
                  : darkMode.headingText
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
                  colorScheme == "light"
                    ? styles.buttonText
                    : darkMode.buttonText
                }
              >
                Begin Test
              </Text>
            </Pressable>
          </View>
        )}
        {showExam && (
          <View>
            <View style={{flexDirection:"row"}}>
              <Ionicons
                name="timer"
                size={40}
                style={
                  colorScheme == "light" ? styles.timerIcon : darkMode.timerIcon
                }
              />
              <Text
                style={
                  colorScheme == "light" ? styles.timerText : darkMode.timerText
                }
              >
                {minutes}mins {seconds < 10 ? `0${seconds}` : seconds}s
              </Text>
            </View>
            <View>
            <Progress.Bar
                progress={progress / 100}
                borderRadius={20}
                width={180}
                height={20}
                color={colorScheme == "light" ? "black" : "white"}
                unfilledColor={colorScheme == "light" ? "darkgrey" : "grey" }
                style={{ margin: 10, alignSelf: "center" }}
              >
                <Text
                  style={{
                    position: "absolute",
                    color: colorScheme == "light" ? "white" : "black" ,
                    left: (progress / 100) * 130,
                  }}
                >
                  {(progress / 100) * 100}%
                </Text>
              </Progress.Bar>

             

              <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                <Text
                  style={
                    colorScheme == "light"
                      ? styles.quizQuestionsNo
                      : darkMode.quizQuestionsNo
                  }
                >
                  {currentQuestionTwo ? currentQuestionTwo.key : "N/A"}
                </Text>
                <Text
                  style={
                    colorScheme == "light"
                      ? styles.quizQuestions
                      : darkMode.quizQuestions
                  }
                >
                  {currentQuestionTwo ? currentQuestionTwo.question : "N/A"}
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
                <View
                  style={{
                    backgroundColor: "black",
                    marginBottom: 5,
                    marginTop: 5,
                    padding: 5,
                    width: "60%",
                    height: 50,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    title="Previous Question"
                    color="grey"
                    disabled={currentQuestionIndex === 0}
                    onPress={handlePrevQuestion}
                  />
                </View>

                <View
                  style={{
                    backgroundColor: "black",
                    marginBottom: 5,
                    marginTop: 5,
                    padding: 5,
                    width: "60%",
                    height: 50,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    color="grey"
                    title="Next Question"
                    disabled={
                      currentQuestionIndex === formalQuestionBank.length - 1
                    }
                    onPress={handleNextQuestion}
                  />
                </View>

                <View>
                  <Pressable
                    onPress={() => handleSubmission()}
                    style={{
                      backgroundColor: "black",
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
            <Text
              style={
                colorScheme == "light" ? styles.quizText : darkMode.quizText
              }
            >
              Your score is {calculateScore()} out of{" "}
              {formalQuestionBank.length}
            </Text>
            {calculateScore() === formalQuestionBank.length && (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={
                    colorScheme == "light" ? styles.quizText : darkMode.quizText
                  }
                >
                  Congratulations!
                </Text>
                <Ionicons name="trophy" size={30} color={"black"} />
              </View>
            )}
            {calculateScore() != formalQuestionBank.length && (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={
                    colorScheme == "light" ? styles.quizText : darkMode.quizText
                  }
                >
                  Try Again!
                </Text>
              </View>
            )}

            <Pressable
              onPress={onPressTryAgain}
              style={
                colorScheme == "light" ? styles.mainButton : darkMode.mainButton
              }
            >
              <Text
                style={
                  colorScheme == "light"
                    ? styles.buttonText
                    : darkMode.buttonText
                }
              >
                Try again
              </Text>
            </Pressable>

            <Pressable
              onPress={onPressViewResults}
              style={
                colorScheme == "light" ? styles.mainButton : darkMode.mainButton
              }
            >
              <Text
                style={
                  colorScheme == "light"
                    ? styles.buttonText
                    : darkMode.buttonText
                }
              >
                View Results
              </Text>
            </Pressable>
          </View>
        )}

        {viewResults && (
          <View>
            <Text
              style={
                colorScheme == "light"
                  ? styles.headingText
                  : darkMode.headingText
              }
            >
              All Questions and Answers Below
            </Text>

            <View>{FormalQuestionsSolution()}</View>
          </View>
        )}
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
    marginBottom: 50,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  instructionsHeading: {
    fontWeight: "900",
    padding: 5,
    color: "black",
  },
  quizQuestions: {
    fontWeight: "bold",
    flexWrap: "wrap",
    paddingRight: 25,
    color: "black",
  },
  quizQuestionsNo: {
    paddingHorizontal: 10,
    color: "black",
  },
  progressBar: {
    color: "black",
  },
  timerText: {
    color: "black",
    fontSize:20,
    alignSelf:"center"
  },
  timerIcon: {
    color: "black",
    paddingRight: 10,
  },
  instructionsText: {
    color: "black",
  },
  quizText: {
    color: "black",
    marginVertical: 10,
  },
});

export default FormalQuizPage;
