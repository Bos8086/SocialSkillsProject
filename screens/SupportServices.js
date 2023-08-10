import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import React from "react";

const SupportServices = () => {
  return (
    <View>
      <Text style={styles.headingText}>Ways to Support An Autistic Person</Text>

      <View style={styles.body}>
        <View style={styles.row}>
          <Text>1. Autism Wales</Text>
          <Pressable
            onPress={() => Linking.openURL("https://autismwales.org/en/")}
          >
            <Text style={styles.linkText}>https://autismwales.org/en/</Text>
          </Pressable>
        </View>
       

        <View style={styles.row}>
          <Text>2. AP Cymru</Text>
          <Pressable onPress={() => Linking.openURL("https://apcymru.org.uk/")}>
            <Text style={styles.linkText}>https://apcymru.org.uk/</Text>
          </Pressable>
        </View>


        <View style={styles.row}>
        <Text>3. AUTISM SPEAKS</Text>
        <Pressable
          onPress={() => Linking.openURL("https://www.autismspeaks.org/")}
        >
          <Text style={styles.linkText}>https://www.autismspeaks.org/</Text>
        </Pressable>
        </View>
       

       

<View style={styles.row}>
  <Text style={{}}>4.The Autism & ADHD ADVOCATES</Text>
          <Pressable
            onPress={() => Linking.openURL("https://autismadhdadvocates.co.uk/")}
          >
            <Text style={styles.linkText}>
              https://autismadhdadvocates.co.uk/
            </Text>
          </Pressable>
</View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  body:{
    marginHorizontal:10,
  }
});

export default SupportServices;
