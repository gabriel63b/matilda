import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemList from './ItemList';
import Cart from './Cart';
import {products} from '../Product-data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3), 
  },
}));

export default function ItemListContainer() {
  const classes = useStyles();

/*Estado de productos*/ 
  const [product, setProduct] = useState([])
  
 /*Estado del carrito*/ 
  const [cart, setCart] = useState([])
  const [count, setCount] = React.useState(0);

//   let miPromesa = new Promise((resolve, reject) => {  
//     setTimeout(function(){
//       const error = Math.random() > 1;
//       if(!error){      
//         resolve(products);  
//       }
//       reject("Error obteniendo los datos :(");
//       }, 2000);
//     });  
  
//     miPromesa.then((product) => {setProduct(product)})
//     .catch(
//       function(error){
//         console.log(error);
//     }).finally(
//         function(){
//        }
//      )
     
  return (
    <div className={classes.root}>
        {console.log(products)}
      <Grid container spacing={3}>
        {   
               products.map((product, index)=>{ return (
                 <Grid item xs={12} sm={6} md={4} lg={3}>
                 <ItemList key={product.id} product={product} cart={cart} setCart={setCart} count={count} setCount={setCount}/>
                 </Grid>      
               ) }) 
        }
         
      </Grid>
      {console.log(cart)}
      {console.log(count)}
       <Cart cart={cart} setCart={setCart}/>    
    </div>
  );
}
