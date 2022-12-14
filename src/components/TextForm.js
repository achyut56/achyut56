import React, {useState}from 'react'



export default function TexForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked"+ Text)
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","success")
    }

    const handleLoClick = ()=> {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case","success")
    }
    const handleCopy = ()=> {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleClearClick =()=> {
        let newText = ""
        setText(newText)
        props.showAlert("text cleared sucessfully","success")
    }

    const handleCaClick = ()=> {
        const arr = Text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() +arr[i].slice(1);
            
        }
        const newText = arr.join(" ");
        setText(newText)

    }
   
    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }

    const [Text, setText] = useState("")
    return (
        <>
        <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value ={Text} onChange = {handleOnChange}id="myBox" rows="8" style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"grey"}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCaClick}>Convert to capitalize</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
            <h1>Your Text Summary</h1>
            <p>{Text.split(" ").length} words and {Text.length} character</p>
            <p>{0.008* Text.split(" ").length} minute read</p>
            <h3>preview</h3>
            <p>{Text.length>0?Text:"Enter some text in above textbox to preview."}</p>

        </div>
        <outlet/>
        </>
  );
}
