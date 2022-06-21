import React, { useState } from 'react'

function TextForm({ title, mode, showAlert }) {

    const [text, settext] = useState('');

    const handleuppercase = () => {
        settext(text.toUpperCase())
        showAlert("Converted to uppercase", "success");

    }
    const handlelowercase = () => {
        settext(text.toLowerCase())
        showAlert("Converted to lowercase", "success");
    }

    const handleExtraspaces = () => {
        let newtext = text.split(/[ ] + /); /// --> jhan pr bhi ek ya ek se zyada spaces hongi this logic will spit those elements into an array
        settext(newtext.join(" "));
        showAlert("Extra space removed", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Copied to Clipboard", "success");
    }

    const handleclear = () => {
        settext('')
        showAlert("text cleared", "success");
    }

    return (
        <>
            <div className='container my-3'>
                <h2>{title}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text}
                        placeholder='Enter your text here' id="mybox" rows="8"
                        onChange={e => settext(e.target.value)}
                        style={{ backgroundColor: mode === 'dark' ? '#121212' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
                    ></textarea>
                </div>
                <button disabled={text.length === 0} type="button" onClick={handleuppercase} className="btn btn-primary mx-3 my-3">Convert to Uppercase</button>
                <button disabled={text.length === 0} type="button" onClick={handlelowercase} className="btn btn-primary mx-3 my-3">Convert to Lowercase</button>
                <button disabled={text.length === 0} type="button" onClick={handleExtraspaces} className="btn btn-primary mx-3 my-3">Remove Extra Spaces</button>
                <button disabled={text.length === 0} type="button" onClick={handleCopy} className="btn btn-success mx-3 my-3">Copy Text</button>
                <button disabled={text.length === 0} type="button" onClick={handleclear} className="btn btn-danger mx-3 my-3">Clear text</button>
            </div>
            <div className='container'>
                <h2>Your text summary...</h2>
                <p>It contains {text.split(" ").filter(ele => { return ele.length !== 0 }).length} and {text.length} characters</p>
                <p>You can read it in approximately {(0.008 * text.split(" ").filter(ele => { return ele.length !== 0 }).length)} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview...."}</p>
            </div>
        </>
    )
}

export default TextForm