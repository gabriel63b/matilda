import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardItem from './CardItem';
import { useItems} from '../CartContext';
import { useParams } from 'react-router';
import BoxWelcome from './BoxWelcome';

const useStyles = makeStyles((theme) => ({
    marginR: {
        marginLeft: '25%', 
    } 
  }));

const ItemListFilter = () => {
    const classes = useStyles();
    const items = useItems ();
    const {filter} = useParams ()

  return (
    <div>
        <div className ={classes.marginR}>
                <BoxWelcome/>
        </div>
      <Grid container spacing={3}>
       
      {
      items.map((product) => {
          if (filter === product.group) {
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
      )}}
      )}
      </Grid> 
    </div>
  );
}

export default ItemListFilter;