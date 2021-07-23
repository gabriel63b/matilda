import React, { useState } from 'react';
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
import { NavLink } from 'react-router-dom';
import { useCart, totalItems, useUser, useLoadUser } from '../CartContext';
import swall from 'sweetalert';
import { auth } from '../firebase';

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
  const cart = useCart()
  const user = useUser()
  const LoadUser = useLoadUser();
  const [to, setTo] = useState("/");
  
  /*Comprueba si el carrito está vacio, envia alerta y no nos lleva a la pagina de carrito si está vacio*/
  const CartEmpty = () => {
    
    let aux = "/Cart";
    if (cart.length === 0) {
      aux = "/";
      swall({
        title: "Todavia no hay productos agregados",
        icon: "warning",
        timer : "1500",
      })
    } 
    setTo(aux);
    return aux;
  }

  /*Cierra sesion de usuario*/
  const handleAuth = () => {
    if (user){
      auth.signOut();
      LoadUser(null);
    }
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <NavLink to="/" activeClassName="selected">
          <IconButton edge="start" className={classes.button} color="inherit" aria-label="menu">
           <img src = {Logo} className={classes.image}></img>
          </IconButton>
          </NavLink>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
            
            Hola {user ? user : "usuario"}  {/* Si hay usuario, lo escribe y coloca el email sino "usuario" */}

          </Typography>
          <div className={classes.button}>
          <NavLink to="/Login" activeClassName="selected" style={{ textDecoration: 'none' }}>
            <Button className ={classes.marginR} variant="outlined" onClick = {handleAuth}>
               <strong>{user ? "CERRAR SESION" : "Login"}</strong>
            </Button>
          </NavLink> 
            <Badge className ={classes.marginR} badgeContent={totalItems(cart)} color="secondary"> 
             <NavLink onClick = {CartEmpty} to={to}><CartWidget img={image}></CartWidget></NavLink>
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
