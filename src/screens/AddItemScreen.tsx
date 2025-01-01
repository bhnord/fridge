import { Text, View, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { db, collection, addDoc } from "../services/firebase";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ItemDoc, RootStackParamList } from "../../App";
import nutritionapi from "../services/nutritionapi";

type measurement = {
  measurement: string;
};
const data = [
  { measurement: "container" },
  { measurement: "cup" },
  { measurement: "item" },
  { measurement: "jar" },
  { measurement: "tbsp" },
  { measurement: "tsp" },
  { measurement: "whole" },
];

type AddItemScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "AddItem"
>;
export default function AddItemScreen({
  navigation,
}: AddItemScreenNavigationProp) {
  const [itemName, setItemName] = useState("");
  const [itemAmt, setItemAmt] = useState("1");
  const [value, setValue] = useState("item");

  const [nutrition, setNutrition] = useState("");

  useEffect(() => {
    const k = async () => {
      let r = await nutritionapi.getResults("grape");
      console.warn(r);
      setNutrition(r.toString());
    };
    k();
  });
  const onSubmit = async () => {
    if (itemName === "") {
      Alert.alert("Missing item name");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "item"), {
        name: itemName,
        quantity: itemAmt,
        unit: value,
      });
      navigation.goBack();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}> {nutrition} </Text>
      <View style={styles.item}>
        <TextInput
          style={styles.itemInputText}
          placeholder="enter here"
          onChangeText={(newText) => setItemName(newText)}
          defaultValue={itemName}
        />
        <TextInput
          style={styles.itemInputNumber}
          placeholder={itemAmt}
          keyboardType="numeric"
          onChangeText={(newAmt) => setItemAmt(newAmt.replace(/[^0-9]/g, ""))}
          defaultValue={itemAmt}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="measurement"
          valueField="measurement"
          placeholder="item"
          searchPlaceholder="Search"
          value={value}
          onChange={(item: measurement) => setValue(item.measurement)}
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
  },
  title: {
    margin: 80,
    alignSelf: "center",
  },
  item: {
    marginBottom: 40,
    width: "90%",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
  },
  itemInputText: {
    width: "30%",
    margin: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  itemInputNumber: {
    width: "15%",
    margin: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
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
    width: 90,
    height: 80,
  },
});
