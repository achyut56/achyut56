// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too


function App() {

  const [mode, setMode] = useState("light")

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=> {
      setAlert(null);
     } , 3000) 

  }

  const toggleMode =()=> {
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#0c0733"
      showAlert("Dark mode is enabled", "success");
      document.title = "textutils - Dark Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled","success");
      document.title = "textutils - light Mode"
    }
  }

  return (
    <>
    <BrowserRouter>
    
      {/* <Navbar title = "RoseMary" home = "Home" about= "About Rosemary"/> */}
      <Navbar title = "Textutils" home = "Home" about= "About" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
        <Route path="/"  element={<TextForm heading = "Enter the text to analyse" mode ={mode} showAlert={showAlert}/> }/>
          <Route path="/About"  element={<About />} >
          
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
