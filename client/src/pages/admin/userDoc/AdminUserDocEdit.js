import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminUserDocEdit = () => {

    // const [name, setName] = useState('')
    // const [img, setImg] = useState('')
    // const [sahadatnama, setSahadatnama] = useState('')
    // const [hasiyetnama, setHasiyetnama] = useState('')
    // const [medSpravka, setMedSpravka] = useState('')


    // const uploadImg = (e) => {
    //     setImg({
    //         picturePreview: URL.createObjectURL(e.target.files[0]),
    //         pictureAsFile: e.target.files[0],
    //     });
    // };

    // const uploadSahadatnama = (e) => {
    //     setSahadatnama({
    //         picturePreview: URL.createObjectURL(e.target.files[0]),
    //         pictureAsFile: e.target.files[0],
    //     });
    // };

    // const uploadHasiyetnama = (e) => {
    //     setHasiyetnama({
    //         picturePreview: URL.createObjectURL(e.target.files[0]),
    //         pictureAsFile: e.target.files[0],
    //     });
    // };

    // const uploadMedSpravka = (e) => {
    //     setMedSpravka({
    //         picturePreview: URL.createObjectURL(e.target.files[0]),
    //         pictureAsFile: e.target.files[0],
    //     });
    // };

    // const navigate = useNavigate()

    // const location = useLocation()
    // const docId = location.pathname.split("/")[3]

    // useEffect(() => {
    //     axios.get(`http://localhost:3001/api/doc/edit/${docId}`, {
    //         headers: {
    //             accessToken: localStorage.getItem("accessToken"),
    //         },
    //     }).then((res) => {
    //         setName(res.data.userDocs.name)
    //         setImg(res.data.userDocs.img)
    //         setSahadatnama(res.data.userDocs.sahadatnama)
    //         setHasiyetnama(res.data.userDocs.hasiyetnama)
    //         setMedSpravka(res.data.userDocs.medSpravka)
    //     }).catch((res) => {
    //         toast.error(res.response.data.error)
    //         navigate(`/${res.response.status}`)
    //     })

    // }, [navigate, docId])

    // const handleClick = async (e) => {
    //     e.preventDefault()

    //     const formData = new FormData()
    //     formData.append('name', name)
    //     formData.append('img', img)
    //     formData.append('sahadatnama', sahadatnama)
    //     formData.append('hasiyetnama', hasiyetnama)
    //     formData.append('medSpravka', medSpravka)

    //     if (!name) {
    //         toast.error("Ady, Familýasy, Atasynyň Adyny ýazyň")
    //     }
    //     else if (!img) {
    //         toast.error("Surat 3*4 gerek")
    //     }
    //     else if (!sahadatnama) {
    //         toast.error("Şahadatnama gerek")
    //     }
    //     else if (!hasiyetnama) {
    //         toast.error("Häsiýetnama gerek")
    //     }
    //     else if (!medSpravka) {
    //         toast.error("Doktor Haty (Медсправка) gerek")
    //     }
    //     else {
    //         await axios.post(`http://localhost:3001/api/doc/edit/${docId}`, formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //                 accessToken: localStorage.getItem("accessToken"),
    //             },
    //         })
    //             .then((res) => {
    //                 toast.success(res.data.success)
    //                 navigate("/ulanyjy/maglumatlary")
    //             }).catch((res) => {
    //                 toast.error(res.response.data.error)
    //                 navigate(`/${res.response.status}`);
    //             });
    //     }
    // }

    return (
        <div className='container'>
            {/* <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <div className='my-5 py-5'>
                        <div className='d-flex justify-content-center aling-items-center h2 mb-5 pb-5'>
                            Change User Information
                        </div>
                        <form className='row'>
                            <div className='col-xl-12 mb-3 pb-2'>
                                <label className="form-label fw-bold">Ady, Familýasy, Atasynyň Ady </label>
                                <input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" className="form-control rounded-0" autoComplete="off" />
                            </div>
                            <div className='col-xl-6 mb-3 pb-2'>
                                <label className="form-label fw-bold">Surat 3*4</label>
                                <input onChange={uploadImg} name='img' type="file" className="form-control rounded-0" autoComplete="off" />
                            </div>
                            <div className='col-xl-6 mb-3 pb-2'>
                                <label className="form-label fw-bold">Şahadatnama</label>
                                <input onChange={uploadSahadatnama} name='sahadatnama' multiple type="file" className="form-control rounded-0" autoComplete="off" />
                            </div>
                            <div className='col-xl-6 mb-3 pb-2'>
                                <label className="form-label fw-bold">Häsiýetnama</label>
                                <input onChange={uploadHasiyetnama} name='hasiyetnama' multiple type="file" className="form-control rounded-0" autoComplete="off" />
                            </div>
                            <div className='col-xl-6 mb-3 pb-2'>
                                <label className="form-label fw-bold">Doktor Haty (Медсправка)</label>
                                <input onChange={uploadMedSpravka} name='medSpravka' multiple type="file" className="form-control rounded-0" autoComplete="off" />
                            </div>
                            <div className='col-xl-12 d-grid'>
                                <button onClick={handleClick} className="btn btn-primary">Ugrat</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AdminUserDocEdit