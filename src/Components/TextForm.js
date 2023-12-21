import React, {useState} from "react";

export default function TextForm(props) {
  // for uppercase
  const handleUpClick = ()=>{
    let newText =text.toUpperCase() 
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success");
  }

  // for clear text
  const handleClearText = ()=>{
    let newText =''
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }

  //for lowercase
  const handleDownClick = ()=>{
    let newText =text.toLowerCase() 
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success");
  }

  // for speak
  const speak = () => {
    let msg = new SpeechSynthesisUtterance()
    msg.text = text
    window.speechSynthesis.speak(msg)
    props.showAlert("Speakin!", "success");
  }
  
  // for copy
  const handleCopy = () => {
      var text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text Copied!", "success");
  }

  // for clearing extra spaces
  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed!", "success");
  }

  const handleOnChange = (event)=>{
   // console.log("On Change")
    setText(event.target.value )
  }
  const [text, setText] = useState('');  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
          color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1"  onClick={handleDownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1"  onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-1"  onClick={speak}>Speak Text</button>
      <button className="btn btn-primary mx-1"  onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1"  onClick={handleExtraSpaces}>Delete Extra Spaces from Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Enter Something in the TextBox above to preview it here."}</p>
    </div>
    </>
  );
}