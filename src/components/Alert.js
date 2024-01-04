import React, {useEffect, useState} from 'react';

export default function Alert(props){

  const [alert, setalert]=useState(null);
 useEffect(()=>{
    setalert(props.alert);

     setTimeout(() => {
      setalert(null);
     }, 2000);
  },[props.alert])
  return (
<div class="alert alert-warning alert-dismissible fade show" role="alert" >
  <strong>{alert}</strong> 
  
</div>

  );
}