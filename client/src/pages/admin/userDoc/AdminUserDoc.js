import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const UserDoc = () => {

    const [docs, seDocs] = useState([])

    useEffect(() => {
        const fetchUserDocs = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/doc', {
                    headers: {
                        accessToken: localStorage.getItem("accessToken"),
                    },
                })
                seDocs(res.data.userDocs)
            } catch (err) {
                console.log(err)
            }
        }
        fetchUserDocs()
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
                                    <th scope="col">Üýgetmek</th>
                                    <th scope="col">Pozmak</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    docs.map((doc, index) => (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{doc.name}</td>
                                            <td><Link to={`/admin/user-doc/edit/${doc.id}`} className='btn btn-outline-warning'>Üýget</Link></td>
                                            <td><button className='btn btn-outline-danger'>Poz</button></td>
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

export default UserDoc