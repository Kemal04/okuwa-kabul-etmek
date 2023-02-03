import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


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

    const navigate = useNavigate()

    const handleDelete = async (id) => {

        await axios.delete('http://localhost:3001/api/doc/delete/' + id, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                const del = docs.filter(docs => id !== docs.id)
                seDocs(del)
                toast.success(res.success)
            }).catch((res) => {
                toast.error(res.response.data.error)
                navigate(`/${res.response.status}`)
            });
    }

    return (
        <>
            <div className='container py-5'>
                <div className='d-flex justify-content-center aling-items-center h2 mb-5'>
                    User Information
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <table className="table">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Ulanyjy Ady</th>
                                    <th scope="col">Ýagdaýy</th>
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
                                            <td>{doc.check === 0 ? <div className='text-danger'>Tassyklanmadyk</div> : <div className='text-success'>Tassyklanan</div>}</td>
                                            <td><Link to={`/admin/user-doc/edit/${doc.id}`} className='btn btn-outline-warning'>Üýget</Link></td>
                                            <td><button onClick={() => handleDelete(doc.id)} className='btn btn-outline-danger'>Poz</button></td>
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