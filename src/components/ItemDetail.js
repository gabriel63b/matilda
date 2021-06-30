import React, {useState} from 'react'
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
import { useCart, useCartUpdate } from '../CartContext';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    action: {
      marginTop: "1rem"
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
    const cart = useCart()
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
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
    return (
        
        <Card className={classes.root}>
          DETALLE DEL PRODUCTO
        <CardHeader
            
            action={
                <Typography
                    className = {classes.action}
                    variant = 'h5'
                    color = 'textSecondary'
                    
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
          {props.prod.description}
        </CardContent>
        <CardActions disableSpacing>
            <ItemCount addItem={addItem} lessItem={lessItem} count={count}/>
           {count > 0 ? (
             <IconButton aria-label="Add to Cart" 
             onClick={() => 
             addToCart(
                 props.prod.id,
                 props.prod.name,
                 count,
                 props.prod.price,
                 props.prod.image,
               )
             }>
              <AddShoppingCart fontsize="large" />
            </IconButton>
           ) : (
            <IconButton aria-label="Add to Cart" disabled>
              <AddShoppingCart fontsize="large" />
            </IconButton>
           )}
            <IconButton aria-label="share">
              <FavoriteIcon/>
            </IconButton>
          </CardActions>
    </Card>
    )
}

export default ItemDetail

