import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../components/SignUp';
import Cart from '../pages/Cart'
import NavBar from '../components/NavBar';
import DetailsItem from '../components/DetailsItem';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { CartProvider } from '../CartContext';
import Checkout from '../components/CheckOutForm/Checkout';
import ItemListFilter from '../components/ItemListFilter';

function AppRouters() {
    return (
        <Router>
           <CartProvider>
            <NavBar/>        
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Login" component={Login}></Route>
                <Route exact path="/SignUp" component={SignUp}></Route> 
                <Route exact path="/Cart" component={Cart}></Route>
                <Route exact path="/Checkout" component={Checkout}></Route>
                <Route exact path="/Productos/detail/:product_id" component={DetailsItem}></Route>

                <Route exact path="/Productos/:filter" component={ItemListFilter}></Route>
                
            </Switch>
            </CartProvider>
        </Router>
    )
}

export default AppRouters
