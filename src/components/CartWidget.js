import React from 'react'
// import image from "./assets/delivery-man.svg";

function CartWidget(props) {
    return (
        <div>
            <img src={props.img} alt="" width="50" height="50"></img>
        </div>
    )
}

export default CartWidget
