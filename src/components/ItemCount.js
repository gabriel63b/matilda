import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    marginR: {
        marginRight: "30px",
      },
  }));

export default function ItemCount(props) {
    const classes = useStyles();
    

        return (
            <div className={classes.root}>
                <ButtonGroup>
                    <Button variant="outlined" color="secondary" className={classes.marginR} onClick={props.lessItem}> - </Button>
                    <h3> {props.count} </h3>
                    <Button variant="outlined" color="secondary" onClick={props.addItem}>+ </Button>
                </ButtonGroup>
            </div>        
    )
}
