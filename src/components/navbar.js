import React,{useState} from 'react'
import PropTypes from 'prop-types'
import About from './About'
import {BrowserRouter as Router, Routes,Link, Route} from 'react-router-dom';
import Home from './Home';




export default function Navbar(props){
const [darkmode, setdarkmode]=useState(false);


const toggleMode=(()=>{
  if(!darkmode){
    document.body.style.backgroundColor="rgb(3 12 50)";
    document.body.style.color="white";

  }
  else{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";

  }
  setdarkmode(!darkmode);
});


    return (

      <>
      
      
     
      <Router>

      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
         
            <li className="nav-item">
             
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/">Pricing</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={toggleMode} />
  <label className="form-check-label" for="flexSwitchCheckChecked" style={{color:'Black'}}> Dark Mode</label>
</div>
      </div>
    </nav>


    <Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/'/>
</Routes>
    </Router>

    </>
    )
}

Navbar.propTypes={title:PropTypes.string.isRequired,
about:PropTypes.string}

Navbar.defaultProps={
  title:"Set Your title here"
};