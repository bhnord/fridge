import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import FridgeScreen from "./screens/FridgeScreen";


const Stack = createNativeStackNavigator();

function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text>InfoScreen</Text>
    </View>
  );
}

function IntroScreen({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={styles.container}
    >
      <Text>Fridge</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Title"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Title" component={IntroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Fridge" component={FridgeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
