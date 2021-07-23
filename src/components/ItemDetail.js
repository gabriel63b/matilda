import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { AddShoppingCart } from '@material-ui/icons';
import ItemCount from './ItemCount';
import {  useCartUpdate } from '../CartContext';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      marginLeft: "30%"
    },
    action: {
      textAlign: "center",
    },
    marginL: {
      marginLeft: 10,
      marginRight: 10,
     
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    marginR: {
      marginRight: "30px",
    },
  }));

    

function ItemDetail(props) {
   
    const addToCart = useCartUpdate()
    const classes = useStyles();
  
 
  /*Estado del contador del boton*/
  const [count, setCount] = React.useState(0);
    function addItem(){
        setCount(count +1);
    }
    
    function lessItem(){
       if (count > 0) {
        setCount(count -1);
       }
    }

    function addCartItem(event) {
      event.preventDefault();
      addToCart(
        props.prod.id,
        props.prod.name,
        count,
        props.prod.price,
        props.prod.image,
        );
        setCount(0);
    }
     

    return (
      <Box mx="auto" bgcolor="background.paper"  p={1}>
        <Card className={classes.root}>
              <Typography
                    className = {classes.action}
                    variant = 'h4'  
                    color = 'primary.main'
                >
                       DETALLE DEL PRODUCTO
                </Typography>
        <CardHeader
            
            action={
                <Typography
                    className = {classes.action}
                    variant = 'h3' 
                    color = 'primary'
                >
                    ${props.prod.price}
                </Typography>
            }
            title={props.prod.name}
            subheader="Simplemente las mejores"
        />
        
        <CardMedia
          className={classes.media}
          image={props.prod.image}
          title={props.prod.text}
        />
        <CardContent>
        <Typography
                    className = {classes.action}
                    variant = 'h5'  
                    color = 'primary.main'
                >
                     {props.prod.description}
                </Typography>
          
        </CardContent>
        <CardActions disableSpacing>
            <ItemCount addItem={addItem} lessItem={lessItem} count={count}/>
           {count > 0 ? (
             <IconButton aria-label="Add to Cart" 
             onClick={addCartItem}>
              <AddShoppingCart fontSize="large" />
            </IconButton>
           ) : (
            <IconButton aria-label="Add to Cart" disabled>
              <AddShoppingCart fontSize="large" />
            </IconButton>
           )}
            <IconButton aria-label="share">
              <FavoriteIcon/> 
            </IconButton>
            <NavLink to="/" activeClassName="selected" style={{ textDecoration: 'none' }}>
            <button>
            <Typography
                    className = {classes.marginL}
                    variant = 'h6'  
                    color="textPrimary"
                >
                  Volver por más empanadas
                </Typography>
            </button>
          </NavLink>
          </CardActions>
          
    </Card>
    </Box>
    )
}

export default ItemDetail

