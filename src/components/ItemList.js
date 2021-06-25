import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {products} from '../Product-data';
import CardItem from './CardItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3), 
  },
}));
// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   action: {
//     marginTop: "1rem"
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   marginR: {
//     marginRight: "30px",
//   },
// }));

const ItemList = () => {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

// /*Estado de productos*/ 
const [data, setData] = useState([]);
  let miPromesa = new Promise((resolve, reject) => {  
  setTimeout(function(){
    const error = Math.random() > 1;
    if(!error){      
      resolve(products);  
    }
    reject("Error obteniendo los datos :(");
    }, 2000);
  });  

  miPromesa.then((data) => {setData(data)})
  .catch(
    function(error){
      console.log(error);
  }).finally(
      function(){
     }
   )
  

  return (
    <div>
      <Grid container spacing={3}>
      {console.log(data)}
      {
      data.map((product, index)=>{ return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardItem 
          key={product.id}  
          title={product.name}
          text={product.description}
          price={product.price}
          image={product.image}
          productId={product.id}
      />
      </Grid> 
      )}
      )}
      </Grid>
    </div>
  );
}

export default ItemList;