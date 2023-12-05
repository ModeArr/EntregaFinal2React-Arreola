import { useContext } from "react"
import { CartContext } from "../context/CartContext"



function CartWidget() {
  const { getQuantityCart } = useContext(CartContext)

  return (
    <div className="relative cursor-pointer text-gray-800 hover:text-gray-400 duration-500">
        <ion-icon name="cart" className="" size="large"></ion-icon>
        <div className="absolute -mt-4 ml-6 rounded-full bg-red-600 px-[0.35em] py-[0.15em] text-[0.8rem] font-bold leading-none text-white"> {getQuantityCart()} </div>
    </div>
  )
}


export default CartWidget