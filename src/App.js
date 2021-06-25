import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import CheckOutPage from './components/CheckOutPage';
import CheckOutCard from './components/CheckOutCard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <CheckOutPage/> */}
      {/* <CheckOutCard/>  */}
       <ItemListContainer/>
      {/* <ItemList/> */}
    </div>
  );
}

export default App;
