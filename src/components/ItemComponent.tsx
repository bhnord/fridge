import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Item, ItemDoc } from "../../App";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { deleteItem } from "../services/api";

type FridgeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Fridge"
>;

type ItemComponentProps = {
  itemDoc: ItemDoc;
  onDelete: Function;
  navigation: FridgeScreenNavigationProp["navigation"];
};

export default function ItemComponent({
  itemDoc,
  onDelete,
  navigation,
}: ItemComponentProps) {
  const updateItem = () => {
    navigation.navigate("UpdateItem", { itemDoc });
  };
  const item = itemDoc.item;
  const longPressEvent = () => {
    console.log("hi");
    Alert.alert("Delete Item?", "Do you want to delete item: " + item.name, [
      { text: "No" },
      {
        text: "Yes",
        onPress: () => {
          deleteItem(itemDoc);
          onDelete(itemDoc.id);
        },
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.block}
      onPress={updateItem}
      onLongPress={longPressEvent}
    >
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.item}>
          <Text>{item.quantity}</Text>
        </View>
        <View style={styles.item}>
          <Text>{item.unit}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 10,
  },
  container: {
    borderWidth: 1,
    width: "80%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  item: {
    alignItems: "center",
    flex: 1,
  },
});
