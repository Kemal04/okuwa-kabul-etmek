import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div className='home-bg d-flex justify-content-center align-items-center'>
            <div className='container'>
                <div className='card border-0 p-5 opacity-75 shadow'>
                    <div className='h2 text-center mb-3'>
                        "Okuw Kabul Etmege" Hoş Geldiňiz
                    </div>
                    <ul style={{ fontSize: "18px" }}>
                        <li className='mt-2'>
                            Şu Düzgünnama Türkmenistanyň çäginde ýaşaýan we bellenen ýaşa görä okamaga hukugy bolan ähli çagalaryň  jynsyna we gelip çykyşyna garamazdan, “Bilim hakynda” Türkmenistanyň kanunynyň, “Döwlet umumybilim edaralary hakynda“ Düzgünnamanyň, “Çaganyň hukugynyň kepillikleri hakynda” Türkmenistanyň kanunynyň, „Çaganyň hukuklary hakyndaky” Konwensiýanyň talaplaryna laýyklykda umumy orta bilimi wagtynda almaklaryny düzgünleşdirýär.
                        </li>

                        <li className='mt-2'>
                            Orta mekdebiň birinji synpyna okuwa giren ýylynda 6 ýaşyny dolduran çagalar, şeýle-de dürli sebäplere görä öz wagtynda okuwa çekilmedik çagalar kabul edilýär.    Hökmany umumy  bilimi amala aşyrmak maksady bilen, orta mekdepler tarapyndan her ýylda iki gezek maý we awgust aýlarynda mekdep ýaşy dolýan çagalary anyklamak üçin mekdeplere ýanaşyk ýaşaýyş jaýlarynda ýaşaýanlaryň okuw ýaşly çagalarynyň ählisi ýazga geçirilýär.
                        </li>

                        <li className='mt-2'>
                            Täze okuw ýylynda birinji synpy okatjak mugallymlar baradaky meselä başlangyç synp mugallymlarynyň usuly birleşmesiniň geňeşiniň hödürlemegi bilen, mekdebiň okuw ýylynyň jemleri boýunça geçirýän mugallymlar geňeşinde seredilýär.
                        </li>

                        <li className='mt-2'>
                            Mekdebiň birinji synpyna çekilmeli çagalaryň mekdebe çenli çagalar edaralaryna gatnamaýanlary aýratyn hasaba alnyp, olar bilen awgust aýynyň 10-25-i aralygynda iki hepdelik taýýarlyk okuwlary gurnalýar. Okuwlar täze okuw ýylynda birinji synpy okatjak mugallymyň iş wagtynyň çäginde geçirilýär. Bu okuwlar dowamlylygy 25 minut bolan 3 okuw sagadyndan köp bolmaly däldir.
                        </li>

                        <li className='mt-2'>
                            1-nji synplarda okuw sapaklarynyň dowamlylygy 35 minut bolmalydyr.  Kompýuterlerde işlemeginiň dowamlylygy 15 minutdan köp bolmaly däldir.
                        </li>

                        <li className='mt-2'>
                            1-nji synplarda okuwçylaryň bilimleri bahalandyrylmaýar.
                        </li>

                        <li className='mt-2'>
                            Hasaba alnan çagalaryň arasynda ýüze çykarylan, kömekçi mekdep-internatlarda okadylmaga (kör, çala görýän, ker we soň eşidişden galan, fiziki taýdan ýetmezçiligi bolan), ýa-da öýde okadylmaga degişli bolan çagalaryň ata-enelerine olary degişli mekdep-internatlara ýerleşdirmekligiň, öýde okatmaklygyň düzgünleri düşündirilýär hem-de okuwa çekilmäge degişli bolan şeýle çagalar barada degişli bilim bölümlerine aýratyn hasabat berilýär.
                        </li>

                        <li className='mt-2'>
                            1-nji synplaryň okuwçylary hökmany tertipde günüň birinji ýarymynda okadylmalydyr
                        </li>
                    </ul>
                    <div className='text-center mt-3'>
                        <Link to="/hasaba-durmak" className='btn btn-outline-primary px-5 py-2 btn-lg'>Hasaba Durmak</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
