import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Login() {
  return (
    <View style={styles.container}>
      <View style><Image source={require("../care1.png")} /></View>
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
