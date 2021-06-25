import React,  {useEffect, useState} from 'react'
import { useParams } from 'react-router'
// import Item from "./Item";
import {products} from '../Product-data';
import ItemDetail from "./ItemDetail";


function DetailsItem() {
    const {product_id} = useParams ()
    // console.log(product_id);
    // const [detail, setDetail] = useState([])

    // useEffect(()=>  {
    //     fetch( "https://fakestoreapi.com/products")
    //     .then((res)=>res.json())
    //     .then((res)=>{setDetail(res[product_id-1])})
    // },[])
    console.log(products[product_id]);

    return (
        
        <div>
            <ItemDetail prod ={products[product_id]}/> 
        </div>
    )
}

export default DetailsItem

