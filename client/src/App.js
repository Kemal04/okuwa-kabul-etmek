import React, { useEffect, useState } from 'react'
import axios from 'axios';

//ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

//USERINTERFACE
import { Home, Register, Login } from "./pages/userInterface"

//ADMIN
import { Admin, AdminRegister, AdminLogin } from "./pages/admin"

//TOAST
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//CONTEXT
import { AuthContext } from './context/AuthContext';

const App = () => {

    const [authState, setAuthState] = useState({
        email: "",
        id: 0,
        status: false,
        role: "User",
    });

    useEffect(() => {
        axios.get("http://localhost:3001/api/auth/auth", {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            if (response.data.error) {
                setAuthState({ ...authState, status: false, role: "User" });
            } else {
                setAuthState({
                    email: response.data.email,
                    id: response.data.id,
                    status: true,
                    role: response.data.role,
                });
            }
        });
    }, []);

    return (
        <div>
            <>
                <AuthContext.Provider value={{ authState, setAuthState }}>
                    <Router>
                        <ToastContainer />
                        <Routes>

                            <Route path="/" element={<WithNavbar />}>
                                <Route path='/' element={<Home />}></Route>

                                {
                                    !authState.status && (
                                        <>
                                            <Route path='/hasaba-durmak' element={<Register />}></Route>
                                            <Route path='/giris-etmek' element={<Login />}></Route>
                                        </>
                                    )

                                }
                            </Route>

                            <Route path="/" element={<AdminWithNavbar />}>
                                {
                                    authState.role === "Admin" && (
                                        <>
                                            <Route path='/admin' element={<Admin />}></Route>
                                            <Route path='/admin/hasaba-durmak' element={<AdminRegister />}></Route>
                                            <Route path='/admin/giris-etmek' element={<AdminLogin />}></Route>
                                        </>
                                    )
                                }
                            </Route>

                        </Routes>
                    </Router>
                </AuthContext.Provider>
            </>
        </div>
    )
}


const WithNavbar = () => {
    return (
        <Outlet />
    );
}

const AdminWithNavbar = () => {
    return (
        <Outlet />
    );
}

export default App
