import { useState } from "react"
import { addDoc } from "firebase/firestore";
import { colRefCat } from "../firebase/config.js";


const AddCategory = () => {
    const [categoria, setCategoria] = useState("")
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        await addDoc(colRefCat, {
            categoria: categoria
          }).then(() =>{
            console.log("Se añadio la categoria")
            location.reload();
          })
    }

  return (
    <div className="items-center">
      <h2 className="pt-2 mb-10 text-center text-xl font-bold">Añade una Categoria</h2>
      <div className="">
        <form className="flex flex-col items-center gap-5"  required onSubmit={handleSubmit}>
          <input id="title" type="text" required placeholder="Titulo" className="input input-bordered w-full max-w-xs" onChange={(e) => { setCategoria(e.target.value)}}/>
          <button type="submit" className="btn btn-primary">Añadir Categoria</button>
        </form>
      </div>
    </div>
  )
}

export default AddCategory