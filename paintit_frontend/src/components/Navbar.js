import React from 'react'
import '../styles/navbar.css';

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#dbdbdb" }}>
                <div className="container-fluid">
                    <img src="../images/paintit.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    Paintit

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </div>
            </nav>
        </>
    )
}
