import React from 'react'
import ItemListContainer from '../components/ItemListContainer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
        marginRight: "30px", 
    } 
  }));

function Home() {
    const classes = useStyles();
    return (
        <div className ={classes.marginR}>
            <h1>Bienvenidos a Doña Matilda</h1>
            <NavLink to="/Login" activeClassName="selected" style={{ textDecoration: 'none' }}>
            <Button className ={classes.marginR} variant="outlined">
               <strong>Todos los productos</strong>
            </Button>
          </NavLink> 
            <NavLink to="/Login" activeClassName="selected" style={{ textDecoration: 'none' }}>
            <Button className ={classes.marginR} variant="outlined">
               <strong>Veggies</strong>
            </Button>
          </NavLink> 
          <NavLink to="/Login" activeClassName="selected" style={{ textDecoration: 'none' }}>
            <Button className ={classes.marginR} variant="outlined">
               <strong>Mucha carne</strong>
            </Button>
          </NavLink> 
                <ItemListContainer/>
            
        </div>
    )
}

export default Home
