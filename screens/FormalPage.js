import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  Appearance,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import darkMode from "../styles/darkMode";

const FormalPage = () => {
  const [workplace, setWorkplace] = useState(false);
  const [academic, setAcademic] = useState(false);
  const [interviews, setInterviews] = useState(false);
  const [legal, setLegal] = useState(false);
  const [diplomatic, setDiplomatic] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [ceremonies, setCeremonies] = useState(false);
  const [displayText, setDisplayText] = useState(
    "Click on a button to display text."
  );
  const [displayHeading, setDisplayHeading] = useState("heading");
  const [formalText, setFormalText] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const colorScheme = Appearance.getColorScheme();

  const onPressCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  const onPressFormal = () => {
    setFormalText(!formalText);
  };

  const onPressWorkplace = () => {
    setModalVisible(!modalVisible);
    setDisplayHeading("Workplace");
    setDisplayText(
      " Formal conversations are common in professional settings, such as offices, boardrooms, and meetings. Interactions with colleagues,superiors, clients, or business partners often require a formal tone to maintain professionalism and convey respect."
    );
  };

  const onPressAcademic = () => {
    setModalVisible(!modalVisible);
    setDisplayHeading("Academic Setting");
    setDisplayText(
      "Formal conversations are prevalent in educational institutions,including classrooms, seminars, conferences, and academic presentations. Students, professors, researchers, and scholars engage in formal discussions to share knowledge, present research, or participate in scholarly debates."
    );
  };
  const onPressInterviews = () => {
    setModalVisible(!modalVisible);
    setDisplayHeading("Job interviews:");
    setDisplayText(
      "Interviews are formal conversations where candidates are evaluatedfor employment opportunities. Both the interviewer and interviewee are expected to maintain a formal demeanor and discuss relevant qualifications, experiences, and career aspirations."
    );
  };
  const onPressLegal = () => {
    setModalVisible(!modalVisible);
    setDisplayHeading("Legal proceedings:");
    setDisplayText(
      " In courtrooms, legal consultations, or any legal context, formal conversations are essential. Lawyers, judges, and other legal professionals adhere to specific protocols and use formal language to ensure clarity, precision, and respect for the legal process."
    );
  };
  const onPressDiplomatic = () => {
    setModalVisible(!modalVisible);
    setDisplayHeading("Diplomatic engagements:");
    setDisplayText(
      " Diplomatic conversations, such as negotiations, international conferences, or diplomatic meetings, require a formal approach. Diplomats and government officials maintain a professional tone  while discussing matters of international relations, policy, and  diplomacy."
    );
  };
  const onPressCustomer = () => {
    setModalVisible(!modalVisible);
    setDisplayHeading("Customer service interactions:");
    setDisplayText(
      " While customer service conversations can vary in formality depending on the industry, certain contexts, such as formal complaints, corporate settings, or high-level customer interactions, may require a more formal approach to address concerns or resolve issues."
    );
  };
  const onPressCeremonies = () => {
    setModalVisible(!modalVisible);
    setDisplayHeading("Official ceremonies and events:");
    setDisplayText(
      "Events like award ceremonies, official dinners, or government functions often demand formal conversations. Participants are  expected to engage in polite and respectful exchanges, following established etiquette and protocol."
    );
  };

  return (
    <View style={colorScheme == "light" ? styles.mainView : darkMode.mainView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 100 }}
      >
        <View
          style={
            colorScheme == "light" ? styles.mainHeading : darkMode.mainHeading
          }
        >
          <Text
            style={colorScheme == "light" ? styles.mainText : darkMode.mainText}
          >
            Formal Conversations
          </Text>
        </View>

        <View style={styles.body}>
          <Pressable
            onPress={onPressFormal}
            style={
              colorScheme == "light" ? styles.mainButton : darkMode.mainButton
            }
          >
            <Text
              style={
                colorScheme == "light"
                  ? styles.mainButtonText
                  : darkMode.mainButtonText
              }
            >
              What are Formal Conversations
            </Text>
          </Pressable>
          {formalText && (
            <Text
              style={
                colorScheme == "light"
                  ? styles.mainInfoText
                  : darkMode.mainInfoText
              }
            >
              Formal conversations refer to interactions or discussions that
              adhere to established social norms, conventions, and etiquette.
              These conversations typically follow a more structured and
              professional tone, focusing on serious topics, such as business
              matters, academic discussions, official communication, or any
              situation that requires a respectful and professional approach.
            </Text>
          )}

          <Text
            style={
              colorScheme == "light"
                ? styles.smallHeading
                : darkMode.smallHeading
            }
          >
            Places where conversations have to be formal
          </Text>

          {/* //Modal Starting */}
          <View>
            <Modal animationType="fade" transparent visible={modalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    style={
                      colorScheme == "light"
                        ? styles.closeButton
                        : darkMode.closeButton
                    }
                  >
                    <Pressable onPress={onPressCloseModal}>
                      <AntDesign
                        name="closesquare"
                        size={50}
                        style={
                          colorScheme == "light"
                            ? styles.closeIcon
                            : darkMode.closeIcon
                        }
                      />
                    </Pressable>
                  </View>
                  <View style={styles.modalTextView}>
                    <View
                      style={
                        colorScheme == "light"
                          ? styles.modalTextContainer
                          : darkMode.modalTextContainer
                      }
                    >
                      <Text
                        style={
                          colorScheme == "light"
                            ? styles.headingModalText
                            : darkMode.headingModalText
                        }
                      >
                        {displayHeading}
                      </Text>
                      <Text
                        style={
                          colorScheme == "light"
                            ? styles.bodyText
                            : darkMode.bodyText
                        }
                      >
                        {displayText}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          {/* //Modal Endiing */}

          <View>
            <View style={styles.row}>
              <Pressable
                onPress={onPressWorkplace}
                style={
                  colorScheme == "light"
                    ? styles.smallButton
                    : darkMode.smallButton
                }
              >
                <Text
                  style={
                    colorScheme == "light"
                      ? styles.smallButtonText
                      : darkMode.smallButtonText
                  }
                >
                  Workplace
                </Text>
              </Pressable>

              <Pressable
                onPress={onPressAcademic}
                style={
                  colorScheme == "light"
                    ? styles.smallButton
                    : darkMode.smallButton
                }
              >
                <Text
                  style={
                    colorScheme == "light"
                      ? styles.smallButtonText
                      : darkMode.smallButtonText
                  }
                >
                  Academic settings:
                </Text>
              </Pressable>

              <Pressable
                onPress={onPressInterviews}
                style={
                  colorScheme == "light"
                    ? styles.smallButton
                    : darkMode.smallButton
                }
              >
                <Text
                  style={
                    colorScheme == "light"
                      ? styles.smallButtonText
                      : darkMode.smallButtonText
                  }
                >
                  Job interviews:
                </Text>
              </Pressable>
            </View>

            <View style={styles.row}>
              <Pressable
                onPress={onPressLegal}
                style={
                  colorScheme == "light"
                    ? styles.smallButton
                    : darkMode.smallButton
                }
              >
                <Text
                  style={
                    colorScheme == "light"
                      ? styles.smallButtonText
                      : darkMode.smallButtonText
                  }
                >
                  Legal proceedings:
                </Text>
              </Pressable>

              <Pressable
                onPress={onPressDiplomatic}
                style={
                  colorScheme == "light"
                    ? styles.smallButton
                    : darkMode.smallButton
                }
              >
                <Text
                  style={
                    colorScheme == "light"
                      ? styles.smallButtonText
                      : darkMode.smallButtonText
                  }
                >
                  Diplomatic engagements:
                </Text>
              </Pressable>

              <Pressable
                onPress={onPressCeremonies}
                style={
                  colorScheme == "light"
                    ? styles.smallButton
                    : darkMode.smallButton
                }
              >
                <Text
                  style={
                    colorScheme == "light"
                      ? styles.smallButtonText
                      : darkMode.smallButtonText
                  }
                >
                  Official ceremonies and events:
                </Text>
              </Pressable>
            </View>

            <Pressable
              onPress={onPressCustomer}
              style={
                colorScheme == "light"
                  ? styles.smallButton
                  : darkMode.smallButton
              }
            >
              <Text
                style={
                  colorScheme == "light"
                    ? styles.smallButtonText
                    : darkMode.smallButtonText
                }
              >
                Customer service interactions:
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
});

export default FormalPage;
