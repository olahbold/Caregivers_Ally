import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

const Choice = () => {
  return (


    <View>
    <View style={{ justifyContent: 'space-evenly',gap: 20}}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip icon="information" onPress={() => console.log("Pressed")} style={{width: 150}}>
          Cancer
        </Chip>
        <Chip icon="information" onPress={() => console.log("Pressed")}style={{width: 150}}>
          Dementia
        </Chip>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip icon="Paralysis" onPress={() => console.log("Pressed")}style={{width: 150}}>
          Paralysis
        </Chip>
        <Chip icon="information" onPress={() => console.log("Pressed")}style={{width: 150}}>
          Stroke
        </Chip>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip icon="information" onPress={() => console.log("Pressed")} style={{width: 150}}>
          Parkinson's
        </Chip>
        <Chip icon="information" onPress={() => console.log("Pressed")}style={{width: 150}}>
          Alzheimers
        </Chip>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Chip icon="information" onPress={() => console.log("Pressed")} style={{width: 150}}>
          Heart Disease
        </Chip>
        <Chip icon="information" onPress={() => console.log("Pressed")} style={{width: 150}}>
          Blindness
        </Chip>
      </View>
    </View>
    </View>
  );
};

export default Choice;

const styles = StyleSheet.create({});
