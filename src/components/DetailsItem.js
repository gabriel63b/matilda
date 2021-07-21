import React  from 'react'
import { useParams } from 'react-router'
import ItemDetail from "./ItemDetail";
import { useItems} from '../CartContext';


function DetailsItem() {
    const {product_id} = useParams ()
    const items = useItems()
    
    /* Hace coincidir los id, del parametro con el producto */
    const aux = items.find((item) => item.id == product_id);
   

    return (
        <div>
            <ItemDetail prod ={aux}/> 
        </div>
    )
}

export default DetailsItem

