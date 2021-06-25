import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {products} from '../Product-data';
import ItemList from './ItemList';
import Typography from '@material-ui/core/Typography';
import CheckOutCard from './CheckOutCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CheckOutPage = () => {
  const classes = useStyles();

  function FormRow () {
      return (
          <React.Fragment>
                { 
                products.map((product, index)=>{ return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <CheckOutCard key={product.id} product={product}/>
                </Grid>
                ) })} 
           </React.Fragment>
      );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
          Carrito de Compras
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}> 
         <FormRow/>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
         Total
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default CheckOutPage