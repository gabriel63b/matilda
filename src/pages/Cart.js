import React from 'react'
import { useCart } from '../CartContext';
import CheckOutPage from '../components/CheckOutPage';




function Cart() {
    const cart = useCart()
    console.log(cart);
    return (
        <div>
          
            {cart.length === 0 ? (
          <p>Nada todavia</p>
        ) : (
           
         
            <CheckOutPage/>
         
        )}
        </div>
    )
}

export default Cart
