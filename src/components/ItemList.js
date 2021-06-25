import React from 'react';
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
import {products} from '../Product-data';
import humita from '../assets/humita.jpg';
import ItemCount from './ItemCount';

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

const ItemList = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //Función para agregar productos al cart
 
  const addCart = id => {
    
    for (var i = 0; i < props.count; i++) {  
    const product = products.filter ((product) => product.id === id); 
    props.setCart ([...props.cart, ...product])
  }
  props.setCount(0);
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
                ${props.product.price}
            </Typography>
        }
        title={props.product.name}
        subheader="Simplemente las mejores"
      />
      <CardMedia
        className={classes.media}
        image={props.product.image}
        title={props.product.name}
      />
      <CardContent>
        Descripcion de empanada
      </CardContent>
      <CardActions disableSpacing>
        <ItemCount count={props.count} setCount={props.setCount}/>{console.log(props.count)}
        <IconButton aria-label="Add to Cart" onClick={() => addCart(props.product.id)}>
          <AddShoppingCart fontsize="large"/>
        </IconButton>
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
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
          {props.product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ItemList;