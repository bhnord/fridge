import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button, TouchableOpacity, ScrollView } from "react-native";
import ItemComponent from "../components/ItemComponent.js";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App.js";

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

type FridgeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Fridge">;
export default function FridgeScreen({ navigation }: FridgeScreenNavigationProp) {

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
      <View style={styles.titleBar}>
        <View style={styles.innerTitle}>
          <Text>My Fridge:</Text>
        </View>
        <View style={styles.innerTitle} />
        <View style={styles.innerTitle}>
          <Button title="add item" onPress={() => navigation.navigate("AddItem")} />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.flatList}>
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
  flatList: {
    paddingTop: 10,
    width: "100%",
  },

  titleBar: {
    height: 50,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  innerTitle: {
    flex: 1,
  }
});
