import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const addToCart = () => {
        console.log("Se agrego inventrio")
    }

    return(
        <div className="mt-4 im space-y-3 sm:space-y-6 sm:mt-0 sm:block">
            <div className="flex items-center border-gray-100 max-md:justify-center">
                <span className="cursor-pointer rounded-l bg-gray-100 py-3 px-9 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => contador > 1 ? setContador(contador - 1) : console.log("No puedes tener articulos negativos")}>-</span>
                <input value={contador} max={5} type="number" className="h-12 w-24 border bg-white text-center text-xs outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <span className="cursor-pointer rounded-r bg-gray-100 py-3 px-9 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => setContador(contador + 1)}>+</span>
            </div>
            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-4 text-white cursor-pointer hover:bg-blue-600 justify-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                    <ion-icon name="cart" size="large"></ion-icon>
                    <button className="text-xl" onClick={addToCart}> Agregar al carrito</button>
            </div>
        </div>
    )
}

              <button
                className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div
                  className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to cart
                </div>
              </button>

export default ItemCount