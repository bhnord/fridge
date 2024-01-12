import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Button, TextInput } from "react-native"
import { useState } from "react";
import { Item } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type UpdateItemScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "UpdateItem">;
export default function UpdateItemScreen({ navigation, route }: UpdateItemScreenNavigationProp) {

  const item = route.params.item
  const [quantity, setQuantity] = useState(item.quantity)
  const [unit, setUnit] = useState(item.unit)

  const updateItem = async () => {
    console.log(quantity, unit)
  }


  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="enter here"
          keyboardType="numeric"
          onChangeText={newAmt => setQuantity(Number(newAmt.replace(/[^0-9]/g, "")))}
          defaultValue={""}
        />
        <TextInput
          style={styles.textInput}
          placeholder="enter here"
          onChangeText={newText => setUnit(newText)}
          defaultValue={""}
        />
        <Button title="but" onPress={updateItem} />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: "30%",
    margin: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1
  },
});


