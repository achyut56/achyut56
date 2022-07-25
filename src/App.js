// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"
function App() {
  return (
    <div>
      
      <Navbar title = "RoseMary" home = "Home" about= "About Rosemary"/>
      <div className="container my-3">
        <TextForm heading = "Enter the text to analyse" /> 
      {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
