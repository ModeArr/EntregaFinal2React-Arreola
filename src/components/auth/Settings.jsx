import { useState } from "react"
import { updateProfile } from "firebase/auth"
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { storage } from "../firebase/config.js";
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { v4 } from "uuid";


const Settings = () => {
  const { user } = UserAuth()
  const [nombre, setNombre] = useState()
  const [imageUpload, setImageUpload] = useState(null);
  
  const navigate = useNavigate()

  const handleEditName = async(e) => {
    e.preventDefault()

    updateProfile(user, {displayName: nombre}).then(() => {
      console.log("Se cambio el nombre")
      navigate("/account")
    })
  }

  const handleSubirFoto = async(e) => {
    e.preventDefault()

    if (imageUpload){
      const imageRef = ref(storage, `usuarios/avatares/${imageUpload.name + v4()}`)
      await uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          updateProfile(user, {photoURL: url}).then(() =>{
            console.log("Se subio la imagen y actualizo")
            navigate("/account")
          })
          })
        })
      }  
    }
  return (
    <div>
      <h2 className="pt-2 mb-10 text-center text-xl font-bold">Configura tus datos</h2>
      
      <form onSubmit={handleEditName}>
        <input type="text" required placeholder="Cambiar Nombre" onChange={(e) => {setNombre(e.target.value)}}/> 
        <button type="submit" className="btn">Agregar</button>
      </form>

      <form onSubmit={handleSubirFoto}>
        <input id="file" required type="file" className="file-input w-full max-w-xs" onChange={(e) => { setImageUpload(e.target.files[0])}}/>
        <button type="submit" className="btn">Agregar Foto</button>
      </form>
    </div>
  )
}

export default Settings