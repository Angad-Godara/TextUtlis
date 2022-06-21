import React, { useState } from 'react'

function TextForm({ title }) {

    const [text, settext] = useState('');

    const handleuppercase = () => {
        settext(text.toUpperCase())
    }

    const handlelowercase = () => {
        settext(text.toLowerCase())
    }

    const handleExtraspaces = () => {
        let newtext = text.split(/[ ] + /); /// --> jhan pr bhi ek ya ek se zyada spaces hongi this logic will spit those elements into an array
        settext(newtext.join(" "));
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleclear = () => {
        settext('')
    }

    return (
        <>
            <div className='container my-3'>
                <h2>{title}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder='Enter your text here' id="mybox" rows="8" onChange={e => settext(e.target.value)}></textarea>
                </div>
                <div className='d-flex'>
                    <button type="button" onClick={handleuppercase} className="btn btn-primary mx-3">Convert to Uppercase</button>
                    <button type="button" onClick={handlelowercase} className="btn btn-primary mx-3">Convert to Lowercase</button>
                    <button type="button" onClick={handleExtraspaces} className="btn btn-primary mx-3">Remove Extra Spaces</button>
                    <button type="button" onClick={handleCopy} className="btn btn-success mx-3">Copy Text</button>
                    <button type="button" onClick={handleclear} className="btn btn-danger mx-3">Clear text</button>
                </div>
            </div>
            <div className='container'>
                <h2>Your text summary...</h2>
                <p>It contains {text.split(" ").length} and {text.length} characters</p>
                <p>You can read it in approximately {(0.008 * text.split(" ").length)} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm