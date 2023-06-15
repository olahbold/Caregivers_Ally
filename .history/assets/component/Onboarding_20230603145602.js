import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text>CareWorker Ally</Text>
        <Image source={require("../logo1.png")} />
      </View>
      <Image source={require("../care1.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});







