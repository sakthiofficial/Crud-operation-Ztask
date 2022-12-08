import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Create } from './Create';
import { Update } from './Update';
import React, { useState } from 'react';
import { Edit } from './Edit';






function App() {








 
  
  
 

  return (
    <div className="App">
      {/* <Link to="/create">create</Link> */}
    
      <BrowserRouter>
      <ul>
     <li> <Link to="/">Home </Link></li> 
      <li><Link to="/create">Create </Link></li>
     <li><Link to="/edit">Read </Link></li>
     <li><Link to="/edit">Update </Link></li>

      <li><Link to="/edit">Delete </Link></li>
      
      </ul>

      <Routes>

      < Route path="/create" element={<Create/>} />
      < Route path="/" element={<Home/>} />

      < Route path="/update/:id" element={<Update/>} />
      < Route path="/edit" element={ <Edit/>} />
      </Routes>
      </BrowserRouter>
     
     {/* <GetSlides/> */}
     
    </div>
  );
}
function Home(){
  return(
    <div>
    <div className="user-img">
    <img src="https://img.freepik.com/free-vector/worldwide-connection_53876-90449.jpg?w=996&t=st=1670494996~exp=1670495596~hmac=fbeee89de7fdd85d730436d73aa362c10e878c0dd905a7c4512fbb52cd921d99" alt="" />

    </div>
    </div>
  )
}
export default App;
