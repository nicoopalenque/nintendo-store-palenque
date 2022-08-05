import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import { v4 as uuidv4 } from 'uuid';

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

export const buyItemService = async (buyer, items, total) => {
  const db = getFirestore();
  const orderCollection = collection(db, 'orders');
  const order = {
    buyer,
    items,
    total,
  }
  await addDoc(orderCollection, order)
    .then((res) => console.log(res.id))
    .catch((err) => console.log(err));

};
