import NavBar from "./components/NavBar"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";

export const App = () => {
  return (
    <div className="">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
            <Route exact path="/categoria/:category" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App