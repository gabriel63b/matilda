import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import { useCart, useCartTotal} from '../CartContext';

const Total = () => {
    const cart = useCart()
    const totalCart = useCartTotal()
  
console.log(cart)

    return (
        <div >
            
            <h5>Total item: </h5>
            <h5>${tot}</h5>
            <Button variant="contained" color="secondary">Total</Button>
        </div>
    )
}

export default Total
// const [total, setTotal] = useState(0); 
// useEffect(() => {        
//       setTotal = totalCart();
//    }, []);