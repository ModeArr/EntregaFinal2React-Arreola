import { useState, useEffect } from "react"
import { getCategory } from "../helpers/GetCategory"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase/config"

const DelCategory = () => {
    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState("")

    useEffect(() => {
        getCategory().then((cat) => setCategorias(cat))
      }, []) 

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(categoria)
        const docRef = doc(db, 'categorias', categoria)
        deleteDoc(docRef).then(() => {
            console.log(`Se borro la categoria ${categoria}`)
        })
    }

  return (
    <div className="items-center">
      <h2 className="pt-2 mb-10 text-center text-xl font-bold">Añade una Categoria</h2>
      <div className="">
        <form className="flex flex-col items-center gap-5"  required onSubmit={handleSubmit}>
        <select className="select select-bordered w-full max-w-xs" onChange= {(e) => {this.setState(setCategorias(e.target.getAttribute('data-key')))}}>
            <option disabled selected>Categoria</option>
            {categorias.map((cat) => {
              return (
                <option key={cat.id} data-key={cat.id} >{cat.categoria}</option>
              )
            })}
          </select>
          <button type="submit" className="btn">Borrar Categoria</button>
        </form>
      </div>
    </div>
  )
}

export default DelCategory