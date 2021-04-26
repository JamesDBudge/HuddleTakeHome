import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import minderProfile from "../data/minderProfile";

function MinderProfileScreen(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.topText}>ᗕ Minder Profile</Text>
        <Image
          style={styles.minder}
          source={minderProfile.minder.profileURL}
        ></Image>
        <Image
          style={styles.minderCard}
          source={require("../assets/images/cardbase.png")}
        ></Image>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topText: {
    fontSize: 20,
    left: "5%",
    top: 10,
    height: "10%",
  },
  minder: {
    flex: 1,
    width: "100%",
  },
  minderCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: -50,
    left: "5%",
    width: "90%",
    borderRadius: 20,
  },
});

export default MinderProfileScreen;
