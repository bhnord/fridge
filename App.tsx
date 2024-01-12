import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FridgeScreen from "./src/screens/FridgeScreen";
import RecipesScreen from "./src/screens/RecipesScreen";
import AddItemScreen from "./src/screens/AddItemScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SignInScreen from "./src/screens/SigninScreen";

export type RootStackParamList = {
  Title: undefined,
  Home: undefined,
  Help: undefined,
  Fridge: undefined,
  Recipes: undefined,
  AddItem: undefined,
  SignUp: undefined,
  SignIn: undefined,
  navigate: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text>InfoScreen</Text>
    </View>
  );
}

type InfoScreenProps = NativeStackScreenProps<RootStackParamList, "Title">;
function IntroScreen({ navigation }: InfoScreenProps) {
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
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Fridge" component={FridgeScreen} />
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
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
