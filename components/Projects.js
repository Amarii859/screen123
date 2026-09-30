import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Projects() {
  return (
    <View style={styles.container}>

      {/* Projects header */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>PROJECTS</Text>

        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Projects */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.projects}
      >

        <View style={styles.projectCard}>
          <Image
            source={require("../assets/project1.png")}
            style={styles.projectImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.projectCard}>
          <Image
            source={require("../assets/project2.png")}
            style={styles.projectImage}
            resizeMode="cover"
          />
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#171717",
  },

  viewButton: {
    backgroundColor: "#FFD21C",
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 25,
  },

  viewText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  projects: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 20,
  },

  projectCard: {
    width: 178,
    height: 165,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 34,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  projectImage: {
    width: "100%",
    height: "100%",
  },
});
