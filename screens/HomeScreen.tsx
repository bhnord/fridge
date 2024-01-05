import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Home">;
export default function HomeScreen({ navigation }: HomeScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Fridge")}>
        <Text>See My Fridge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Recipes")}>
        <Text>Recipes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Help")}>
        <Text>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AddItem")}>
        <Text>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 20,
    margin: 1,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    borderRadius: 8,
  },
});
