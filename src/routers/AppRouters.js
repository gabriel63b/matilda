import React from 'react'
import Home from '../pages/Home'
// import About from '../pages/About'
// import Productos from '../pages/Productos'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
// import FetchApi from '../components/FetchApi';
import DetailsItem from '../components/DetailsItem';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function AppRouters() {
    return (
        <Router>
            <NavBar/>
            {/* <Home/> */}           
            <Switch>
                <Route exact path="/Home" component={Home}></Route>
                {/* <Route path="/About" component={About}></Route>
                <Route path="/Productos" component={Productos}></Route> */}
                <Route exact path="/Login" component={Login}></Route>
                <Route exact path="/Cart" component={Cart}></Route>
                <Route exact path="/Productos/detail/:product_id" component={DetailsItem}></Route>
                <ItemListContainer/>
            </Switch>
        </Router>
    )
}

export default AppRouters
