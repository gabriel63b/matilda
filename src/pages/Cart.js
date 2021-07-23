import React from 'react'
import { useCart } from '../CartContext';
import CheckOutPage from '../components/CheckOutPage';
import CartEmpty from '../components/CartEmpty';
import swall from 'sweetalert';


function Cart() {
    const cart = useCart()
    
    return (
        <div>
            {cart.length === 0 ? (
          swall({
            title: "Todavia no hay productos agregados",
            icon: "warning",
            timer : "1800",
          }),
          <div>
            <CartEmpty/>
          </div>
        ) : (
            <CheckOutPage/>
        )}
        </div>
    )
}

export default Cart
