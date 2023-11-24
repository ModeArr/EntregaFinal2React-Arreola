import Item from "./Item"

const ItemList = ({products}) => {
  return (
    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          products.map((prod) => {
            return(
              <Item
              id={prod.id}
              key={prod.id}
              title={prod.title}
              image={prod.image}
              price={prod.price}
              rating={prod.rating.rate}
              categoria={prod.category}
            />
            )
          })
        }
    </div>
  )
}

export default ItemList