import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const intialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(intialCart);

    const addToCart = (item, cantidad) => {
        const addedItem = { ...item, cantidad };

        const newCart = [...cart];
        const isInCart = newCart.find((producto) => producto.id === addedItem.id);

        if (isInCart) {
            isInCart.cantidad += cantidad;
        } else {
            newCart.push(addedItem);
        }
        setCart(newCart);
    }

    const getQuantityCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const getTotalAmount = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const deleteProduct = (id) => {
        const newCart = cart.filter((product) => product.id != id);
        setCart(newCart)
    }

    const decrementCantidad = (id) => {
        const newCart = [...cart]
        const product = newCart.find((producto) => producto.id === id);
        if (product.cantidad > 1){
            product.cantidad -= 1
        }
        setCart(newCart)
    }

    const incrementCantidad = (id) => {
        const newCart = [...cart]
        const product = newCart.find((producto) => producto.id === id);
        product.cantidad += 1
        setCart(newCart)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    

    return (
        <CartContext.Provider value={ {
            cart,
            addToCart,
            getQuantityCart,
            getTotalAmount,
            emptyCart,
            deleteProduct,
            decrementCantidad,
            incrementCantidad
        } }>
            {children}
        </CartContext.Provider>
    )



}