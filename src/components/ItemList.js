import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from './CardItem';
import { useItems, useLoadItems } from '../CartContext';


const ItemList = () => {
  const LoadItems = useLoadItems();
  const items = useItems ();
  

  LoadItems();
  
  return (
    <div>
      <Grid container spacing={3}>
      
      {
      items.map((product)=>{
        return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardItem 
          id={product.id}  
          title={product.name}
          text={product.description}
          price={product.price}
          image={product.image}
          productId={product.id}
      />
      </Grid> 
      )}
      )}
      </Grid> 
    </div>
  );
}

export default ItemList;