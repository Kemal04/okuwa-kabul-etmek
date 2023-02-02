import React from 'react'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const ProfileDock = () => {
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
                            <input name='name' type="text" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-6 mb-3 pb-2'>
                            <label className="form-label fw-bold">Surat 3*4</label>
                            <input name='img' type="file" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-6 mb-3 pb-2'>
                            <label className="form-label fw-bold">Şahadatnama</label>
                            <input name='sahadatnama' type="file" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-6 mb-3 pb-2'>
                            <label className="form-label fw-bold">Häsiýetnama</label>
                            <input name='hasiyetnama' type="file" className="form-control rounded-0" autoComplete="off" />
                        </div>
                        <div className='col-xl-6 mb-3 pb-2'>
                            <label className="form-label fw-bold">Doktor Haty (Медсправка)</label>
                            <input name='hasiyetnama' type="file" className="form-control rounded-0" autoComplete="off" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileDock