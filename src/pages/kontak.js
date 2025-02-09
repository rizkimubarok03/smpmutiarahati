import React from "react";
import image1 from "../asset/logosmp.png"
import Footer from "../components/Footer";

const Kontak = () => {
    return (
        <div>
        <section className="about-section h-screen">
        <div className="about w-full">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
            <img src={(image1)} className="logo w-24 h-24 absolute "></img>
          </a>
          <div></div>
          <nav className="navbar">
            <ul className="relative text-white mt-5">
              <li className="list"><a href="/">Home</a></li>
              <li className="list"><a href="/about">Tentang Kami</a></li>
              {/* <li className="list"><a href="/">Produk ▾</a>
               <ul className="">
                <li className="produk"><a href="/batu">Batu</a></li>
                <li className="produk"><a href="/pasir">Pasir</a></li>
               </ul>
              </li> */}
              <li className="list"><a href="/kontak">Kontak</a></li>
              <li className="list"><a href="/blog">Blog</a></li>
             
                <button>
                  <li><a className="galery" href="/galery">History</a></li>
                </button>
             
            </ul>

          </nav>
        </div>
            <div className="about-text justify-center text-center text-white">
              <h1 className="font-bold text-6xl pt-52 mb-6">Kontak Kami</h1>
              {/* <p className=" font-bold text-3xl">Sumber Pasir</p> */}
            </div>          
        </div>

        <div className=" justify-between flex mx-36 mt-20 font-bold text-3xl text-blue-950">
          <h1>Konsultasi Sekarang</h1>
          <h1>Get In Touch</h1>
        </div>

      <div className="konsultasi w-full h-screen pt-20">
        <div className="flex items-center bg-white mx-20 mb-40 py-10 rounded-xl">
      <form className="">
        <input type="text" placeholder="Your Name*" className=" border border-gray-300 py-2 w-[300px] ml-10 pl-3 my-3 bg-slate-50"></input>
        <input type="text" placeholder="Your Name*" className=" border border-gray-300 py-2 w-[300px] ml-10 pl-3 my-3 bg-slate-50"></input>
        <textarea name="comment" id="comment" placeholder="Your Message*" required className=" border border-gray-300 py-2 w-[300px] ml-10 pl-3 my-3 bg-slate-50 h-[200px]"></textarea>
        <button type="submit" className=" border border-gray-300 py-3 w-[150px] ml-10 my-3 text-white rounded-xl">Submit</button>
      </form>

      <div className="mx-10">
      <iframe width="400" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63465.88343454805!2d106.5644745216797!3d-6.181891899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8d622537013%3A0x855df29ea63f204c!2sSekolah%20Mutiara%20Hati%20Kota%20Tangerang!5e0!3m2!1sid!2sid!4v1738730863687!5m2!1sid!2sid">
      <a href="https://maps.app.goo.gl/hq5DJBGvFPyehND18" className="gmaps">gps tracker sport</a></iframe>
      </div>

      <div className="mr-10 text-blue-950">
                <p className="font-bold text-2xl text-blue-950 mb-8">Reach Us</p>
              <div className="">
                <p className="my-3">🏢 Jl. Mawar No. 41 - 42 Rt. 002/001 Kavling Sukasari Tangerang 15118 Kota Tangerang Provinsi – Banten</p>
                <p className="my-3">✉️ smpmutiarahatikotatangerang@gmail.com </p>
                <p className="my-3">📱  088212743988 </p>
                <p className="my-3">📞 088212743988 </p>
                <a href="https://wa.me/6289652512837" className="">
                <h1 className="konsultasi-cta text-white py-3 px-3 w-[175px] mt-10 rounded-xl text-center">Hubungi Sekarang</h1>
                </a>
              </div>
                <p className="mt-20 text-blue-950"><b>SMP Mutiara Hati </b>berada di bawah Naungan Yayasan Mutiara Hati
         Lebih dari 10 Tahun ikut membangun pondasi pendidikan di Kota Tangerang, Lahir SMP Mutiara tak lepas dari kepercayaan orang tua yang telah bersama kami mendampingi perkembangan anak - anak di jenjang sebelumnya,SMP Mutiara Hati Concern dalam pembentukan akhlak yang disarikan dari 99 Asmaul Husna </p>
        </div>
      </div>
      </div>

      <div className="closing-cta mt-20 mb-52 ml-56 mr-40 justify-center align-center rounded-2xl">
          <div className="ml-10 pt-10 text-left">
          <h1 className="h1-cta font-bold text-3xl mb-5 pb-">Hubungi Kami Segera</h1>
          <p className="p-cta font-bold">Untuk informasi lebih lanjut.</p>
          <a href="https://wa.me/6288212743988"className="btn-cta justify-center align-center flex ">
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


export default Kontak