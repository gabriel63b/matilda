import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemList from './ItemList';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3), 
  },
}));

export default function ItemListContainer() {
  const classes = useStyles();

     
  return (
    <div className={classes.root}>
       <ItemList/>
    </div>
  );
}
