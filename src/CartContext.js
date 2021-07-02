import React, {useContext, createContext, useState} from 'react'
export const CartContext = createContext()
export const CartUpdateContext = createContext()
export const CartRemoveContext = createContext()
export const CartTotalContext = createContext()
export const CartTotalItemContext = createContext()

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

export function useCartTotal () {
  return useContext (CartTotalContext)
}

export function useCartItemTotal () {
  return useContext (CartTotalItemContext)
}

export function CartProvider ({children}) {
    const [cart,setCart] = useState ([])
    const [total,setTotal] = useState (0)
    const [quant ,setQuant] = useState (0)

    const addToCart = (id, name, count, price, image) => { 
      const aux = cart.find((item) => item.id === id);
    if (!aux) {
     const tmp = {
        id: id,
        name: name,
        quantity: count,
        unitPrice: price,
        image: image,
        totalPrice: price * count,
      };
      setCart([...cart, tmp]);
    } else {
      updateCart(id,count);
    }
    console.log(cart);
    totalCart();
    totalItems();
    };
    
    const updateCart =(id, count) => {
      const newCart = cart.map ((item)=> {
        
        if  (item.id === id){
       return {
         ...item,
         quantity: item.quantity + count,
       }
     }
     return item
    });
    setCart(newCart);
    
    }
  
    const removeItem = (id) => {
      const newCart = cart.filter ((item)=> item.id !== id);
        setCart(newCart);
        totalCart();
    };

    const totalCart = () =>{
      let tot = 0;
      cart.map((item)=>{ 
        tot = item.quantity * item.unitPrice + tot;
        console.log(tot);
        return tot;
      })
      setTotal(tot);
    }  

    const totalItems = () =>{
      let q=0; 
      cart.map((item)=>{ 
        q = item.quantity + q;
        console.log(q);
        return q;
      })
      
      setQuant(q);
      console.log(quant);
    }
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
          <CartTotalContext.Provider value = {total}>
            <CartTotalItemContext.Provider value = {quant}>
        {children}
                </CartTotalItemContext.Provider>
              </CartTotalContext.Provider>
           </CartRemoveContext.Provider>
        </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
   
}

