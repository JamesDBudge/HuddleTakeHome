import React from "react";
import {
  Image,
  ImageBackground,
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
        {/* <View style={styles.topText}>
          <Text style={styles.titleText}>ᗕ Minder Profile</Text>
        </View> */}
        <View>
          <View style={styles.outerminder}>
            <ImageBackground style={styles.minder} source={minder.profileURL}>
              <View style={styles.paginationBar}>
                <View style={styles.emptySpace}></View>
                <PurpleCircle></PurpleCircle>
                <GreyCircle></GreyCircle>
                <GreyCircle></GreyCircle>
                <GreyCircle></GreyCircle>
                <GreyCircle></GreyCircle>
                <View style={styles.emptySpace}></View>
              </View>
              <View>
                <Image
                  style={styles.minderCard}
                  source={require("../assets/images/cardbase.png")}
                ></Image>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.aboutText}>
          <Text style={styles.titleText}>About {minder.firstName}</Text>
          <Divider></Divider>
          <Text>{minder.about}</Text>
          <Divider></Divider>
          <Text>Read More</Text>
        </View>
        <View>
          <Text style={styles.titleText}>You Both Know</Text>
          <Divider></Divider>
          <Image source={minder.commonFriends.asdasdsads1.profileURL}></Image>
          <Image source={minder.commonFriends.asdasdsads2.profileURL}></Image>
          <Image source={minder.commonFriends.asdasdsads3.profileURL}></Image>
        </View>
        <View>
          <Text style={styles.titleText}>Certificates and Verifications</Text>
          <Divider></Divider>
          <Text>certs components go here</Text>
          <Divider></Divider>
          <Text>* Available on request</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Reviews</Text>
          <Divider></Divider>
          <Text>Review component 1</Text>
          <Divider></Divider>
          <Text>Review component 2</Text>
          <Divider></Divider>
          <Text>Read All</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  emptySpace: {
    flex: 5,
  },
  outerminder: {
    height: 250,
  },
  paginationBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 150,
  },
  titleText: {
    fontWeight: "bold",
  },
  topText: {
    flex: 1,
    fontSize: 20,
    // left: "5%",
    alignContent: "center",
    padding: 15,
  },
  minder: {
    flex: 1,
    width: "100%",
    // height: 400,
  },
  minderCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: -150,
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

const Divider = () => (
  <Image source={require("../assets/images/divider.png")}></Image>
);

const PurpleCircle = () => (
  <View
    style={{
      flex: 1,
      width: 10,
      height: 10,
      backgroundColor: "#9B3FD9",
      borderRadius: 5,
      margin: 10,
    }}
  />
);

const GreyCircle = () => (
  <View
    style={{
      flex: 1,
      width: 10,
      height: 10,
      backgroundColor: "#EEEEEE",
      borderRadius: 5,
      margin: 10,
    }}
  />
);

export default MinderProfileScreen;
