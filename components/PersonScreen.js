import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function PersonScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back}>‹</Text>
        <Text style={styles.headerTitle}>App</Text>
      </View>

      {/* Illustration area */}
      <View style={styles.hero}>
        <Image
          source={require("../assets/person.png")}
          style={styles.personImage}
          resizeMode="cover"
        />
      </View>

      {/* Person information card */}
      <View style={styles.personCard}>
        <Text style={styles.name}>JOHN DOE</Text>

        <Text style={styles.job}>
          UI/UX Designer
        </Text>

        <Text style={styles.description}>
          We're passionate about creating{"\n"}
          beautiful designs for startups & leading{"\n"}
          brands
        </Text>

        <TouchableOpacity style={styles.hireButton}>
          <Text style={styles.hireText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDEB",
  },

  header: {
    height: 65,
    backgroundColor: "#FFFDEB",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  back: {
    fontSize: 38,
    color: "#222",
    marginRight: 35,
    marginTop: -5,
  },

  headerTitle: {
    fontSize: 23,
    fontWeight: "700",
    color: "#222",
  },

  hero: {
    height: 330,
    backgroundColor: "#91D0D4",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  personImage: {
    width: "100%",
    height: "100%",
  },

  personCard: {
    backgroundColor: "#FFFDEB",
    marginHorizontal: 48,
    marginTop: -35,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#F0DFC0",
    paddingTop: 25,
    paddingBottom: 22,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#151515",
    marginBottom: 5,
  },

  job: {
    fontSize: 15,
    color: "#555",
    marginBottom: 7,
  },

  description: {
    fontSize: 15,
    lineHeight: 19,
    textAlign: "center",
    color: "#333",
    marginHorizontal: 10,
  },

  hireButton: {
    marginTop: 17,
    backgroundColor: "#FFD21C",
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 30,
  },

  hireText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
});
