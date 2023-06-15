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
      <View>
        <View>
          <Text>Email</Text>
          <TextInput
            mode="outlined"
            placeholder="Type something"
            right={<TextInput.Affix text="/100" />}
            style={{ width: 300 }}
          />
        </View>
        <View>
     <Text>Password</Text>
     <TextInput
       mode="outlined"
       placeholder="Type something"
       secureTextEntry
       right={}
       style={{ width: 300 }}
     />
   </View>
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
