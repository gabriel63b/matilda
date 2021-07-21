import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import Total from './Total';
import { useCart, useCartRemove } from '../CartContext';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
     
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  label: {
    fontWeight: 'bold',
  },
}));




export default function CartPage() {
  const classes = useStyles();
  const cart = useCart()
  const removeItem = useCartRemove()
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
   
        <TableHead>
          <TableRow className={classes.label}>
          
            <TableCell ><Box fontWeight="fontWeightBold" fontSize={18}>PRODUCTO</Box> </TableCell>  
            <TableCell align="center"><Box fontWeight="fontWeightBold" fontSize={18}>CANTIDAD</Box></TableCell>
            <TableCell align="center"><Box fontWeight="fontWeightBold" fontSize={18}>PRECIO UNITARIO</Box></TableCell>
            <TableCell align="center"><Box fontWeight="fontWeightBold" fontSize={18}>TOTAL</Box></TableCell>
            <TableCell align="center"><Box fontWeight="fontWeightBold" fontSize={18}>ELIMINAR</Box></TableCell>
          
          </TableRow>
        
        </TableHead>
    
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.name}>
              <TableCell  component="th" scope="row">
              <Avatar  alt="Remy Sharp" src={item.image} className={classes.large}/><Box fontWeight="fontWeightBold" fontSize={16}>{item.name}</Box>
              </TableCell>
              <TableCell align="center"><Box fontWeight="fontWeightBold" fontSize={16}>{item.quantity}</Box></TableCell>
              <TableCell align="center"><Box fontWeight="fontWeightBold" fontSize={16}>${item.unitPrice}.00</Box></TableCell>
              <TableCell align="center"><Box fontWeight="fontWeightBold" fontSize={16}>${item.totalPrice}.00</Box></TableCell>
              <TableCell align="center">
                <IconButton>
                    <DeleteIcon fontSize="large" onClick={()=>removeItem(item.id)}/> 
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Total/>
    </TableContainer>
  );
}
