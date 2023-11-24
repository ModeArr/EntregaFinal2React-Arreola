import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {getProductByID} from "../helpers/GetProducts.js"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [product, setProducts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getProductByID(parseInt(id)).then((product) => setProducts(product))
  }, [id]) 
  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer