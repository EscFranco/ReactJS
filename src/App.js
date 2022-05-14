//. APPS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//. COMPONENTES
import NavBar from "./components/Navs/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Carrito from "./components/Cart/Carrito";
import PaginaError from "./components/PaginaError";
import CustomProvider from './components/Context/CartContext';
import Form from './components/Form/Form'

function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryName" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<PaginaError />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;