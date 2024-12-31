import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { ItemDoc, Item } from "../../App";

const getItems = async (): Promise<ItemDoc[]> => {
  const itemsRef = collection(db, "item");
  const snapshot = await getDocs(itemsRef);
  let items: ItemDoc[] = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    const item: Item = {
      name: data.name,
      quantity: data.quantity,
      unit: data.unit,
    };
    const itemDoc: ItemDoc = { id: doc.id, item: item };
    items.push(itemDoc);
  });
  return items;
};

const deleteItem = async (itemDoc: ItemDoc) => {
  const itemRef = doc(db, `item/${itemDoc.id}`);
  await deleteDoc(itemRef);
};

export { getItems, deleteItem };
