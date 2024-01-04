import React,{useState} from 'react';

import App from '../App';


export default function Color(props) {

    const[blue,setblue]=useState(false);
   

   

  
  const style=()=>{
    if(blue){

      document.body.style.backgroundColor='blue';
       document.body.style.color='black';
       
    }

    else{

      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    setblue(!blue);
   
    
   
  }

  return (
    <>
    
      <App alert={blue?'Blue Mode is activated':'Bright Mode is activated'}/>
    <div>
      <button className='btn btn-info' onClick={style} >{blue?'Blue Mode':'Bright Mode'}</button>
    </div>
    </>
  )
}
