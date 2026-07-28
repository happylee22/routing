import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Aboutus from "./components/pages/aboutus";
import Nav from "./components/pages/nav";
import Menu from "./components/pages/Menu";
import Contact from "./components/pages/contact";
import ProductCatalogueDemo from "../../ProductCatalogueDemo";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
