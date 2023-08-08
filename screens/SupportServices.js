import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SupportServices = () => {
  return (
    <View>
       <Text style={styles.headingText}>Ways to Support An Autistic Person</Text>

       <View>
            <Text>
                1. Autism Wales
            </Text>
            <Text>
                2. AP Cymru
            </Text>
            <Text>
                3. AUTISM SPEAKS
            </Text>
            <Text>
                4. Autismadhdadvocates.org (Autism ADHD ADVOCATES)
            </Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
      },
})

export default SupportServices