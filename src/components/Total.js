import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useCart, totalCart, totalItems, useCartRemove } from '../CartContext';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(5),
        marginLeft: 100,
      },
    },
    marginR: {
       marginRight: 15,
       marginTop: 15,
    },
    cartTotal: {
        textAlign: "end",
    },
    marginT: {
        marginTop: 15,
    }
  }));
  
const Total = () => {
    const cart = useCart()
    const removeItem = useCartRemove()
    const classes = useStyles();
 
    return (
        <div className={classes.root}>
        <div className={classes.cartTotal}>
            <h5 className={classes.marginT}>Empanadas pedidas: {totalItems(cart)} </h5>
            <h3 className={classes.marginT}>TOTAL: ${totalCart(cart)}</h3>
            <Button variant="outlined" color="primary"className={classes.marginR}  onClick={()=>removeItem(-1)}>Vaciar Carrito</Button>
            <NavLink to="/Checkout" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" className={classes.marginT}>Pagar</Button>
            </NavLink>
        </div>
        </div>
    )
}

export default Total
