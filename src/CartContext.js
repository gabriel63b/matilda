import React, {useContext, createContext, useState, useEffect} from 'react'
import swall from 'sweetalert';
import 'firebase/firestore'
import {getFirestore, storage } from './firebase'
export const ItemsContext = createContext()
export const LoadItemsContext = createContext()
export const CartContext = createContext()
export const CartUpdateContext = createContext()
export const CartRemoveContext = createContext()
export const CartTotalContext = createContext()
export const CartTotalItemContext = createContext()

// Costume hook
export function useItems() {
  return useContext(ItemsContext);
}
export function useLoadItems() {
  return useContext(LoadItemsContext);
}

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

export const totalCart = (cart) => {
  return(cart.reduce((amount, item) => item.totalPrice + amount, 0));
}

export const totalItems = (cart) => {
  return cart.reduce((quantItem, item) => item.quantity + quantItem, 0);
}

export function CartProvider ({children}) {
    const [cart,setCart] = useState ([])
    const [total,setTotal] = useState (0)
    const [quant ,setQuant] = useState (0)
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState([]);
  
  /*Carga los productos desde la base de datos*/
  const LoadItems = () => { 
  useEffect(() => {
    setLoading(true);
    const db =  getFirestore();
    const data = db.collection("items");

    data.get().then((querySnapshot) => {
     if (querySnapshot.size === 0) {
       console.log ('No results');
     } 
     setItems (querySnapshot.docs.map(doc => doc.data()))
    
    }).catch ((error) => {
      console.log ("Error searching items", error);
    }).finally (() => {
      setLoading(false);
    })
  },[])
}
    
    /*Agrega o actualiza la cantidad de items del carro de compras*/
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
    swall({
      title: "Se han agregado los productos al carrito",
      icon: "success",
      timer: "1200",
    });
    totalItems(cart);
    };
    

    /*Actualiza la cantidad de items del carro de compras*/
    const updateCart =(id, count) => {
      const newCart = cart.map ((item)=> {
        
        if  (item.id === id){
          const precio = (item.quantity + count)*item.unitPrice; 
          console.log(precio);
       return {
         ...item,
         quantity: item.quantity + count,
         totalPrice: precio,
       }
     }
     return item
    });
    setCart(newCart);
    }
  
    /*Elimina uno o todos los productos del carro de compras*/
    const removeItem = (id) => {
      if  (id === -1){
        swall({
          title: "¿Desea eliminar todos los elemenos del carrito?",
          icon: "warning",
          buttons: ["No", "Si"],
        }).then(respuesta=>{
          if (respuesta) {setCart([]);}
        });
      } else
      {
      const newCart = cart.filter ((item)=> item.id !== id);
        setCart(newCart);
        totalCart(cart);
      }
    };


  return (
    <ItemsContext.Provider value={items}>
      <LoadItemsContext.Provider value={LoadItems}>
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
      </LoadItemsContext.Provider> 
    </ItemsContext.Provider>
  );
   
}

