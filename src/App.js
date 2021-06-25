import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import CheckOutPage from './components/CheckOutPage';
import CheckOutCard from './components/CheckOutCard';
import AppRouters from './routers/AppRouters'

function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      {/* <CheckOutPage/> */}
      {/* <CheckOutCard/>  
       <ItemListContainer/> */}
       <AppRouters/>
      {/* <ItemList/> */}
    </div>
  );
}

export default App;
