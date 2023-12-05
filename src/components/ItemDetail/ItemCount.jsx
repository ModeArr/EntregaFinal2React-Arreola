
const ItemCount = ({stock, handleAdd, increment, decrement, cantidad}) => {

    return(
        <div className="mt-4 im space-y-3 sm:space-y-6 sm:mt-0 sm:block">
            <div className="flex items-center border-gray-100 max-md:justify-center">
                <button className="cursor-pointer rounded-l bg-gray-100 py-3 px-9 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={decrement} >-</button>
                <input value={cantidad} max={stock} type="number" className="h-12 w-24 border bg-white text-center text-lg outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <button className="cursor-pointer rounded-r bg-gray-100 py-3 px-9 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={increment}>+</button>
            </div>
            <div onClick={handleAdd} className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-4 text-white cursor-pointer hover:bg-blue-600 justify-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                    <ion-icon name="cart" size="large"></ion-icon>
                    <button className="text-xl"> Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount