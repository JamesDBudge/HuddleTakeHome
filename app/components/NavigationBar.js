import React from "react";
import StyleSheet from "react-native";

function NavigationBar(props) {
  return (
    <View style={styles.topText}>
      <Text style={styles.titleText}>ᗕ Minder Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default NavigationBar;
