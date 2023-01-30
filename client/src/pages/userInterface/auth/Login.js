import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

    const [phoneNum, setPhoneNum] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        const data = { phoneNum: phoneNum, password: password }

        if (!phoneNum) {
            toast.error("E-mail adresiňizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post("http://localhost:3001/api/auth/login", data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        phoneNum: res.data.phoneNum,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                    toast.success(res.data.success)
                    navigate("/")
                }

            })
        }
    }

    return (
        <div className='home-bg d-flex justify-content-center align-items-center'>
            <div className='container w-50'>
                <div className='card border-0 p-5 shadow'>
                    <div className='h2 text-center mb-5'>
                        Hasaba Durmak
                    </div>
                    <div className='d-flex justify-content-center '>
                        <form className='w-75' onSubmit={loginUser}>

                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text px-4">+993</span>
                                    <input name='phoneNum' value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} type="number" className="form-control py-3" placeholder='Telefon belgisi' />
                                </div>
                            </div>

                            <div className="mb-3">
                                <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control py-3" placeholder='Açar sözi' />
                            </div>

                            <div className='text-center mt-4' style={{ fontSize: "18px" }}>
                                Hasabyňyz ýokmy? <Link to="/hasaba-durmak" className='text-decoration-none'> Agza bolmak</Link>
                            </div>

                            <div className='text-center mt-3 d-grid'>
                                <button className='btn btn-outline-primary px-5 py-2 btn-lg'>Giriş etmek</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
