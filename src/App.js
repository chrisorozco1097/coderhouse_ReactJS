import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.js";
import { ItemListContainer } from './components/ItemListContainer.jsx';
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";
import { NavBar } from "./components/NavBar.jsx"
import { CartProvider } from "./contexts/CartContext.jsx";

function App() {
  return ( 
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Goodmorning" />} ></Route>
          <Route path="/category/:id" element={<ItemListContainer/>} ></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
