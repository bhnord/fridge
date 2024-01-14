import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Item } from "../../App";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type FridgeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Fridge">;

type ItemComponentProps = {
  item: Item
  navigation: FridgeScreenNavigationProp["navigation"]
}

export default function ItemComponent({ item, navigation }: ItemComponentProps) {
  const updateItem = () => {
    navigation.navigate("UpdateItem", { item })
  }

  return (
    <TouchableOpacity style={styles.block} onPress={updateItem}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>
            {item.name}
          </Text>
        </View>
        <View style={styles.item}>
          <Text>
            {item.quantity}
          </Text>
        </View>
        <View style={styles.item}>
          <Text>
            {item.unit}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 10
  },
  container: {
    borderWidth: 1,
    width: "80%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  item: {
    alignItems: "center",
    flex: 1,
  }
})
