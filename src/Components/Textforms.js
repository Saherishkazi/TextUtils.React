import React from "react";
import { useState } from "react";


export default function Textforms(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = Text.toLocaleLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleUndoClick = () => {
    let newText = Text.slice(0, -1);
    setText(newText);
  };

  function handleCopyClick() {
    const textToCopy = Text;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

const handleExtraSpaces = ()=>{
    let newText = Text.split(/[ ] + /);
    setText(newText.join(" "))
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleColorChange = (event) => {
    setText(event.target.value);
  };
  const [Text, setText] = useState("Enter text here");
 
 
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h2 className="mb-4 text-center">{props.heading}</h2>
      <div className="mb-3" >
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>


      

      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-2 "onClick={handleDownClick}>Conver to lowercase</button>
      <button className="btn btn-danger mx-2 "onClick={handleClearClick}>Clear</button>
      <button className="btn btn-secondary mx-2 "onClick={handleUndoClick}>Undo</button>
      <button className="btn btn-success mx-2 "onClick={handleCopyClick}>Copy</button>
      <button className="btn btn-warning mx-2 "onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
     <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h3>📝 Your Text Summary</h3>
        <p><strong>{Text.split(/\s+/).filter((el) => el.length !== 0).length}</strong> words, <strong>{Text.length}</strong> characters</p>
        <p>⌛ <strong>{0.008 * Text.split(" ").filter((el) => el.length !== 0).length}</strong> minutes to read</p>

        <h3 className="mt-4">🔍 Preview</h3>
        <div className="preview-box p-3 rounded shadow-sm" style={{
          backgroundColor: props.mode === 'dark' ? '#1c2c3c' : '#f8f9fa',
          minHeight: '100px',
          transition: 'all 0.3s ease'
        }}>
          <p>{Text.length > 0 ? Text : "Nothing to preview!"}</p>
        </div>
      </div>

</>
  );


}