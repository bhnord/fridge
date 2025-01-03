import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Button,
  ScrollView,
} from "react-native";
import ItemComponent from "../components/ItemComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ItemDoc, RootStackParamList } from "../../App";
import { useEffect, useState } from "react";
import { getItems } from "../services/api";
import { useIsFocused } from "@react-navigation/native";

type FridgeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Fridge"
>;
export default function FridgeScreen({
  navigation,
}: FridgeScreenNavigationProp) {
  const [items, setItems] = useState<ItemDoc[]>([]);
  const [update, setUpdate] = useState("");
  const [totalNutrition, setTotalNutrition] = useState({
    calories: 0,
    protein: 0,
  });

  const isFocused = useIsFocused();
  useEffect(() => {
    const waitForItems = async () => {
      let items = await getItems();
      let totalCal = 0;
      let totalProtein = 0;
      for (let docItem of items) {
        let item = docItem.item;
        if (item.nutrition !== undefined) {
          totalCal += item.nutrition.calories * item.grams;
          totalProtein += item.nutrition.protein * item.grams;
        }
      }
      setTotalNutrition({ calories: totalCal, protein: totalProtein });
      console.log(totalNutrition);
      setItems(items);
    };
    isFocused && waitForItems();
  }, [isFocused, update]);

  const onItemDelete = (id: string) => {
    setUpdate(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <View style={styles.innerTitle}>
          <Text>My Fridge:</Text>
          <Text>{`Calories: ${totalNutrition.calories.toFixed(2)}kcal, Protein: ${totalNutrition.protein.toFixed(2)}g`}</Text>
        </View>
        <View style={styles.innerTitle} />
        <View style={styles.innerTitle}>
          <Button
            title="add item"
            onPress={() => navigation.navigate("AddItem")}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        style={styles.flatList}
      >
        {items.map((item: ItemDoc) => (
          <ItemComponent
            key={item.id}
            itemDoc={item}
            navigation={navigation}
            onDelete={onItemDelete}
          />
        ))}
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
    paddingTop: StatusBar.currentHeight,
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
  },
});
