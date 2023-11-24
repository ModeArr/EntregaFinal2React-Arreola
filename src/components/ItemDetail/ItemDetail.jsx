import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {
  
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16" >
        <div>
          <img src={product.image}alt="" className="mx-auto duration-200 w-60 hover:scale-105"/>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <Link to={`/categoria/${product.category}`} > <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full capitalize"> 
                {product.category}
              </div></Link>
            </div>

            <div className="max-w-sm text-2xl font-medium">
              {product.title}
            </div>
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="text-5xl font-bold">${product.price}</p>
              <p className="text-sm font-light text-gray-400 w-80 normal-case">
                {product.description}
              </p>
            </div>
            <div className="group">
                <ItemCount/>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
              <div className="text-sm">50+ articulos en inventario</div>
            </div>

            <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex-col">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
              <ion-icon name="heart-outline" size="large"></ion-icon>
                <span>Añadir a deseados</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail