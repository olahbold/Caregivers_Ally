import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

const Choice = () => {
  return (
    <View style={{ justifyContent: 'space-evenly',gap: 20}}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Cancer
        </Chip>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
        <Chip icon="information" onPress={() => console.log("Pressed")}>
          Example Chip
        </Chip>
      </View>
    </View>
  );
};

export default Choice;

const styles = StyleSheet.create({});
