import React from 'react'
import Button from '@material-ui/core/Button';
import { useCartTotal, } from '../CartContext';

const Total = () => {
    const total = useCartTotal()


    return (
        <div >
            <h5>Total item: </h5>
            <h5>${total}</h5>
            <Button variant="contained" color="secondary">Total</Button>
        </div>
    )
}

export default Total
// const [total, setTotal] = useState(0); 
// useEffect(() => {        
//       setTotal = totalCart();
//    }, []);