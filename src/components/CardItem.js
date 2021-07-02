import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import humita from '../assets/humita.jpg';
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

  
function CardItem(props) {
    const addToCart = useCartUpdate()
    const cart = useCart()
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  
  /*Estado del contador del boton*/
  const inicialCount =0;
  const [count, setCount] = React.useState(inicialCount);
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
          
        <CardHeader
            action={
                <Typography
                    className = {classes.action}
                    variant = 'h5'
                    color = 'textSecondary'
                >
                    ${props.price}
                </Typography>
            }
            title={props.title}
            subheader="Simplemente las mejores"
        />
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.text}
        />
        <CardContent>
          <Link to={`/Productos/detail/${props.productId}`}>Descripcion</Link>
        </CardContent>
        <CardActions disableSpacing>
            <ItemCount addItem={addItem} lessItem={lessItem} count={count}/>
           {count > 0 ? (
            <IconButton aria-label="Add to Cart" 
            onClick={() => 
            addToCart(
                props.productId,
                props.title,
                count,
                props.price,
                props.image,
              )
            }>
              <AddShoppingCart fontsize="large"  />
            </IconButton>
           ) : (
            <IconButton aria-label="Add to Cart" disabled>
              <AddShoppingCart fontsize="large" />
            </IconButton>
           )}
            <IconButton aria-label="share">
              <FavoriteIcon/>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
            <ExpandMoreIcon/>
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
              {props.text}
              </Typography>
            </CardContent>
          </Collapse>
    </Card>
    )
}

export default CardItem

// onClick={() => addCart(props.product.id)}