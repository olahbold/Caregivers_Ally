import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Image source={require("../care1.png")} />
      </View>
      <View>
        <Text variant="titleMedium">Care </Text>
      </View>
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
