import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

let j = [{
    name: "Veggies"
}, {
    name: "Proteins"
}]

export default function FridgeScreen() {
    return (
        <View style={styles.container}>
            <Text>My Fridge:</Text>
            {
               j.map((x) => <Text>{x.name}</Text>) 
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