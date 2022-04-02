import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import './components/style.css';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting = "Tienda de Ropa"/>
      <ItemDetailContainer />
    </>
  );
}

export default App;
