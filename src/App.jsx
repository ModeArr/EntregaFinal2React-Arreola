import NavBar from "./components/NavBar"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";
import AdminPanel from "./components/admin/AdminPanel";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Account from "./components/auth/Account";
import { AuthContextProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Checkout from "./components/Cart/Checkout";

export const App = () => {
  return (
    <div className="">
      <CartProvider>
        <BrowserRouter>
          <AuthContextProvider>
            <NavBar />
            <Routes>
              <Route exact path="/signin" element={<SignIn />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/account" element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }/>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route
                exact
                path="/producto/:id"
                element={<ItemDetailContainer />}
              />
              <Route
                exact
                path="/categoria/:category"
                element={<ItemListContainer />}
              />
              <Route exact path="/adminpanel" element={<AdminPanel />} />
            </Routes>
          </AuthContextProvider>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App