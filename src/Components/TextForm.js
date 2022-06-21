import React, { useState } from 'react'

function TextForm({ title }) {

    const [text, settext] = useState('');

    const handleuppercase = () => {
        settext(text.toUpperCase())
    }

    const handlelowercase = () => {
        settext(text.toLowerCase())
    }

    const handleclear = () => {
        settext('')
    }

    return (
        <div className='container my-3'>
            <h2>{title}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder='Enter your text here' id="mybox" rows="8" onChange={e => settext(e.target.value)}></textarea>
            </div>
            <div className='d-flex'>
                <button type="button" onClick={handleuppercase} className="btn btn-primary mx-3">Convert to Uppercase</button>
                <button type="button" onClick={handlelowercase} className="btn btn-primary mx-3">Convert to Lowercase</button>
                <button type="button" onClick={handleclear} className="btn btn-primary mx-3">Clear text</button>
            </div>
        </div>
    )
}

export default TextForm