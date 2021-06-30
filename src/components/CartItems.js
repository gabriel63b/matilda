import React from 'react'
import ItemList from './ItemList';


const Cart = ({cart, setCart}) => {
    console.log(cart.length);
    return (
        <div>
            Carrito
            {cart.length === 0 ? (
          <p>Nada todavia</p>
        ) : (
           
          cart.map((cart) => (
            <ItemList key={cart.id} product={cart} cart={cart} setCart={setCart}/>
          ))
        )}
        </div>
    );
};

export default Cart
