import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  withRouter 
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import RestoDuCoeur from "./views/RestoDuCoeur";
import Admin from "./views/Admin";
import CroixRouge from "./views/CroixRouge";
import Konexio from "./views/konexio";

function App() {


  useEffect(() => {
    //
  }, []);

  return (
    <BrowserRouter>
        <Navbar></Navbar>

        <Routes> 
              <Route exact path="/" element={<Home/>}/>                                       
              <Route path="/restau-du-coeur" element={<RestoDuCoeur/>}/>                                       
              <Route path="/la-croix-rouge" element={<CroixRouge/>}/>                                       
              <Route path="/konexio" element={<Konexio/>}/>                                       
              <Route path="/admin" element={<Admin/>}/>                                       
        </Routes>    
    </BrowserRouter>
  );
}

export default App;
