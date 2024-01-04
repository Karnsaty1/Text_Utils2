import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Textform from './components/Textform';
import Home from './components/Home';
import Alert from './components/Alert';
import { useState } from 'react';
import Color from './components/Color';

import {BrowserRouter as Router ,
Routes,
Route,
Link}
from "react-router-dom";


export default function App(){
 return(
<>
<Router>
           <Routes>
            <Route path="/home" element={<Home/>}></Route>
           </Routes>
           </Router>
<Navbar/>
<Textform/>

</>
  );
}