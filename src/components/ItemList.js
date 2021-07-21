import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardItem from './CardItem';
import { useItems, useLoadItems } from '../CartContext';
import * as firebase from 'firebase';
import 'firebase/firestore'
import {getFirestore, storage } from '../firebase'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3), 
  },
}));

const ItemList = () => {
  const LoadItems = useLoadItems();
  const items = useItems ();
  const [loading, setLoading] = useState([]);

  LoadItems();
  console.log(items);
 

  
  return (
    <div>
      <Grid container spacing={3}>
      
      {
      items.map((product)=>{
        return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardItem 
          key={product.id}  
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