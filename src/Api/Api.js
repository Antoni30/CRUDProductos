import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { database } from "./firebaseApi";

export const postProducts = async (product) => {
  try {
    const getCollection = await collection(database, "products");
    await addDoc(getCollection, product);
    console.log("Producto agregado correctamente");
  } catch (error) {
    console.error("Error al agregar el producto:", error);
  }
};
export const getProducs = async () => {
  try {
    const getCollection = await collection(database, "products");
    const docsE = await getDocs(getCollection);

    const listProducts = docsE.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    return listProducts;
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = async (productId, newData) => {
  try {
    const productRef = await doc(database, "products", productId);
    console.log(newData);
    await updateDoc(productRef, newData);
    console.log("Producto actualizado correctamente");
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async (productId) => {
  try {
    const productRef = doc(database, "products", productId);
    await deleteDoc(productRef);
    console.log("Producto eliminado  correctamente");
  } catch (error) {
    console.log(error);
  }
};
