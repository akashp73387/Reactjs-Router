import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Skills from "./Pages/Skills";
import PageNotFound from "./Pages/PageNotFound";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path='*' element={<PageNotFound/>}/>


          {/* Dynamic routing */}
          <Route path="/products/:id" element={<ProductDetails />} />


          {/*nested routing */}
          <Route path="/about" element={<About />}>
          <Route path="skills" element={<Skills />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
