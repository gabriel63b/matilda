import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartPage from './CartPage';
import ItemList from './ItemList';
import Typography from '@material-ui/core/Typography';
import CheckOutCard from './CheckOutCard';
import { useCart, useCartUpdate } from '../CartContext';
import Total from './Total';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
   margin: 50,
    marginLeft: 180,
    marginRight: 180,
  },
  paper: {
    
    
  },
}));

const CheckOutPage = () => {
  const classes = useStyles();
  const cart = useCart()
  


  return (
    <div className={classes.root}>
      <Typography align="center" gutterBottom variant="h3">Resumen de compra</Typography>
      <Box display="flex" justifyContent="center" border={3} borderColor="#DEB887" boxShadow={3}>
      <CartPage/>
       <Typography align="center" gutterBottom variant="h3">
        
       </Typography>
       <Typography  gutterBottom variant="h4">
       {/* <Total/> */}
       </Typography>
       
      </Box>
      
     
    </div>
    

  );
}

export default CheckOutPage