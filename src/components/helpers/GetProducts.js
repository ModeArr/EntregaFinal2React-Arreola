export const getProductos = async() => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()

    return data;
  };

export const getProductByID = async(id) =>{
  const products = await getProductos()
  return products.find((p) => p.id === id)
}

export const getCategoriesUnique = async() => {
  const products = await getProductos()
  return [...new Set(products.map((cat) => cat.category))];
}

export const getCategoria = async(cat) => {
  const products = await getProductos()
  return products.filter((p) => p.category === cat)
}

