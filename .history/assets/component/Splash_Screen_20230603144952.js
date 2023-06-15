import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Splash_Screen() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text>CareWorker Ally</Text>
        <Image source={require(".../")} />
      </View>
      <Image source={require("./care1.png")} />
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
