import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


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
        marginRight: 15, 
    }, 
    marginL: {
        marginLeft: '10%', 
    }, 
    title: {
        marginBottom: 10,
        fontSize: 30,
    } 
  }));

function BoxWelcome() {
    const classes = useStyles();
    const veggie = "veggie";
    const carne = "carne";

  
    return (
        <div>
            <div className ={classes.title}>
                 <h1>Bienvenidos a Doña Matilda</h1>
            </div>
            <div className = {classes.marginL}>
            <NavLink to='/' activeClassName="selected" style={{ textDecoration: 'none' }}>
            <Button className ={classes.marginR} variant="outlined">
               <strong>Todos los productos</strong>
            </Button>
          </NavLink> 
            <NavLink to={`/Productos/${veggie}`} activeClassName="selected" style={{ textDecoration: 'none' }}>
            <Button className ={classes.marginR} variant="outlined">
               <strong>Muy Veggies</strong>
            </Button>
          </NavLink> 
          <NavLink to={`/Productos/${carne}`} activeClassName="selected" style={{ textDecoration: 'none' }}>
            <Button className ={classes.marginR} variant="outlined">
               <strong>Nada Veggies</strong>
            </Button>
          </NavLink> 
          </div>
        </div>
    )
}

export default BoxWelcome
