import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const getBoughts = async ({email}) => {
  const db = getFirestore();
  const q = query(collection(db, "orders"), where("buyer.email", "==", email));
  return getDocs(q).then((snapshot) => {
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
}