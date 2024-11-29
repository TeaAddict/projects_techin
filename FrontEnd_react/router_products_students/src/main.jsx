import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Contact from "./components/Contact.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import App from "./App.jsx";
import Categories from "./components/Categories.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Categories />}>
            <Route path=":category" element={<Products />} />
          </Route>
          <Route
            path="products/:category/:productID"
            element={<ProductDetails />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
