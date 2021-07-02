import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../assets/Logo.png';
import CartWidget from "./CartWidget";
import image from "../assets/delivery-man.svg";
import { Badge } from '@material-ui/core';
import {Link, NavLink } from 'react-router-dom';
import { useCart, useCartUpdate, useCartItemTotal } from '../CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:"7rem",
  },
  appBar:{
    backgroundColor: "#DEB887",
    boxShadow:"none",
  },
  grow: {
    flexGrow:1,
  },
  button: {
    spacing: 8,
    marginLeft: theme.spacing(3),
  },
  image: {
    marginRight: "10px",
    height: "4rem",
  },
  marginR: {
      marginRight: "30px", 
  } 
}));

export default function NavBar() {
  const classes = useStyles();
  const addToCart = useCartUpdate()
  const cart = useCart()
  const quant = useCartItemTotal()

  console.log(cart)
  console.log(quant)
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <NavLink to="/" activeClassName="selected">
          <IconButton edge="start" className={classes.button} color="inherit" aria-label="menu">
           <img src = {Logo} className={classes.image}/>
          </IconButton>
          </NavLink>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
            Hola usuario
          </Typography>
          <div className={classes.button}>
          <NavLink to="/Login" activeClassName="selected">
            <Button className ={classes.marginR} variant="outlined">
               <strong>Login</strong>
            </Button>
          </NavLink> 
            <Badge className ={classes.marginR} badgeContent={quant} color="secondary"> 
             <NavLink to="/Cart" ><CartWidget img={image}> </CartWidget></NavLink>
            </Badge>
           
      
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
