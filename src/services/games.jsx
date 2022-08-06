import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where
} from "firebase/firestore";

export const getItems = async (type = "all") => {
  const db = getFirestore();
  const colRef = collection(db, "items");
  return getDocs(colRef).then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if (type !== "all") {
      return data.filter((item) => item.type === type);
    }
    return data;
  });
};

export const getGameByTitle = async (title) => {
  const db = getFirestore();
  const q = query(collection(db, "items"), where("title", "==", title));
  return getDocs(q).then((snapshot) => {
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
};

export const buyItemService = async (order) => {
  const db = getFirestore();
  const orderCollection = collection(db, 'orders');
  return await addDoc(orderCollection, order)
    .then((res) => console.log(res.id))
    .catch((err) => console.log(err));
};


export const updateStock = async (itemList) => {
  const db = getFirestore();
  itemList.forEach(async (item) => {
    const orderDoc = doc(collection(db, 'items'), item.id);
    const dbItem = await getDoc(orderDoc);
    const dbBody = dbItem.data();
    const newStock = dbBody.stock - item.quantity;
    console.log(item.title, newStock);
    updateDoc(orderDoc, { stock: newStock });
  })
};