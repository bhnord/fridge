import { Text, View, TextInput, StyleSheet, Button } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { measurement: "container" },
  { measurement: "cup" },
  { measurement: "item" },
  { measurement: "jar" },
  { measurement: "tbsp" },
  { measurement: "tsp" },
  { measurement: "whole" },

]

export default function AddItemScreen() {
  const [itemName, setItemName] = useState("");
  const [itemAmt, setItemAmt] = useState("1");
  const [value, setValue] = useState(null);


  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Pee Pee Poo Poo</Text>
      <View style={styles.item}>
        <TextInput
          style={styles.itemInput}
          placeholder="enter here"
          onChangeText={newText => setItemName(newText)}
          defaultValue={itemName}
        />
        <TextInput
          style={styles.itemInput}
          placeholder={itemAmt}
          keyboardType="numeric"
          onChangeText={newAmt => setItemAmt(newAmt.replace(/[^0-9]/g, ""))}
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
          placeholder="container"
          searchPlaceholder="Search"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>
      <View style={styles.addButton}>
        <Button title="b" color="red" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center"
  },
  title: {
    margin: 80,
    alignSelf: "center"
  },
  item: {
    flexDirection: "row"
  },
  itemInput: {
    margin: 20
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: "25%"
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
    width: 40,
    height: 80
  }
})
