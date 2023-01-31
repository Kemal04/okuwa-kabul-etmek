import React, { useEffect, useState } from 'react'
import axios from 'axios';

//ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

//USERINTERFACE
import { ProfileNavbar, ProfileSidebar } from "./components"

//USERINTERFACE
import { Home, Register, Login } from "./pages/userInterface"

//ADMIN
import { Admin, AdminRegister, AdminLogin } from "./pages/admin"

//ADMIN
import { ProfileDock, ProfileInfo, ProfileMessage } from "./pages/profile"

//TOAST
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//CONTEXT
import { AuthContext } from './context/AuthContext';

//CSS
import "./admin.css"

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

                            <Route path='/' element={<Home />}></Route>
                            {!authState.status && (
                                <>
                                    <Route path='/hasaba-durmak' element={<Register />}></Route>
                                    <Route path='/giris-etmek' element={<Login />}></Route>
                                </>
                            )}

                            <Route path="/" element={<AdminWithNavbar />}>
                                {authState.role === "Admin" && (
                                    <>
                                        <Route path='/admin' element={<Admin />}></Route>
                                        <Route path='/admin/hasaba-durmak' element={<AdminRegister />}></Route>
                                        <Route path='/admin/giris-etmek' element={<AdminLogin />}></Route>
                                    </>
                                )}
                            </Route>

                            <Route path="/" element={<ProfileWithNavbar />}>
                                {authState.status && (
                                    <>
                                        <Route path='/ulanyjy/maglumatlary' element={<ProfileInfo />}></Route>
                                        <Route path='/ulanyjy/okuwa-kabul-etmek' element={<ProfileDock />}></Route>
                                        <Route path='/ulanyjy/habarlary' element={<ProfileMessage />}></Route>
                                    </>

                                )}
                            </Route>

                        </Routes>
                    </Router>
                </AuthContext.Provider>
            </>
        </div>
    )
}

const AdminWithNavbar = () => {
    return (
        <Outlet />
    );
}


const ProfileWithNavbar = () => {
    return (
        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                <ProfileNavbar />
                <ProfileSidebar />
                <div className="content-wrapper" style={{ paddingTop: "70px" }}>
                    <div className='content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
