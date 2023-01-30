import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Register = () => {

    const [username, setUsername] = useState("");
    const [phoneNum, setPhoneNum] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        if (!username) {
            toast.error("Adyňyzy ýazyň!")
        }
        else if (!phoneNum) {
            toast.error("E-mail adresiňizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (!cPassword) {
            toast.error("Açar sözüňizi gaýtadan ýazyň!")
        }
        else if (cPassword !== password) {
            toast.error("Açar sözüňiz gabat gelenok !")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post("http://localhost:3001/api/auth/register", {
                username: username,
                phoneNum: phoneNum,
                password: password,
            }).then((res) => {
                navigate("/")
                toast.success(res.data)
                toast.error(res.data.error)
            }).catch((res) => {
                toast.error(res.data.error)
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
                        <form className='w-75' onSubmit={registerUser}>

                            <div className="mb-3">
                                <input name='username' value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control py-3" placeholder='Ady' />
                            </div>

                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text px-4">+993</span>
                                    <input name='phoneNum' value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} type="number" className="form-control py-3" placeholder='Telefon belgisi' />
                                </div>
                            </div>

                            <div className="mb-3">
                                <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control py-3" placeholder='Açar sözi' />
                            </div>

                            <div className="mb-3">
                                <input name='cPassword' value={cPassword} onChange={(e) => setCPassword(e.target.value)} type="password" className="form-control py-3" placeholder='Açar sözini gaytala' />
                            </div>

                            <div className='text-center mt-4' style={{ fontSize: "18px" }}>
                                Öň hasabyňyz barmy? <Link to="/giris-etmek" className='text-decoration-none'>Girmek</Link>
                            </div>

                            <div className='text-center mt-3 d-grid'>
                                <button className='btn btn-outline-primary px-5 py-2 btn-lg'>Hasaba Dur</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
