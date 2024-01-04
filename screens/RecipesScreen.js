import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button, TouchableOpacity, ScrollView } from "react-native";
import RecipeComponent from "../components/RecipeComponent.js";

let items = [{
  name: "Cucumbers Recipe",
  extras: "dd",
},
{
  name: "Blueberry Jam Recipe",
  extras: "jars"
},
]

export default function RecipesScreen() {



  for (let i = 0; i < 20; i++) {
    items.push(
      {
        name: "Blueberry Jam Recipe",
        extras: "jars"
      }
    )
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <Text>Recipes:</Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.flatList}>
        {
          items.sort((a, b) =>
            a.name.localeCompare(b.name)
          ).map((x) => <RecipeComponent key={x.name} recipe={x} />)
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
    paddingTop: 10,
    width: "100%",
  },

  titleBar: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  }
});
