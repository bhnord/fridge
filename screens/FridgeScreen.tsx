import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button, TouchableOpacity, ScrollView } from "react-native";
import ItemComponent from "../components/ItemComponent.js";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App.js";
import { db, collection } from "../src/services/firebase";
import { DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";


type Item = {
  name: string,
  quantity: number,
  unit: string
}

type FridgeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Fridge">;
export default function FridgeScreen({ navigation }: FridgeScreenNavigationProp) {

  const [items, setItems] = useState<DocumentData>([])
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const getItems = async () => {
      const itemsRef = collection(db, 'item');
      const snapshot = await getDocs(itemsRef);
      let items: DocumentData[] = [];
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        items.push(doc.data())
      });
      console.log(items);
      setItems(items);
    }

    getItems();
  }, [update])




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <View style={styles.innerTitle}>
          <Text>My Fridge:</Text>
        </View>
        <View style={styles.innerTitle} />
        <View style={styles.innerTitle}>
          <Button title="add item" onPress={() => navigation.navigate("AddItem")} />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.flatList}>
        {
          items.map((x: Item) => <ItemComponent key={x.name} item={x} />)
        }
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
    paddingTop: StatusBar.currentHeight
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
  }
});
