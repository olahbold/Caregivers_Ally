import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

const Choice = () => {
  return (
    <View>
      <Chip icon="information" onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>
      <Chip icon="information" onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>
      <Chip icon="information" onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>
    </View>
  );
};

export default Choice;

const styles = StyleSheet.create({});
