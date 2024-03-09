import React from 'react'
import { useState } from 'react'

export default function Textform() {
  const [text,settext]=useState("");

  const y1=((event)=>{
 settext(event.target.value)
 
  });

  const cpaitalize=(()=>{
    settext(text.toUpperCase());
  })
  const decpaitalize=(()=>{
    settext(text.toLowerCase());
  })
  const Ctext=(()=>{
    settext('');
  })
  const RWspace=(()=>{
    settext(text.trim());
  })

  const cp=(()=>{
    navigator.clipboard.writeText(text);
  })
  return (
    <div>
      <div className="form-floating">
  <textarea className="form-control my-3 mx-auto border border-warning" placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={y1} style={{height: "160px", width:"1000px"}}></textarea>

 <div className="d-flex justify-content-center">
 <p className="mx-2"> Word Count : {text.split(" ").filter((element)=>{return element.length>0}).length}</p>
<p className="mx-2"> letter Count : {text.length}</p>


 </div>
 <div className="d-flex justify-content-center">

<p className="mx-2"> Estimated time to read : {text.length*0.08 } seconds </p>

 </div>

  

  
 
</div>

<div  className='d-flex justify-content-center'>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3 " onClick={cp} >Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3"  onClick={cpaitalize}>Capitalize Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={decpaitalize}>LowerCase Text </button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={Ctext}>Clear Text </button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={RWspace}>Remove Extra Spaces </button>
</div>
    </div>
  )
}
