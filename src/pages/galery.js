import React from "react";
import Footer from "../components/Footer";
import logo from "../asset/logosmp.png"
import prestasi1 from "../asset/prestasi1.png"
import prestasi2 from "../asset/prestasi2.png"
import prestasi3 from "../asset/prestasi3.png"
import prestasi4 from "../asset/prestasi4.png"
import prestasi5 from "../asset/prestasi5.png"
import prestasi6 from "../asset/prestasi6.png"
import administrasi from "../asset/administrasi.png"
import hariberniaga from "../asset/hariberniaga.png"
import rpl from "../asset/rpl.png"
import JuaraIItaekwondo from "../asset/JuaraIItaekwondo.png"
import prestasi from "../asset/prestasi.png"
import wisudatahfidz from "../asset/wisudatahfidz.jpg"
import ekspedisi from "../asset/ekspedisi.jpg"
import entrepreurskiil from "../asset/entrepreurskiil.png"
import steam from "../asset/steam.png"
import belajarprojek from "../asset/belajarprojek.png"
import literasi from "../asset/literasi.png"
import prestasismp from "../asset/prestasismp.png"
const Galery = () => {
    return(
        <div>
        <section className="about-section h-screen">
        <div className="about w-full">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
            <img src={(logo)} className="logo w-24 h-24 absolute "></img>
          </a>
          <div></div>
          <nav className="navbar">
            <ul className="relative text-white mt-5">
              <li className="list"><a href="/">Home</a></li>
              <li className="list"><a href="/about">Tentang Kami</a></li>
              <li className="list"><a href="/kontak">Kontak</a></li>
              <li className="list"><a href="/blog">Blog</a></li>
             
                <button>
                  <li><a className="galery" href="/galery">History</a></li>
                </button>
             
            </ul>

          </nav>
        </div>
            <div className="about-text justify-center text-center text-white">
              <h1 className="font-bold text-6xl pt-52 mb-6">History</h1>
              <p className=" font-bold text-3xl">SMP Mutiara Hati Kota Tangerang</p>
              <p className=" font-bold text-3xl">Better School Better Student</p>
            </div>          
        </div>

    <div className="halaman-galery">
            <h1 className="text-center mt-20 text-4xl font-bold text-blue-950">Prestasi dan Kegiatan</h1>
        <div className="flex justify-center items-center flex-wrap gap-6 mt-20 mb-20">
            <img src={(JuaraIItaekwondo)} className="w-[500px] h-[300px]"></img>
            <img src={(prestasi)} className="w-[500px] h-[300px]"></img>
            <img src={(prestasismp)} className="w-[500px] h-[300px]"></img>
            <img src={(JuaraIItaekwondo)} className="w-[500px] h-[300px]"></img>
        </div>

            <h1 className="text-center mt-20 text-4xl font-bold text-blue-950">Kegiatan dan Proses</h1>
        <div className="flex justify-center items-center flex-wrap gap-6 mt-20 mb-20">
            <img src={(wisudatahfidz)} className="w-[500px] h-[300px]"></img>
            <img src={(ekspedisi)} className="w-[500px] h-[300px]"></img>
            <img src={(entrepreurskiil)} className="w-[500px] h-[300px]"></img>
            <img src={(belajarprojek)} className="w-[500px] h-[300px]"></img>
            <img src={(literasi)} className="w-[500px] h-[300px]"></img>
            <img src={(hariberniaga)} className="w-[500px] h-[300px]"></img>
        </div>
    </div>

    <div className="closing-cta mt-20 mb-52 ml-56 mr-40 justify-center align-center rounded-2xl">
          <div className="ml-10 pt-10 text-left">
          <h1 className="h1-cta font-bold text-3xl mb-5 pb-">Hubungi Kami Segera</h1>
          <p className="p-cta font-bold">Untuk informasi lebih lanjut.</p>
          <a href="https://wa.me/6281388230020" className="btn-cta justify-center align-center flex ">
              whatsapp
          </a>
          </div>
          </div>

      <div className="mt-20">
      <Footer/>
      </div>
</section>
</div>
    )
}

export default Galery