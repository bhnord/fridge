import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button, TouchableOpacity, ScrollView } from "react-native";
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
},
]

export default function FridgeScreen() {



  //XXX: remove once testing is done
  for (let i = 0; i < 20; i++) {
    items.push(
      {
        name: "Blueberry Jam",
        quantity: 1,
        unit: "jars"
      }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.flatList}>
        <Text>My Fridge:</Text>
        {
          items.sort((a, b) =>
            a.name.localeCompare(b.name)
          ).map((x) => <ItemComponent key={x.name} item={x} />)
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight
  },
  touch: {
    display: "block",
  },
  flatList: {
    width: "100%",
  }
});
