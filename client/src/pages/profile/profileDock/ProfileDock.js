import React, { useState } from 'react'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const ProfileDock = () => {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [sahadatnama, setSahadatnama] = useState('')
    const [hasiyetnama, setHasiyetnama] = useState('')
    const [medSpravka, setMedSpravka] = useState('')

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', img)
        formData.append('sahadatnama', sahadatnama)
        formData.append('hasiyetnama', hasiyetnama)
        formData.append('medSpravka', medSpravka)

        if (!name) {
            toast.error("Ady, Familýasy, Atasynyň Adyny ýazyň")
        }
        else if (!img) {
            toast.error("Surat 3*4 gerek")
        }
        else if (!sahadatnama) {
            toast.error("Şahadatnama gerek")
        }
        else if (!hasiyetnama) {
            toast.error("Häsiýetnama gerek")
        }
        else if (!medSpravka) {
            toast.error("Doktor Haty (Медсправка) gerek")
        }
        else {
            await axios.post("http://localhost:3001/api/doc/create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/ulanyjy/maglumatlary")
                }).catch((res) => {
                    toast.error(res.response.data.error)
                    navigate(`/${res.response.status}`);
                });
        }
    }

    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='h3 text-end me-3'>
                    Okuwa Kabul Etmek
                </div>
                <div className='h5 text-start'>
                    <Link to=""><FontAwesomeIcon icon={faQuestionCircle} /></Link>
                </div>
            </div>
            <div className='row justify-content-center mt-5'>
                <div className='col-xl-8'>
                    <form className='row'>
                        <div className='col-xl-12 mb-3 pb-2'>
                            <label className="form-label fw-bold">Ady, Familýasy, Atasynyň Ady </label>
                            <input onChange={(e) => setName(e.target.value)} name='name' type="text" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-6 mb-3 pb-2'>
                            <label className="form-label fw-bold">Surat 3*4</label>
                            <input onChange={(e) => setImg(e.target.files[0])} name='img' type="file" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-6 mb-3 pb-2'>
                            <label className="form-label fw-bold">Şahadatnama</label>
                            <input onChange={(e) => setSahadatnama(e.target.files[0])} name='sahadatnama' multiple type="file" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-6 mb-3 pb-2'>
                            <label className="form-label fw-bold">Häsiýetnama</label>
                            <input onChange={(e) => setHasiyetnama(e.target.files[0])} name='hasiyetnama' multiple type="file" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-6 mb-3 pb-2'>
                            <label className="form-label fw-bold">Doktor Haty (Медсправка)</label>
                            <input onChange={(e) => setMedSpravka(e.target.files[0])} name='medSpravka' multiple type="file" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-12 d-grid'>
                            <button onClick={handleClick} className="btn btn-primary">Ugrat</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileDock