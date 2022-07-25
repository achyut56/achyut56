// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"
function App() {

  const [mode, setMode] = useState("light")

  const toggleMode =()=> {
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#0c0733"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
    <div>
      
      {/* <Navbar title = "RoseMary" home = "Home" about= "About Rosemary"/> */}
      <Navbar title = "RoseMary" home = "Home" about= "About Rosemary" mode ={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading = "Enter the text to analyse" mode ={mode} /> 
      {/* <About/> */}
      </div>
    </div>
    </>
  );
}

export default App;
