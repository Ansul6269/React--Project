import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

function Itemlist(props) {

  
  return (
    <>
    <div className="todo_style">
      <p className="icon" onClick={()=>{
        props.onSelect(props.id)
      }}><AiFillCloseCircle/></p> 
     <li>{props.text}</li>
    </div>
    </>
  )
}

export default Itemlist