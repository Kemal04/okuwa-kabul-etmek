import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const AdminUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/user', {
                    headers: {
                        accessToken: localStorage.getItem("accessToken"),
                    },
                })
                setUsers(res.data.users)
            } catch (err) {
                console.log(err)
            }
        }
        fetchUsers()
    }, [])

    return (
        <>
            <div className='container py-5'>
                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                    Ulanyjylar bölümi
                    <Link to="/admin/ulanyjy-gos" className='text-decoration-none'>+</Link>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <table className="table">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Ulanyjy Ady</th>
                                    <th scope="col">Familýasy</th>
                                    <th scope="col">Telefon Belgisi</th>
                                    <th scope="col">E-mail Adresi</th>
                                    <th scope="col">Adresi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{user.username}</td>
                                            <td>{user.surname ? user.surname : "Şu wagtlyk boş"}</td>
                                            <td>+993 {user.phoneNum}</td>
                                            <td>{user.email ? user.email : "Şu wagtlyk boş"}</td>
                                            <td>{user.address ? user.address : "Şu wagtlyk boş"}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsers