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
        <View style={{alignItems:"center",justifyContent:"center"}}>
          <Text variant="titleMedium">Care for Caregivers</Text>
          <Text variant="bodyMedium">Caring could be hard sometimes, Care for yourself</Text>
          
        </View>
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
