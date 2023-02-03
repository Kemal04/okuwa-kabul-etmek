import { React } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { faBook, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminSidebar = () => {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="/img/icons/user.svg" className="img-circle elevation-2" alt='user' />
                        </div>
                        <div className="info">
                            <Link to="/" className="d-block text-decoration-none">Administrasiýa</Link>
                        </div>
                    </div>

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
                        <div className="image">
                            <i className="fas fa-home text-white"></i>
                        </div>
                        <div className="info">
                            <NavLink to="/admin" className="d-block text-uppercase text-decoration-none">Main Page</NavLink>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink to="/admin/users" className="nav-link">
                                    <FontAwesomeIcon icon={faUser} className="me-2"/>
                                    <p> Users </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/user-doc" className="nav-link">
                                    <FontAwesomeIcon icon={faBook} className="me-2"/>
                                    <p> User Informations </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/messages" className="nav-link">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2"/>
                                    <p> Habarlar </p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default AdminSidebar