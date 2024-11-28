import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="p-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path=":productsID" element={<ProductDetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
