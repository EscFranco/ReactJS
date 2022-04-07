//. CSS
import './components/style.css';
//. APPS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//. COMPONENTES
import NavBar from "./components/Navs/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Carrito from "./components/Cart/Carrito";
import PaginaError from "./components/PaginaError";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:categoryName" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="*" element={<PaginaError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
