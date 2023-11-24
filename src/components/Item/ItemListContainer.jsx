import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import {getProductos, getCategoria} from "../helpers/GetProducts.js"
import { useParams } from "react-router-dom"

function ItemListContainer() {
  const { category } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => { 
    category ?
     getCategoria(category).then((category) => setProducts(category))
     : getProductos().then((product) => setProducts(product))
  }, [category]) 

  return (
  <section className="py-10 bg-gray-100">
      <ItemList products={products}/>
  </section>
  )
}

export default ItemListContainer