import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {products} from '../Product-data';
import CardItem from './CardItem';
import * as firebase from 'firebase';
import 'firebase/firestore'
import {getFirestore } from '../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3), 
  },
}));

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db =  getFirestore();
    const data = db.collection("items");

    data.get().then((querySnapshot) => {
     if (querySnapshot.size === 0) {
       console.log ('No results');
     }
     setItems (querySnapshot.docs.map(doc => doc.data()))
    }). catch ((error) => {
      console.log ("Error searching items", error);
    }).finally (() => {
      setLoading(false);
    })
  }, [])

  console.log(items);
// /*Estado de productos*/ 
// const [data, setData] = useState([]);
//   let miPromesa = new Promise((resolve, reject) => {  
//   setTimeout(function(){
//     const error = Math.random() > 1;
//     if(!error){      
//       resolve(products);  
//     }
//     reject("Error obteniendo los datos :(");
//     }, 2000);
//   });  

//   miPromesa.then((data) => {setData(data)})
//   .catch(
//     function(error){
//       console.log(error);
//   }).finally(
//       function(){
//      }
//    )
  
  return (
    <div>
      <Grid container spacing={3}>
      {console.log(items)}
      {
      items.map((product, index)=>{ return (
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