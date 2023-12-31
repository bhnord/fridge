import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import ItemComponent from "../components/ItemComponent.js";

let items = [{
  name: "Cucumbers",
  quantity: 3,
  unit: "whole"
},
{
  name: "Blueberry Jam",
  quantity: 1,
  unit: "jars"
}]

export default function FridgeScreen() {
  return (
    <View style={styles.container}>
      <Text>My Fridge:</Text>
      {
        items.sort((a, b) =>
          a.name.localeCompare(b.name)
        ).map((x) => <ItemComponent key={x.name} item={x} />)
      }
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
