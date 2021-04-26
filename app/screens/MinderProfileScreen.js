import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { minder } from "../data/minderProfile";

function MinderProfileScreen(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.topText}>ᗕ Minder Profile</Text>
        </View>
        <View>
          <Image style={styles.minder} source={minder.profileURL}></Image>
        </View>
        <View>
          <Image
            style={styles.minderCard}
            source={require("../assets/images/cardbase.png")}
          ></Image>
        </View>
        <View>
          <Text style={styles.aboutText}>About {minder.firstName}</Text>
          <Image source={require("../assets/images/divider.png")}></Image>
          <Text>{minder.about}</Text>
          <Image source={require("../assets/images/divider.png")}></Image>
          <Text>Read More</Text>
        </View>
        <View>
          <Text>You Both Know</Text>
          <Image source={require("../assets/images/divider.png")}></Image>
          <Image source={minder.commonFriends.asdasdsads1.profileURL}></Image>
          <Image source={minder.commonFriends.asdasdsads2.profileURL}></Image>
          <Image source={minder.commonFriends.asdasdsads3.profileURL}></Image>
        </View>
        <View>
          <Text>Certificates and Verifications</Text>
          <Image source={require("../assets/images/divider.png")}></Image>
          <Text>certs go here</Text>
          <Image source={require("../assets/images/divider.png")}></Image>
          <Text>* Available on request</Text>
        </View>
        <View>
          <Text>Reviews</Text>
          <Image source={require("../assets/images/divider.png")}></Image>
          <Text>Review 1</Text>
          <Image source={require("../assets/images/divider.png")}></Image>
          <Text>Review 2</Text>
          <Image source={require("../assets/images/divider.png")}></Image>
          <Text>Read All</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topText: {
    flex: 1,
    fontSize: 20,
    left: "5%",
    alignContent: "center",
    padding: 15,
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
  aboutText: {
    flex: 1,
    flexDirection: "column",
    // top: -50,
    alignItems: "center",
    justifyContent: "center",
  },
});

const PurpleCircle = () => (
  <View
    style={{
      width: 10,
      height: 10,
      backgroundColor: purple,
    }}
  />
);

export default MinderProfileScreen;
