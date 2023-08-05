import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const FormalPage = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainHeading}>
          <Text style={styles.mainText}>Formal Conversations</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.smallHeading}>What are Formal Conversations</Text>
          <Text>
            Formal conversations refer to interactions or discussions that
            adhere to established social norms, conventions, and etiquette.
            These conversations typically follow a more structured and
            professional tone, focusing on serious topics, such as business
            matters, academic discussions, official communication, or any
            situation that requires a respectful and professional approach.
          </Text>
          <Text style={styles.smallHeading}>
            Places where conversations have to be formal
          </Text>
          <View>
            <Text style={styles.bodyHeadingText}>Workplace:</Text>
            <Text style={styles.bodyText}>
              Formal conversations are common in professional settings, such as
              offices, boardrooms, and meetings. Interactions with colleagues,
              superiors, clients, or business partners often require a formal
              tone to maintain professionalism and convey respect.
            </Text>

            <Text style={styles.bodyHeadingText}>Job interviews:</Text>
            <Text style={styles.bodyText}>
              Interviews are formal conversations where candidates are evaluated
              for employment opportunities. Both the interviewer and interviewee
              are expected to maintain a formal demeanor and discuss relevant
              qualifications, experiences, and career aspirations.
            </Text>
            <Text style={styles.bodyHeadingText}>Academic settings:</Text>

            <Text style={styles.bodyText}>
              Formal conversations are prevalent in educational institutions,
              including classrooms, seminars, conferences, and academic
              presentations. Students, professors, researchers, and scholars
              engage in formal discussions to share knowledge, present research,
              or participate in scholarly debates.
            </Text>

            <Text style={styles.bodyHeadingText}>Legal proceedings:</Text>

            <Text style={styles.bodyText}>
              In courtrooms, legal consultations, or any legal context, formal
              conversations are essential. Lawyers, judges, and other legal
              professionals adhere to specific protocols and use formal language
              to ensure clarity, precision, and respect for the legal process.
            </Text>

            <Text style={styles.bodyHeadingText}>Diplomatic engagements:</Text>
            <Text style={styles.bodyText}>
              Diplomatic conversations, such as negotiations, international
              conferences, or diplomatic meetings, require a formal approach.
              Diplomats and government officials maintain a professional tone
              while discussing matters of international relations, policy, and
              diplomacy.
            </Text>

            <Text style={styles.bodyHeadingText}>
              Official ceremonies and events:
            </Text>
            <Text style={styles.bodyText}>
              Events like award ceremonies, official dinners, or government
              functions often demand formal conversations. Participants are
              expected to engage in polite and respectful exchanges, following
              established etiquette and protocol.
            </Text>

            <Text style={styles.bodyHeadingText}>
              Customer service interactions:
            </Text>
            <Text style={styles.bodyText}>
              While customer service conversations can vary in formality
              depending on the industry, certain contexts, such as formal
              complaints, corporate settings, or high-level customer
              interactions, may require a more formal approach to address
              concerns or resolve issues.
            </Text>
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
    marginRight:10
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
});

export default FormalPage;
