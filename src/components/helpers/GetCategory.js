import { getDocs } from "firebase/firestore"
import { colRefCat } from "../firebase/config" 

export const getCategory = async() => { 
    let categorias = await getDocs(colRefCat)
    let p = []
    console.log(categorias)
    categorias.docs.forEach(doc => {
      p.push({ ...doc.data(), id: doc.id })
      })
    console.log(p)
    return p
  }