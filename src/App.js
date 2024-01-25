import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Itemlist from './Itemlist';

function App() {
  const [inputlist, setinputlist]=useState("");
  const [items ,setitems]=useState([])

const listofitem=()=>{
  setitems((olditems)=>{
    return [...olditems, inputlist];
  })
  setinputlist("")
}

function deleteitem(id){
  setitems((olditems)=>{
    return olditems.filter((arrElement, index)=>{
      return index !== id;
    })
  })
}
  
  
   
  return (
    <div className="App">
      <div className="main-div">
          <div className="center_div">
              <br></br>
              <h1>Todo list</h1>
              <br></br>
              <input type="text" placeholder="Add Items" value={inputlist}onChange={(event)=>setinputlist(event.target.value)}/>
              <button onClick={listofitem}> + </button>
              <ol>
                { items.map((itemvalue,index)=>{
                 return <Itemlist 
                 key={index} 
                 id={index} 
                 text ={itemvalue}
                 onSelect={deleteitem} />
                })                  
                }
              </ol>
          </div>
      </div>
    </div>
  );
}

export default App;
