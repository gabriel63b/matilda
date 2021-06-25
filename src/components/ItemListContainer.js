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

     
  return (
    <div className={classes.root}>
       <ItemList />
      {/* {console.log(cart)}
      {console.log(count)}
       <Cart cart={cart} setCart={setCart}/>     */}
    </div>
  );
}
