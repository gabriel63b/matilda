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

export default function ItemCount({count, setCount}) {
    const classes = useStyles();
    // const [count, setCount] = React.useState(0);
    function aumentarContador(){
        setCount(count +1);
    }
    
    function disminuirContador(){
       if (count > 0) {
        setCount(count -1);
       }
    }

        return (
            <div className={classes.root}>
                <ButtonGroup>
                    <Button variant="outlined" color="secondary" className={classes.marginR} onClick={disminuirContador}> - </Button>
                    <h3> {count} </h3>
                    <Button variant="outlined" color="secondary" onClick={aumentarContador}>+ </Button>
                </ButtonGroup>
            </div>        
    )
}
