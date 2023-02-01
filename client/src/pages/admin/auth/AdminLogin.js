import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        const data = { email: email, password: password }

        if (!email) {
            toast.error("E-mail adresiňizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post("http://localhost:3001/api/auth/rootman", data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        email: res.data.email,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                    navigate("/admin")
                    window.location.reload()
                    toast.success(res.data.success)
                }

            })
        }
    }

    return (
        <div style={{ height: "100vh" }} className='bg-primary d-flex justify-content-center align-items-center'>
            <div className='container w-50'>
                <div className='row justify-content-center'>
                    <div className='col-xl-7'>
                        <div className='card border-0 p-5 px-2 shadow'>
                            <div className='h2 text-center mb-4 mt-3 text-dark'>
                                Login
                            </div>
                            <div className='d-flex justify-content-center '>
                                <form className='w-75' onSubmit={loginUser}>

                                    <div className="mb-3">
                                        <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control py-3" placeholder='E-mail' />
                                    </div>

                                    <div className="mb-4">
                                        <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control py-3" placeholder='Password' />
                                    </div>

                                    <div className='text-center mt-3 mb-5 d-grid'>
                                        <button className='btn btn-outline-primary px-5 py-2 btn-sm'>Submit</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
