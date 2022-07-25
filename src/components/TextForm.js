import React, {useState}from 'react'


export default function TexForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked"+ Text)
        let newText = Text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=> {
        let newText = Text.toLowerCase();
        setText(newText)
    }
    const handleCopy = ()=> {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleClearClick =()=> {
        let newText = ""
        setText(newText)
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
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value ={Text} onChange = {handleOnChange}id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCaClick}>Convert to capitalize</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
            
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{Text.split(" ").length} words and {Text.length} character</p>
            <p>{0.008* Text.split(" ").length} minute read</p>
            <h3>preview</h3>
            <p>{Text}</p>

        </div>
        </>
  );
}
