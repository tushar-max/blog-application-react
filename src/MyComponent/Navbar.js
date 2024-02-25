import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
    const navigate = useNavigate();

    return (
        // <nav class="navbar bg-primary" data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary shadow-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand">Blogging App</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a onClick={() => navigate("/")} className="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => navigate("/addPost")} className="nav-link active">Create Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
        // <>
        //     <nav class="navbar navbar-light bg-light justify-content-between">
        //         <a class="navbar-brand">Navbar</a>
        //         <div className="row">
        //         <a href="">Home</a>
        //         </div>
        //         <a href="">Home2</a>
        //     </nav>
        // </>
    )
}
