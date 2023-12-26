import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState('');
    const handleUpClick = ()=>{
       // console.log("Upper case was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleloClick = ()=>{
        // console.log("Upper case was clicked "+text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to LowerCase","success");
     }
    
     const handleClearClick = ()=>{
        // console.log("Upper case was clicked "+text);
         let newText = " ";
         setText(newText);
         props.showAlert("Text has been cleared","success");
     }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed","success");
    }
   
    
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>

        <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to LowerCase</button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Space</button>

    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text above to preview it here"}</p>
    </div>
    </>
  )
}
