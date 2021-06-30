import React, {useContext, createContext, useState} from 'react'
export const CartContext = createContext()
export const CartUpdateContext = createContext()
export const CartRemoveContext = createContext()

// Costume hook
export function useCart() {
    return useContext(CartContext);
  }

export function useCartUpdate () {
    return useContext (CartUpdateContext)
}

export function useCartRemove () {
    return useContext (CartRemoveContext)
}

export function CartProvider ({children}) {
    const [cart,setCart] = useState ([])
    // const quantity =0;
    const addToCart = (id, name, count, price, image) => {
          const tmp = {
            id: id,
            name: name,
            quantity: count,
            price: price,
            image: image,
          };
          const ord = cart;
          ord.push(tmp);
        console.log(cart);
        return setCart(ord);
      };

    const removeItem = (id) => {
        const index = cart.findIndex ((item=> item.id === id));
        let newCart = [...cart];
        newCart.splice(index,1); 
        return  setCart(newCart);
    };
     /*
   * Establecemos 2 Providers
   * 1 para proveer el State
   * 1 para proveer la función addToCart 
   *
   * Esto es así, ya que la función addToCart nunca cambiará
   * Por esta razón, la separamos del resto del State
   */
  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value = {addToCart}>
        <CartRemoveContext.Provider value = {removeItem}>
        {children}
           </CartRemoveContext.Provider>
        </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
   
}


// const addToCart = (id, name, count, price, image) => {
//     const index = cart.findIndex ((item=> item.id === id)); 
//         if (index>=0) {
//             quantity = cart.quantity[index] + count;
//         } 
//         else {
//           quantity = count;
//         }
//         const tmp = {
//           id: id,
//           name: name,
//           quantity: quantity,
//           price: price,
//           image: image,
//         };
//         const ord = cart;
//         ord.push(tmp);
//       console.log(cart);
//       return setCart(ord);
//     };