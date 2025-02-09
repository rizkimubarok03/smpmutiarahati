import React from "react";
import logo from "../asset/logosmp.png"
import blog1 from "../asset/pramuka.png"
import blog2 from "../asset/blog2.webp"
import blog3 from "../asset/ldkqsmp.png"
import blog4 from "../asset/blog4.jpg"
import Footer from "../components/Footer";
import wisudatahfidz from "../asset/wisudatahfidz.jpg";
import ekspedisi from "../asset/ekspedisi.jpg";


const Blog = () => {
    return (
        <div>
        <section className="h-screen">
        <div className="about w-full">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
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
              <h1 className="font-bold text-6xl pt-52 mb-6">Kegiatan </h1>
            </div>          
        </div>

        <div className="blog text-center pt-20 text-blue-950">
            <h1 className="text-5xl font-bold mb-10">SMP Mutiara Hati Kota Tangerang</h1>
        <div className="flex mx-16 text-left">
           <div>
           </div>
            <p className=" text-center pb-10">Selamat datang di <b>SMP Mutiara Hati</b> berada di bawah Naungan Yayasan Mutiara Hati
            Lebih dari 10 Tahun ikut membangun pondasi pendidikan di Kota Tangerang, Lahir SMP Mutiara tak lepas dari kepercayaan orang tua yang telah bersama kami mendampingi perkembangan anak - anak di jenjang sebelumnya dan 
            <p></p>SMP Mutiara Hati Concern dalam pembentukan akhlak yang disarikan dari 99 Asmaul Husna</p>    
        </div>
           <div>
            <p className="text-left ml-[70px]">Our Specialty :
               </p>
            </div>
            <div className="flex">
              <div className="mx-10">
                <p className="">
                  <li className="text-left ml-8">Belajar melalui kerja/projek sesuai Tema.</li>
                  <li className="text-left ml-8">STEAM Project Based Learning
                  </li>
                  <li className="text-left ml-8">Multiple Intelligences</li>
                  <li className="text-left ml-8">Individual Curriculum.</li>
                  <li className="text-left ml-8">Bahasa Arab & Bahasa Inggris.</li>
                
                </p>
              </div>
              <div className="mx-10">
                  <li className="text-left ml-8">Discipline With Love</li>
                  <li className="text-left ml-8">Entrepreneur Skill.</li>
                  <li className="text-left ml-8">Literasi dan Numerasi.</li>
                  <li className="text-left ml-8">21 Century Learning.</li>
                  <li className="text-left ml-8">Puncak Tema.</li>

              </div>
              <div className="mx-10">
              <li className="text-left ml-8">Pembiasaan Sholat Dhuha dan Asmaul Hunsna</li>
                  <li className="text-left ml-8">Pembiasaan Sholat Dzuhur Berjamaah</li>
                  <li className="text-left ml-8">Pembiasaan Pola Makan Gizi Seimbang</li>
        

              </div>
            </div>
        </div>
        
        

            <div className="blog-img mt-5 pt-20 flex justify-center items-center flex-wrap gap-8">
                <div className="cardBox-blog text-left">
                  <img src={(blog1)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold mb-8">KEGIATAN PERKEMAHAN ANAK SHOLEH</h1>
                  <p className="">Kegiatan dilakukan oleh siswa/siswi SMP Mutiara Hati
                  kegiatan perkemahan anak sholeh selama dua hari, hari sabtu sampai hari miggu untuk mengembangkan
                 kemandirian, kerja sama,bertanggung jawab dan kemimpinan.</p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(wisudatahfidz)} className="mb-10 mt-[-110px]"></img>
                  <h1 className="cardText font-bold mb-8">WISUDA TAHFID</h1>
                  <p className="">Program Tahfidzul Qur'an di SMP Mutiara Hati merupakan bagian dari upaya kami dalam membentuk generasi Islami yang cerdas, berkarakter, dan berakhlak mulia. Wisuda tahfidz ini menjadi momentum istimewa untuk merayakan capaian luar biasa para siswa yang telah menghafal ayat-ayat suci Al-Qur'an.
                  </p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(blog3)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold">KEGIATAN LDKQ</h1>
                  <p className="mt-6">Kegiatan SMP Mutiara Hati berkomitmen untuk membentuk generasi muda yang tidak hanya cerdas secara akademik tetapi juga memiliki jiwa kepemimpinan yang kuat dan berlandaskan nilai-nilai Qur’ani. Oleh karena itu, sekolah menyelenggarakan Latihan Dasar Kepemimpinan dan Qur’an (LDKQ) sebagai program pembinaan bagi para siswa agar memiliki karakter kepemimpinan yang amanah, tangguh, dan berakhlak mulia.</p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(ekspedisi)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold">EKPEDISI (NASIONAL/INTERNATIONAL)</h1>
                  <p className="mt-6">Program Ekspedisi Nasional dan Internasional SMP Mutiara Hati adalah salah satu upaya kami untuk memberikan pengalaman belajar yang melampaui batas kelas. Melalui perjalanan edukatif ini, siswa mendapatkan kesempatan untuk:
                  <p className="mt-6">1.Mengenal budaya, sejarah, dan tradisi di berbagai daerah dan negara.</p>
                  <p className="mt-6">2.Memperkuat kemampuan komunikasi dan adaptasi dalam lingkungan global.</p>
                  <p className="mt-6">3.Meningkatkan kesadaran sosial melalui kegiatan kolaboratif dan kunjungan edukatif.</p>
.</p>
                </div>
            </div>
        
            <Footer/>
        </section>

       </div>
    )
}

export default Blog