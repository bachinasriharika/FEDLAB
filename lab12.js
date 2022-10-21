import React,{useState,useEffect} from 'react';
const Windowwidth=()=>{
    const [WindowWidthsize,setWindowwidthsize]=useState(0);
    useEffect(()=>{
        function handleResize(e){
            const{width}=document.body.getBoundingClientRect();
            setWindowwidthsize(Math.ceil(width));
        }
        window.addEventListener('resize',handleResize);
        return()=>window.removeEventListener('resize',handleResize);
    },[]);
    return(
        <h1>
            The window size {WindowWidthsize} Pixels
        </h1>
    )
    }
export default
------------
import Windowwidth from "./Windowwidth.js";
  function App() {
    return(
   <div>
    <Windowwidth/>
   </div>
    )
  }
export default App;
