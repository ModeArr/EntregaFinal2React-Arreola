import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext";
import { colRefOrder } from "../firebase/config";
import { addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, emptyCart } = useContext(CartContext)
  const [nombre, setName] = useState("")
  const [apellido, setApellido] = useState("")
  const [tel, setTel] = useState(0)
  const { user } = UserAuth()
  const total = getTotalAmount() + 120
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({
      nombre: nombre,
      apellido: apellido,
      email: user.email,
      telefono: tel,
      total: total,
      user: user.uid,
      carrito: cart
  })
    await addDoc(colRefOrder, {
      nombre: nombre,
      apellido: apellido,
      email: user.email,
      telefono: tel,
      total: total,
      user: user.uid,
      carrito: cart
    }).then(() =>{
      emptyCart()
      console.log("Se subio la order")
    })
  }
  if (!user) {
    navigate("/signin");
  }
return(
  <div>
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Termina tu compra</h1>
      <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <form className="gap-3" onSubmit={handleSubmit}>
          <input type="text" required placeholder="Nombre" className="input input-bordered w-full max-w-xs" onChange={(e) => setName(e.target.value)}/>
          <input type="text" required placeholder="Apellido" className="input input-bordered w-full max-w-xs" onChange={(e) => { setApellido(e.target.value)}}/>
          <input type="tel" required placeholder="Telefono"  className="input input-bordered w-full max-w-xs" onChange={(e) => { setTel(e.target.value)}}/>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Crear Orden</button>
          </form>
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${getTotalAmount()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Envio</p>
            <p className="text-gray-700">$120</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${getTotalAmount() + 120} </p>
              <p className="text-sm text-gray-700">Incluye impuestos</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg md:w-1/3">
        {
              cart.map((item) => (
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key= {item?.id}>
                  <img src={item?.image} alt={item?.title} className="w-full rounded-lg sm:w-20" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{item?.title}</h2>
                      <p className="mt-1 text-xs text-gray-700 capitalize"><Link to={`/categoria/${item?.category}`} > {item?.category} </Link></p>
                    </div>
                    <div className="mt-4 flex sm:space-y-6 sm:mt-0 sm:space-x-6 flex-col items-center">
                      <div className="flex items-center border-gray-100">
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" defaultValue={item?.cantidad} min="1" />
                      </div>
                      <p className="text-lg">${item?.price * item?.cantidad} </p>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
)

}

export default Checkout