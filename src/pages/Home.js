import React from 'react'
import ItemListContainer from '../components/ItemListContainer';
import { makeStyles } from '@material-ui/core/styles';
import BoxWelcome from '../components/BoxWelcome';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom:"7rem",
    },
    appBar:{
      backgroundColor: "#DEB887",
      boxShadow:"none",
    },
    grow: {
      flexGrow:1,
    },
    button: {
      spacing: 8,
      marginLeft: theme.spacing(3),
    },
    image: {
      marginRight: "10px",
      height: "4rem",
    },
    marginR: {
        marginLeft: '25%', 
    } 
  }));

function Home() {
    const classes = useStyles();

    return (
        <div>
            <div className ={classes.marginR}>
                <BoxWelcome/>
            </div>
            <ItemListContainer/>
        </div>
    )
}

export default Home
