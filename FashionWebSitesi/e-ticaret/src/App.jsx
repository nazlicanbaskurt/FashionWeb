import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./Pages/ContactPage";
import Auth from "./components/Auth/Auth";
import CartPage from "./Pages/CartPage";
import BlogPage from "./Pages/BlogPage";
import SingleBlog from "./components/Blog/SingleBlog";
import "./App.css";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/singlepage" element={<SingleBlog />} />
        <Route path="/productdetail/:id" element={<ProductDetailsPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
