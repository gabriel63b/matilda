import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartPage from './CartPage';
import Typography from '@material-ui/core/Typography';
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
  
 return (
    <div className={classes.root}>
      <Typography align="center" gutterBottom variant="h3">Resumen de compra</Typography>
      <Box display="flex" justifyContent="center" border={3} borderColor="#DEB887" boxShadow={3}>
        <CartPage/>
      </Box>
    </div>
  );
}

export default CheckOutPage