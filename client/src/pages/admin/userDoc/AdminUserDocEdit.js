import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminUserDocEdit = () => {

    const [check, setCheck] = useState({})

    const handleChange = (e) => {
        setCheck((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()

    const location = useLocation()
    const docId = location.pathname.split("/")[4]

    useEffect(() => {
        axios.get(`http://localhost:3001/api/doc/edit/${docId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setCheck(res.data.userDoc.check)
        }).catch((res) => {
            toast.error(res.response.data.error)
            navigate(`/${res.response.status}`)
        })
    }, [navigate, docId])

    const handleClick = async (e) => {
        e.preventDefault()

        if (!check) {
            toast.error("Bos yerleri dolduryn")
        }
        else {
            await axios.post(`http://localhost:3001/api/doc/edit/${docId}`, check, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/user-doc")
                }).catch((res) => {
                    toast.error(res.response.data.error)
                    navigate(`/${res.response.status}`);
                });
        }
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <div className='my-5 py-5'>
                        <div className='d-flex justify-content-center aling-items-center h2 mb-5 pb-5'>
                            Change User Information
                        </div>
                        <form className='row'>
                            <div className="col-lg-12 mb-3">
                                <label className="form-label fw-bold">Tassyklamak</label>
                                <select name='check' onChange={handleChange} className="form-select">
                                    <option value={check}>{check === 0 ? "Tassyklanmadyk" : "Tassyklanan"}</option>
                                    <option value="1">Tassykla</option>
                                    <option value="0">Cykarmak</option>
                                </select>
                            </div>
                            <div className='col-xl-12 d-grid'>
                                <button onClick={handleClick} className="btn btn-primary">Ugrat</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUserDocEdit