import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext';

const ProfileInfo = () => {

    const { authState } = useContext(AuthContext)

    const id = authState.id

    const [user, setUser] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/api/auth/basicinfo/${id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setUser(res.data);
            setRole(res.data.role);
        });
    }, [id]);

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='d-flex justify-content-center'>
                    <img src="/img/icons/user-1.jpg" alt="" className='rounded-circle' style={{ width: "150px", marginTop: "-70px" }} />
                </div>
                <div className='mb-3 text-center'>
                    <img src={user.img ? user.img : "/img/icons/user.svg"} alt="user" className='img-fluid' style={{ width: "150px" }} />
                </div>
                <div className='row justify-content-center mt-4 mb-5'>
                    <div className='w-50'>
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-sm-4">
                                    <h6 className="mb-0">Doly Adym</h6>
                                </div>
                                <div className="col-sm-8 text-secondary">
                                    {user.username}
                                </div>
                            </div>
                            <hr />
                            <div className="row justify-content-between">
                                <div className="col-sm-4">
                                    <h6 className="mb-0">Familýam</h6>
                                </div>
                                <div className="col-sm-8 text-secondary">
                                    {user.surname ? user.surname : "Şu wagtlyk boş"}
                                </div>
                            </div>
                            <hr />
                            <div className="row justify-content-between">
                                <div className="col-sm-4">
                                    <h6 className="mb-0">Adresim</h6>
                                </div>
                                <div className="col-sm-8 text-secondary">
                                    {user.address ? user.address : "Şu wagtlyk boş"}
                                </div>
                            </div>
                            <hr />
                            <div className="row justify-content-between">
                                <div className="col-sm-4">
                                    <h6 className="mb-0">Elektron Poçtam</h6>
                                </div>
                                <div className="col-sm-8 text-secondary">
                                    {user.email ? user.email : "Şu wagtlyk boş"}
                                </div>
                            </div>
                            <hr />
                            <div className="row justify-content-between">
                                <div className="col-sm-4">
                                    <h6 className="mb-0">Telefon Belgim</h6>
                                </div>
                                <div className="col-sm-8 text-secondary">
                                    {user.phoneNum}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo