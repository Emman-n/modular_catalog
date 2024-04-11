import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import NewCat from './NewCat'
import Details from './Details'
import NewProd from './NewProd'
import CategorieS from './CategorieS'
import EditCat from './EditCat'
import EditProd from './EditProd'
import Navbar from "./Navbar";
 
  // import Testhome from './Testhome'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";




function App() {
  return (
  
  <div>
 

     
          <BrowserRouter>
          <Navbar/>
          <Routes>
       
            <Route path="/" element={<Home/>}/>
            <Route path="/NewCat" element={<NewCat/>}/>
            <Route path="/NewProd/:id"element={<NewProd/>}/>
            <Route path="/Details/:id" element={<Details/>}/>
            <Route path="/CategorieS/:id" element={<CategorieS/>}/>
            <Route path="/EditCat/:id" element={<EditCat/>}/>
            <Route path="/EditProd/:id" element={<EditProd/>}/>
            {/* <Route path="/Testhome" element={<Testhome/>}/> */}

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
