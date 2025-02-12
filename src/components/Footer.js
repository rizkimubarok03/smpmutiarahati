import React from "react";
import Image1 from "../asset/logosmp.png"
import email from "../asset/email.png"
import youtube from "../asset/youtube.png"
import instagram from "../asset/instagram.png"
import whatsapp from "../asset/whatsapp.png"

const Footer = () => {
    return (
        <div className="body grid justify-center items-end ">
    <div className="footer relative w-full h-auto">
        <div className="container-footer w-full grid pt-10 pb-10">
            <div className="ml-10">
                <h1 className="font-bold text-2xl relative mb-6">Tentang kami</h1>
                {/* <img src={(Image1)} className="w-6 h-6"></img> */}
                <p className=""><b>SMP Mutiara Hati Kota Tangerang </b>ialah tempat dimana pendidikan berkualitas dan 
                pengembangan karakter menjadi prioritas utama kami</p>
                <ul className="icon-footer mt-6 grid ">
                    <li>
            
                        <a href="https://www.instagram.com/sekolahmutiarahati_tangerang">
                            <img src={(instagram)} className="w-6 h-6"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/u/3/#inbox">
                            <img src={(email)} className="w-8 h-8"></img>
                        </a>
                    </li>
                    <li>
                        
                        <a href="https://youtu.be/MChD1iItJ7w?si=8r_A8dhiI0WbczJM/@sekolahmutiarahati">
                            <img src={(youtube)} className="w-8 h-8 mb-2 mt-3"></img>

                           </a>
                    </li>
                    <li>
                            <a href="https://api.whatsapp.com/send?phone=6288212743988">
                                 <img src={(whatsapp)} className="w-8 h-8 mb-2 mt-3"></img>

                        </a>
                    </li>
                </ul>
            </div>
            <div className="informasi-footer relative">
                <h1 className="font-bold text-2xl relative mb-6">Informasi</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Tentang Kami</a></li>
                    <li><a href="/kontak">Kontak</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/galery">History</a></li>
                </ul>
            </div>
            <div>
                <h1 className="font-bold text-2xl relative mb-6">Contact</h1>
                <ul>
                    <a href="https://www.instagram.com/sekolahmutiarahati_tangerang"><img src={(instagram)} className="w-6 h-6"></img></a> 
                    <li><a href="https://www.instagram.com/sekolahmutiarahati_tangerang">sekolahmutiarahati_tangerang
                    </a></li>
                    
                    <a href="https://mail.google.com/mail/u/3/#inbox"><img src={(email)} className="w-8 h-8"></img> </a>
                    <li><a href="https: https://mail.google.com/mail/u/3/#inbox">smpmutiarahatikotatangerang@gmail.com </a></li>

                    <a href="https://youtu.be/MChD1iItJ7w?si=8r_A8dhiI0WbczJM/@sekolahmutiarahati"><img src={(youtube)} className="w-8 h-8"></img></a> 
                    <li><a href="https://youtu.be/MChD1iItJ7w?si=8r_A8dhiI0WbczJM/@sekolahmutiarahati">sekolahmutiarahati_tangerang
                    </a></li>

                    <a href="https://api.whatsapp.com/send?phone=6288212743988"><img src={(whatsapp)} className="w-8 h-8" ></img></a>
                    <li>08212743988
                    </li>
                </ul>
            </div>
            <div className="relative mr-10">
                <h1 className="font-bold text-2xl relative mb-6">Alamat Sekolah</h1>
                <p>Jl. Mawar No. 41 - 42 Rt. 002/001 Kavling Sukasari Tangerang 15118 Telp. 021 – 5534403 </p>
                <p>Kota Tangerang Provinsi – Banten</p>
            </div>


        </div>
        <div className="copyRightText w-full text-white">
            <p className="">Copyright © 2024 | All Right Reserved by SMP Mutiara Hati Kota Tangerang.</p>
        </div>
        </div>

        </div>
    )
}   

export default Footer