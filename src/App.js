import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.js";
import { ItemListContainer } from './components/ItemListContainer.jsx';
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";
import { NavBar } from "./components/NavBar.jsx"
import { CartProvider } from "./contexts/CartContext.jsx";
import { Cart } from "./components/Cart.jsx";

function App() {
  return ( 
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Goodmorning" />} ></Route>
          <Route path="/category/:id" element={<ItemListContainer/>} ></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
