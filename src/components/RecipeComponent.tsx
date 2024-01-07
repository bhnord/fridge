import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Recipe } from "../screens/RecipesScreen";


type RecipeComponentProps = {
  recipe: Recipe
}
export default function RecipeComponent({ recipe }: RecipeComponentProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.recipe}>
          <Text style={{ fontSize: 17 }}>
            {recipe.name}:
          </Text>
        </View>
        <View style={styles.extra}>
          <Text>
            {recipe.extras}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5
  },
  recipe: {
    alignItems: "flex-start",
    width: "80%",
  },
  extra: {
    alignItems: "flex-end",
    width: "80%",
  }
})

