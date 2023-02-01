import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="" className="p-2 pt-3 d-flex text-dark" data-widget="pushmenu"><i className="fas fa-bars"></i></Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/" className="nav-link">Baş Sahypa</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AdminNavbar