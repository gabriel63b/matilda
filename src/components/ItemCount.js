import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    marginR: {
        marginRight: "10px",
        fontSize: '15px',
      },
  }));

export default function ItemCount(props) {
    const classes = useStyles();
    
        return (
            <div className={classes.root}>
                
                    <Button variant="outlined" size="small" color="secondary" className={classes.marginR} onClick={props.lessItem}> <RemoveIcon></RemoveIcon> </Button>
                    <h3> {props.count} </h3>
                    <Button variant="outlined" size="small" color="secondary" onClick={props.addItem}> <AddIcon/> </Button>
                
            </div>        
    )
}
