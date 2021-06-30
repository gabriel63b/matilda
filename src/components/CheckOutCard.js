import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCart, useCartUpdate, useCartRemove } from '../CartContext';

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
}));

export default function CheckOutCard(props) {
    const addToCart = useCartUpdate()
    const removeItem = useCartRemove()
    const cart = useCart()
    
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      
      <CardActions disableSpacing>
      <IconButton>
        <DeleteIcon fontSize="large" onClick={()=>removeItem(props.product.id)}/> 
      </IconButton>
      </CardActions>
    </Card>
  );
}

