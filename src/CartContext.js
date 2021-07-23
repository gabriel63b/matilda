import React, {useContext, createContext, useState, useEffect} from 'react'
import swall from 'sweetalert';
import 'firebase/firestore'
import {getFirestore} from './firebase'
export const ItemsContext = createContext()
export const LoadItemsContext = createContext()
export const CartContext = createContext()
export const CartUpdateContext = createContext()
export const CartRemoveContext = createContext()


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


/*Calcula el importe total de compra*/
export const totalCart = (cart) => {
  return(cart.reduce((amount, item) => item.totalPrice + amount, 0));
}
/*Cuenta la cantidad de items total agregados al carro de compras*/
export const totalItems = (cart) => {
  return cart.reduce((quantItem, item) => item.quantity + quantItem, 0);
}

/*Elimina todos los productos del carro de compras*/


export function CartProvider ({children}) {
    const [cart,setCart] = useState ([])
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
  
  const removeTotalItem = () => {
      setCart([]);
    } 

    /*Elimina uno o todos los productos del carro de compras*/
    const removeItem = (id) => {
      
      switch (id) {
        case -2: removeTotalItem();
        break;
        case -1: {
          swall({
            title: "¿Desea eliminar todos los elemenos del carrito?",
            icon: "warning",
            buttons: ["No", "Si"],
          }).then(respuesta=>{
            if (respuesta) {removeTotalItem();}
          });
          break;}
        
        default: {
          const newCart = cart.filter ((item)=> item.id !== id);
            setCart(newCart);
            totalCart(cart);
          }
        }
    
    };


  return (
    <ItemsContext.Provider value={items}>
      <LoadItemsContext.Provider value={LoadItems}>
        <CartContext.Provider value={cart}>
          <CartUpdateContext.Provider value = {addToCart}>
            <CartRemoveContext.Provider value = {removeItem}>
            {children}
              </CartRemoveContext.Provider>
            </CartUpdateContext.Provider>
        </CartContext.Provider>
      </LoadItemsContext.Provider> 
    </ItemsContext.Provider>
  );
   
}

