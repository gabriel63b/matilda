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
import Box from '@material-ui/core/Box';

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


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.button} color="inherit" aria-label="menu">
           <img src = {Logo} className={classes.image}/>
          </IconButton>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
            Hola usuario
          </Typography>
          <div className={classes.button}>
            <Button className ={classes.marginR} variant="outlined">
               <strong>Login</strong>
            </Button>
            <Badge className ={classes.marginR} badgeContent={4} color="secondary"> 
            <CartWidget img={image}> </CartWidget>
            </Badge>
           
      
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
