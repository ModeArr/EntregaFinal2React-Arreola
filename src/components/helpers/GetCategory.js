import { getDocs } from "firebase/firestore"
import { colRefCat } from "../firebase/config" 

export const getCategory = async() => { 
    let categorias = await getDocs(colRefCat)
    let p = []
    categorias.docs.forEach(doc => {
      p.push({ ...doc.data(), id: doc.id })
      })
    return p
  }