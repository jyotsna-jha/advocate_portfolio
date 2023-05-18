import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import Resume from "./routes/Resume";
import {Route, Routes} from "react-router-dom";
import Testimonials from "./components/TestimonialsContent";


function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/resume" element={<Resume/>}/>
      
    </Routes>
    
    
    </>
    
  );
}

export default App;
