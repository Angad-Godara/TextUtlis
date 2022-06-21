import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ mode, changeMode }) {
    return (
        <nav className={`navbar navbar-expand navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>TextUtils</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label mx-0.5" htmlFor="flexSwitchCheckDefault">Go for dark</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


// proptypes are used to set default values of the props and ato check datatypes of the strings