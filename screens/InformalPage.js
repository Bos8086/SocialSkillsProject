import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";

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
  const [informalText, setInFormalText] = useState(false);

  const onPressInFormal = () => {
    setInFormalText(!informalText);
  };

  const onPressSocial = () => {
    setDisplayText(
      " Informal conversations often occur during social events like parties, barbecues, or casual get-togethers with friends and family. People engage in light-hearted discussions, share personal stories, or discuss shared interests."
    );
  };

  const onPressFriends = () => {
    setDisplayText(
      "When meeting friends at a café, park, or any relaxed setting, conversations tend to be informal. People catch up, share updates about their lives, discuss movies, music, sports, or simply engage in friendly banter."
    );
  };
  const onPressNetworking = () => {
    setDisplayText(
      " In less formal networking events, like mixers or informal industry gatherings, conversations may take a more relaxed tone. Professionals may engage in casual discussions,  exchange ideas, and establish connections in a less structured environment."
    );
  };
  const onPressConversations = () => {
    setDisplayText(
      " While formal conversations dominate professional settings, informal conversations can still occur during lunch breaks, coffee breaks, or in more relaxed work environments. Colleagues may discuss weekend plans, hobbies, or current events."
    );
  };
  const onPressOnline = () => {
    setDisplayText(
      " Informal conversations are prevalent in digital communication, such as messaging apps, social  media platforms, or online forums. People often use informal language, abbreviations, and emojis to express themselves in a casual and conversational manner."
    );
  };
  const onPressAcquaintances = () => {
    setDisplayText(
      " Conversations with acquaintances or people you meet casually in daily life, like waiting in line at a store or sitting next to someone on public transportation, tend to be more informal. These conversations often revolve around small talk, general interests, or current happenings."
    );
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainHeading}>
          <Text style={styles.mainText}>InFormal Conversations</Text>
        </View>

        <View style={styles.body}>
          <Pressable onPress={onPressInFormal} style={styles.mainButton}>
            <Text style={styles.mainButtonText}>
              What are Formal Conversations
            </Text>
          </Pressable>
          {informalText && (
            <Text>
               Informal conversations are casual and relaxed interactions between individuals that do not adhere to strict social norms or formal etiquette. They typically involve friendly and informal language, often including slang, colloquialisms, and conversational shortcuts. Informal conversations are less structured and may touch upon a wide
            range of topics, including personal experiences, hobbies, everyday
            life, or social events.
            </Text>
          )}

          <Text style={styles.smallHeading}>
            Places where conversations have to be Informal
          </Text>

          <View>
            <View style={styles.row}>
              <Pressable onPress={onPressSocial} style={styles.smallButton}>
                <Text style={styles.smallButtonText}>Social gatherings:</Text>
              </Pressable>
              <Pressable onPress={onPressFriends} style={styles.smallButton}>
                <Text style={styles.smallButtonText}>
                  Casual meetups with friends:
                </Text>
              </Pressable>
              <Pressable onPress={onPressNetworking} style={styles.smallButton}>
                <Text style={styles.smallButtonText}>
                  Informal networking events:
                </Text>
              </Pressable>
            </View>

            <View style={styles.row}>
              <Pressable onPress={onPressConversations} style={styles.smallButton}>
                <Text style={styles.smallButtonText}>
                  Informal conversations in the workplace:
                </Text>
              </Pressable>
              <Pressable onPress={onPressOnline} style={styles.smallButton}>
                <Text style={styles.smallButtonText}>
                  Online or text-based conversations:
                </Text>
              </Pressable>
              <Pressable onPress={onPressAcquaintances} style={styles.smallButton}>
                <Text style={styles.smallButtonText}>
                  Casual encounters with acquaintances:
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.textContent}>
          <View>
            <Text style={styles.bodyText}>{displayText}</Text>
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
    marginBottom: 10,
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
});
export default InformalPage;
