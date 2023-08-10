import "./App.js";
import { ItemListContainer } from './components/ItemListContainer.jsx';
import { NavBar } from "./components/NavBar.jsx"

function App() {
  return (
    <>
        <NavBar />
        <ItemListContainer greeting="Goodmorning" />
    </>
  );
}

export default App;
