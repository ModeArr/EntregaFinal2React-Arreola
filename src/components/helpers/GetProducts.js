import { colRef } from "../firebase/config"
import { getDocs } from "firebase/firestore"

//get data
export const getProductos = async() => { 
  const productos = await getDocs(colRef)
  let p = []
  productos.docs.forEach(doc => {
    p.push({ ...doc.data(), id: doc.id })
    })
  return p
}

export const getProductByID = async(id) =>{
  const products = await getProductos()
  return products.find((p) => p.id === id)
}

export const getCategoriesUnique = async() => {
  const products = await getProductos()
  return [...new Set(products.map((cat) => cat.category))];
}

export const getCategoria = async(cat) => {
  const products = await getProductos()
  return products.filter((p) => p.category === cat)
}