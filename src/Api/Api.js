import {bd} from './firebaseApi'
import { addDoc, collection, deleteDoc, doc, getDocs} from 'firebase/firestore/lite';

export const postProducts = async (product) => {
    try {
        const getCollection = await collection(bd,'products');
        await addDoc(getCollection,product)
        console.log('Producto agregado correctamente');
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
};
export const getProducs = async ()=>{
    try{
        const getCollection = await collection(bd, 'products');
        const docsE = await getDocs(getCollection);
        
        const listProducts = docsE.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }));
        
        return listProducts;
    }catch(error){
        console.log(error)
    }
}
export const updateProduct = async(productId,newData)=>{
    try{
        const productRef = await doc(bd, 'products', productId);
        await updateDoc(productRef, newData);
        console.log('Producto actualizado correctamente');
    }catch(error){
        console.log(error)
    }
}
export const deleteProduct = async(productId)=>{
    try{
        const productRef = doc(bd, 'products', productId);
        await deleteDoc(productRef)
        console.log('Producto eliminado  correctamente');
    }catch(error){
        console.log(error)
    }
}
