import { StyleSheet, Text, View } from "react-native";

export default function ItemComponent({ item }) {
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
  },
  item: {
    alignItems: "center",
    flex: 1,
  }
})
