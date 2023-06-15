import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
export default function Login() {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Image
          source={require("../care1.png")}
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View style>
        <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "F2F2F6",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
