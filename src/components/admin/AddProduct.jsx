import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { storage, colRef } from "../firebase/config.js";
import { v4 } from "uuid";
import { getCategory } from "../helpers/GetCategory.js";

const AddProduct = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [categorias, setCategorias] = useState([])
  const [categoria, setCategoria] = useState("")

  useEffect(() => {
    getCategory().then((cat) => setCategorias(cat))
  }, []) 
  //subir archivo
  const handleSubmit = async(e) => {
    e.preventDefault()

    if (imageUpload){
      const imageRef = ref(storage, `productos/imagenes/${imageUpload.name + v4()}`)
      await uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          addDoc(colRef, {
            title: title,
            image: url,
            price: price,
            rating: rating,
            description: description,
            category: categoria
          }).then(() =>{
            console.log("Se subio el Producto a la db")
            location.reload();
          })
        })
      })}else{
        console.log("Agrega una imagen");
      }
  }

  return (
    <div className="items-center">
      <h2 className="pt-2 mb-10 text-center text-xl font-bold">Añade un Producto</h2>
      <div className="">
        <form className="flex flex-col items-center gap-5" id="agregarProducto" required onSubmit={handleSubmit}>
          <input id="title" type="text" required placeholder="Titulo" className="input input-bordered w-full max-w-xs" onChange={(e) => { setTitle(e.target.value)}}/>
          <select className="select select-bordered w-full max-w-xs" onChange= {(e) => {setCategoria(e.target.value)}}>
            <option disabled selected>Categoria</option>
            {categorias.map((cat) => {
              return (
                <option key={cat.id}>{cat.categoria}</option>
              )
            })}
          </select>
          <input id="precio" type="number" required placeholder="Precio" min="0" className="input input-bordered w-full max-w-xs" onChange={(e) => { setPrice(e.target.value)}}/>
          <input id="rating" type="number" required defaultValue={4.9} min="0" max="5.0" placeholder="Rating" className="input input-bordered w-full max-w-xs" onChange={(e) => { setRating(e.target.value)}}/>
          <input id="file" required type="file" className="file-input w-full max-w-xs" onChange={(e) => { setImageUpload(e.target.files[0])}}/>
          <textarea id="description" className="textarea textarea-bordered w-full max-w-xs" required placeholder="Descripción" onChange={(e) => { setDescription(e.target.value)}} />

          <button type="submit" className="btn btn-primary">Añadir Producto</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct