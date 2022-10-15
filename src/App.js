import logo from "./logo.svg";
import "./App.css";
import { Products } from "./components/Products";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart /> } />
      </Routes>
    </div>
  );
}

export default App;
