import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Connect from "./pages/Connect";
import Error from "./pages/Error";

function App() {
  return (  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/connect" element={<Connect />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
