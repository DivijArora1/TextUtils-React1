import React, {useState} from 'react'


export default function TextForm(props) {
    const handelUpClick=()=>{
        // console.log('Upper case was clicked'+text)
        let newText = text.toUpperCase()
        setText(newText)
        // setText("You have clicked on handelUpclick")
        props.showAlert("Coveerted to uppercase" ,"success")
    }
    const handelLoClick=()=>{
        // console.log('Upper case was clicked'+text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Coveerted to LowerCase" ,"success")

        // setText("You have clicked on handelUpclick")
    }
    const cleartext=()=>{
        let newText = ('')
        setText(newText)
        props.showAlert("Your text is cleared" ,"success")

    }
    const handelCopy =()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Your text is copied to clip board" ,"success")

    }

    const handelExtraSpaces=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed succesfully" ,"success")

    }

    const handelOnChange=(event)=>{
        // console.log('On change')
        setText(event.target.value)
    }
 const [text, setText] = useState('')
  return (
      <>
    <div className='container'>
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows={8} />
        </div>
          <button className="btn btn-primary mx-1" onClick={handelUpClick}>Covert to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handelLoClick}>Covert to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={cleartext}>Clear text</button>
          <button className="btn btn-primary mx-1" onClick={handelCopy}>Copy text</button>
          <button className="btn btn-primary mx-1" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length }Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text box above to preview it" }</p>
        </div>
      </>
  ) 
}
