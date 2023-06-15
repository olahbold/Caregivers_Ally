import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Image
          source={require("../care1.png")}
          style={styles.image_Container}
        />
      </View>

      <View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text variant="titleMedium">Care for Caregivers</Text>
          <Text variant="bodyMedium">
            Caring could be hard sometimes, Care for yourself as
          </Text>
          <Text variant="bodyMedium">
            you provide care for your loved ones and family
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text variant="displayLarge"> ....</Text>
        </View>

        <View style={styles.buttons}>
          <Button> Create Account</Button>
          <Button> Log in</Button>
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
  image_Container: {
    height: 200,
  },
  buttons:{
    flexDirection: "row",
    alignItems: 'center',
    
  }
});
