import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate("Fridge")}>
          <Text>See My Fridge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate("Fridge")}>
          <Text>Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate("Help")}>
          <Text>Help</Text>
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "block",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    display: "block",
    padding: 20,
    margin: 1,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    borderRadius: 8,
  },
  touch: {
    display: "block",
  }
});
