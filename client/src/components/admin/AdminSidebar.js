import { React, useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, NavLink } from 'react-router-dom'
import axios from "axios"

const AdminSidebar = () => {

    const { authState } = useContext(AuthContext)

    const id = authState.id

    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/api/auth/basicinfo/${id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setUser(res.data);
        });
    }, [id]);

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="/img/icons/user.svg" className="img-circle elevation-2" alt='user' />
                        </div>
                        <div className="info">
                            <Link to="/" className="d-block text-decoration-none">{user.username}</Link>
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
                                    <p> Users </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/user-data" className="nav-link">
                                    <p> User Informations </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/messages" className="nav-link">
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