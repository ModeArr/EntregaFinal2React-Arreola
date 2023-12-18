import { useState, useEffect } from "react"
import { getCategory } from "../helpers/GetCategory"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase/config"

const DelCategory = () => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")

    useEffect(() => {
        getCategory().then((cat) => setCategories(cat))
      }, []) 

    console.log(category)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const docRef = doc(db, 'categorias', category)
        console.log(category)
        await deleteDoc(docRef).then(() => {
            console.log(`Se borro la categoria ${category}`)
            location.reload();
        }).catch((e => {
          console.error(e);
        }))
    }

  return (
    <div className="items-center">
      <h2 className="pt-2 mb-10 text-center text-xl font-bold">Borra una Categoria</h2>
      <div className="">
        <form className="flex flex-col items-center gap-5"  required onSubmit={handleSubmit}>
        <select value={category} className="select select-bordered w-full max-w-xs" onChange= {(e) => {setCategory(e.target.value)}}>
            <option disabled selected>Categoria</option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id} >{cat.categoria}</option>
              )
            })}
          </select>
          <button type="submit" className="btn btn-primary">Borrar Categoria</button>
        </form>
      </div>
    </div>
  )
}

export default DelCategory