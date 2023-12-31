import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const {cart, emptyCart, getTotalAmount, deleteProduct, decrementCantidad, incrementCantidad} = useContext(CartContext)
  console.log(cart)

  const handleEmptyCart = () =>{
    emptyCart()
  }

  const handleDeleteProduct = (id) =>{
    deleteProduct(id)
  }

 const handleProductIncrement = (id) => {
    incrementCantidad(id)
  }

  const handleProductDecrement= (id) => {
    decrementCantidad(id)
  } 

  if (!cart.length){
    return (
      <div className="flex h-full w-full items-center justify-center container mx-auto mt-32 px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-black lg:text-7xl">Aún no tienes productos en tu carrito <ion-icon name="sad-outline"></ion-icon></h1>
      </div> 
    </div>
    )
  }
    return(
      <div>
        <div className="h-screen bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Productos de tu Carrito</h1>
          <div className="flex justify-center pb-3">
            <button className="btn btn-error flex justify-center" onClick={handleEmptyCart}>Borrar Carrito</button>
          </div>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
            {
                  cart.map((item) => (
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key= {item?.id}>
                      <img src={item?.image} alt={item?.title} className="w-full rounded-lg sm:w-40" />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">{item?.title}</h2>
                          <p className="mt-1 text-xs text-gray-700 capitalize"><Link to={`/categoria/${item?.category}`} > {item?.category} </Link></p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleProductDecrement(item.id)}> - </button>
                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number"  defaultValue={item?.cantidad} value={item?.cantidad} />
                            <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleProductIncrement(item.id)}> + </button>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm"></p>
                            <p className="text-lg">${item?.price * item?.cantidad} </p>
                            <button onClick={() => handleDeleteProduct(item.id)}><ion-icon  className="h-5 w-5 cursor-pointer duration-150 hover: scale-105 text-red-500" name="close-outline" size="large"></ion-icon></button>
                          </div>
                        </div>
                      </div>
                    </div>
                ))
              }
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
              <Link to="/checkout"><button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Pasar a pagar</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Cart