
import React from "react";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./Component/About";
import Blogs from "./Component/Blogs";
import Contact from "./Component/Contact";
import Projects from './Component/Projects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <About />
        <Service />
        <Contact /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
