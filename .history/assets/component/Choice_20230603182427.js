import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

const Choice = () => {
  return (
    <View>
      <View>
        <Text> Tell us about your care giving experience</Text>
      </View>
      <View>
        <Text>What type of patient to you care</Text>
      </View>

      <View style={{ justifyContent: "space-evenly", gap: 20 }}>
        <View>
          <Text>Select the options below</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Chip
            icon="information"
            onPress={() => console.log("Pressed")}
            style={{ width: 150 }}
          >
            Cancer
          </Chip>
          <Chip
            icon="information"
            onPress={() => console.log("Pressed")}
            style={{ width: 150 }}
          >
            Dementia
          </Chip>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Chip
            icon="Paralysis"
            onPress={() => console.log("Pressed")}
            style={{ width: 150 }}
          >
            Paralysis
          </Chip>
          <Chip
            icon="information"
            onPress={() => console.log("Pressed")}
            style={{ width: 150 }}
          >
            Stroke
          </Chip>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Chip
            icon="information"
            onPress={() => console.log("Pressed")}
            style={{ width: 150 }}
          >
            Parkinson's
          </Chip>
          <Chip
            icon="information"
            onPress={() => console.log("Pressed")}
            style={{ width: 150 }}
          >
            Alzheimers
          </Chip>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Chip
            icon="information"
            onPress={() => console.log("Pressed")}
            style={{ width: 150 }}
          >
            Heart Disease
          </Chip>
          <Chip
            icon="information"
            onPress={() => console.log("Pressed")}
            style={{ width: 150 }}
          >
            Blindness
          </Chip>
        </View>
      </View>
      <View><View<Text></Text></View>
    </View>
  );
};

export default Choice;

const styles = StyleSheet.create({});
