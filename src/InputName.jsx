import React, { useState } from "react";
import { Button } from "react-bootstrap";

function InputName( {setName}) {
    const[name, setInputName]= useState(null)
  return (
    <div style={{margin:"10%"}}>
      Enter you Crush Name
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Crush Name"
          aria-label="Crush Name"
          aria-describedby="basic-addon1"
          onChange={(e)=>{setInputName(e.target.value)}}
        />
      </div>
      <Button variant="primary" onClick={(e)=>{setName(name)}}>Submit!</Button>
    </div>
  );
}

export default InputName;
