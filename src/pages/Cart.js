import React from 'react'
import { useCart } from '../CartContext';
import CheckOutPage from '../components/CheckOutPage';
import swall from 'sweetalert';
import { NavLink, useHistory } from 'react-router-dom';




function Cart() {
    const cart = useCart()
    
    console.log(cart);
    return (
        <div>
            {cart.length === 0 ? (
          swall({
            title: "Todavia no hay productos agregados",
            icon: "warning",
            timer : "1800",
          }),
          <div>
          <NavLink to="/" activeClassName="selected">
              Volver a comprar
          </NavLink></div>
        ) : (
            <CheckOutPage/>
        )}
        </div>
    )
}

export default Cart
