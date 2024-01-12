import { StyleSheet, Text, View } from "react-native";
import { Item } from "../../App";

type ItemComponentProps = {
  item: Item
}
export default function ItemComponent({ item }: ItemComponentProps) {
  return (
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
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "80%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5
  },
  item: {
    alignItems: "center",
    flex: 1,
  }
})
