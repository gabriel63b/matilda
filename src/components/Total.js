import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import { useCart, useCartItemTotal} from '../CartContext';

const Total = () => {
    const cart = useCart()
    const totalItemCart = useCartItemTotal()
 
console.log(cart)

const totalCart = (cart) => {
    return(cart.reduce((amount, item) => item.totalPrice + amount, 0));
}

const totalItems = (cart) => {
    return (cart.reduce((quantItem, item) => item.quantity + quantItem, 0));
  }


    return (
        <div >
            
            <h5>Total item: {totalItems(cart)} </h5>
            <h5>${totalCart(cart)}</h5>
            <Button variant="contained" color="secondary">Total</Button>
        </div>
    )
}

export default Total
// const [total, setTotal] = useState(0); 
// useEffect(() => {        
//       setTotal = totalCart();
//    }, []);