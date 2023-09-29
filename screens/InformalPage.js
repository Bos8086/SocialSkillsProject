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

const InformalPage = () => {
  const [social, setSocial] = useState(false);
  const [friends, setFriends] = useState(false);
  const [networking, setNetworking] = useState(false);
  const [conversation, setConversations] = useState(false);
  const [online, setOnline] = useState(false);
  const [acquaintances, setAcquaintances] = useState(false);
  const [displayText, setDisplayText] = useState(
    "Click on a button to display text."
  );
  const [displayHeading, setDisplayHeading] = useState("heading");
  const [informalText, setInFormalText] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const colorScheme = Appearance.getColorScheme();

  const onPressCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  const onPressInFormal = () => {
    setInFormalText(!informalText);
  };

  const onPressSocial = () => {
    setModalVisible(!modalVisible);
    setDisplayText(
      " Informal conversations often occur during social events like parties, barbecues, or casual get-togethers with friends and family. People engage in light-hearted discussions, share personal stories, or discuss shared interests."
    );
    setDisplayHeading("Social Gatherings:");
  };

  const onPressFriends = () => {
    setModalVisible(!modalVisible);
    setDisplayText(
      "When meeting friends at a café, park, or any relaxed setting, conversations tend to be informal. People catch up, share updates about their lives, discuss movies, music, sports, or simply engage in friendly banter."
    );
    setDisplayHeading("Casual meetups with friends:");
  };
  const onPressNetworking = () => {
    setModalVisible(!modalVisible);
    setDisplayText(
      " In less formal networking events, like mixers or informal industry gatherings, conversations may take a more relaxed tone. Professionals may engage in casual discussions,  exchange ideas, and establish connections in a less structured environment."
    );
    setDisplayHeading("Informal networking events:");
  };
  const onPressConversations = () => {
    setModalVisible(!modalVisible);
    setDisplayText(
      " While formal conversations dominate professional settings, informal conversations can still occur during lunch breaks, coffee breaks, or in more relaxed work environments. Colleagues may discuss weekend plans, hobbies, or current events."
    );
    setDisplayHeading(" Informal conversations in the workplace:");
  };
  const onPressOnline = () => {
    setModalVisible(!modalVisible);
    setDisplayText(
      " Informal conversations are prevalent in digital communication, such as messaging apps, social  media platforms, or online forums. People often use informal language, abbreviations, and emojis to express themselves in a casual and conversational manner."
    );
    setDisplayHeading("Online or text-based conversations:");
  };
  const onPressAcquaintances = () => {
    setModalVisible(!modalVisible);
    setDisplayText(
      " Conversations with acquaintances or people you meet casually in daily life, like waiting in line at a store or sitting next to someone on public transportation, tend to be more informal. These conversations often revolve around small talk, general interests, or current happenings."
    );
    setDisplayHeading("Casual encounters with acquaintances:");
  };

  return (
    <View style={colorScheme == "light" ? styles.mainView : darkMode.mainView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={
            colorScheme == "light" ? styles.mainHeading : darkMode.mainHeading
          }
        >
          <Text
            style={colorScheme == "light" ? styles.mainText : darkMode.mainText}
          >
            InFormal Conversations
          </Text>
        </View>

        <View style={styles.body}>
          <Pressable
            onPress={onPressInFormal}
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
              What are InFormal Conversations
            </Text>
          </Pressable>
          {informalText && (
            <Text
              style={
                colorScheme == "light"
                  ? styles.mainInfoText
                  : darkMode.mainInfoText
              }
            >
              Informal conversations are casual and relaxed interactions between
              individuals that do not adhere to strict social norms or formal
              etiquette. They typically involve friendly and informal language,
              often including slang, colloquialisms, and conversational
              shortcuts. Informal conversations are less structured and may
              touch upon a wide range of topics, including personal experiences,
              hobbies, everyday life, or social events.
            </Text>
          )}

          <Text
            style={
              colorScheme == "light"
                ? styles.smallHeading
                : darkMode.smallHeading
            }
          >
            Places where conversations have to be Informal
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
                onPress={onPressSocial}
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
                  Social gatherings:
                </Text>
              </Pressable>
              <Pressable
                onPress={onPressFriends}
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
                  Casual meetups with friends:
                </Text>
              </Pressable>
              <Pressable
                onPress={onPressNetworking}
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
                  Informal networking events:
                </Text>
              </Pressable>
            </View>

            <View style={styles.row}>
              <Pressable
                onPress={onPressConversations}
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
                  Informal conversations in the workplace:
                </Text>
              </Pressable>
              <Pressable
                onPress={onPressOnline}
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
                  Online or text-based conversations:
                </Text>
              </Pressable>
              <Pressable
                onPress={onPressAcquaintances}
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
                  Casual encounters with acquaintances:
                </Text>
              </Pressable>
            </View>
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
  },
  bodyText: {
    //marginBottom: 10,
    alignSelf: "center",
    color:"black"
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
  headingText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  headingModalText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 5,
  },
});
export default InformalPage;
