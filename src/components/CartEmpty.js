import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
   
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary"  gutterBottom>
         NO HAY PRODUCTOS AGREGADOS
        </Typography>
        <Typography variant="h4" component="h2" color="textPrimary">
          POR FAVOR REGRESE A LA PAGINA DE PRODUCTOS
        </Typography>
        
        <Typography variant="body2" component="p" m={3}>
         Muchas gracias
          
        </Typography>

        <NavLink to="/" style={{textDecoration: 'none', textAlign: 'center'}}>
        <Typography variant="h5" component="p" m={3}>Volver a comprar</Typography>
          </NavLink>
      </CardContent>
      <CardActions>
            
      </CardActions>
    </Card>
  );
}
