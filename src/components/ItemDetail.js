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
import {products} from '../Product-data';
import { Link } from 'react-router-dom';
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

  
function ItemDetail(props) {
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
            title={props.title}
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
            <IconButton aria-label="Add to Cart" >
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

export default ItemDetail

// onClick={() => addCart(props.product.id)}