import { Text, View, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { db, collection, addDoc } from "../services/firebase";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ItemDoc, RootStackParamList } from "../../App";
import nutritionapi from "../services/nutritionapi";
import {
  BrandedItemResponse,
  CommonItemResponse,
  Nutrition,
} from "../services/nutritionix";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";

type AddItemScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "AddItem"
>;
export default function AddItemScreen({
  navigation,
}: AddItemScreenNavigationProp) {
  const [itemName, setItemName] = useState("");
  const [itemAmt, setItemAmt] = useState("1");

  const [itemSearch, setItemSearch] = useState<ItemType<string>[]>([
    { label: "test", value: "test" },
  ]);
  const [open, setOpen] = useState(false);

  const onSubmit = async () => {
    if (itemName === "") {
      Alert.alert("Missing item name");
      return;
    }
    try {
      let nutrition: Nutrition = await nutritionapi.getNutrition(itemName);
      const docRef = await addDoc(collection(db, "item"), {
        name: itemName,
        grams: itemAmt,
        nutrition: nutrition,
      });
      navigation.goBack();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const onTyping = async (text: string) => {
    //TODO: HANDLE TEXT
    if (text.length > 3) {
      let res = await nutritionapi.fetchFoodSearch(text); //only support common right now
      let search = res.common;
      let items = search.map((i: CommonItemResponse) => {
        return { label: i.food_name, value: i.food_name };
      });
      setItemSearch(items);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}> Add Item </Text>
      <View style={styles.item}>
        <View style={styles.itemInputText}>
          <DropDownPicker
            containerStyle={{ flex: 1, zIndex: open ? 9 : -1 }}
            open={open}
            setOpen={setOpen}
            value={itemName}
            setValue={setItemName}
            items={itemSearch}
            setItems={setItemSearch}
            multiple={false}
            searchable={true}
            searchPlaceholder="Search"
            onChangeSearchText={onTyping}
          />
        </View>
        <TextInput
          style={styles.itemInputNumber}
          placeholder={itemAmt}
          keyboardType="numeric"
          onChangeText={(newAmt) => setItemAmt(newAmt.replace(/[^0-9]/g, ""))}
          defaultValue={itemAmt}
        />
      </View>
      <View style={styles.addButton}>
        <Button title="Add Item" color="red" onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    height: "100%",
  },
  title: {
    margin: 80,
    alignSelf: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  itemInputText: {
    maxWidth: "75%",
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  itemInputNumber: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    textAlign: "center",
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    width: "25%",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  addButton: {
    position: "absolute",
    width: 90,
    height: 80,
    bottom: 10,
  },
});
