import * as React from "react"
import Footer from "../components/Footer"
import image2 from "../asset/logosmp.png"
import animasismp2 from "../asset/animasismp2.png"
import perpustakaan from "../asset/ruangperpustakaan.png"
import laboratorium from "../asset/ruanglaboratium.png"
import tempatshalat from "../asset/tempatshalatsmp.png"
import ruangbelajar from "../asset/ruangbelajar.png"
import ruanguks from "../asset/ruangukssekolah.png"
import lapangan from "../asset/lapangansekolahsmp.png"
import prestasi1 from "../asset/JuaraIItaekwondo.png"
import prestasi2 from "../asset/prestasi.png"
import prestasismp from "../asset/prestasismp.png"
import prestasi4 from "../asset/prestasi4.png"
import prestasi5 from "../asset/prestasi5.png"
import prestasi6 from "../asset/prestasi6.png"
import sman1 from "../asset/sman1.png"
import sman2 from "../asset/sman2.png"
import sman7 from "../asset/sman7.png"  
import man1 from "../asset/man1.png" 
import islamik from "../asset/islamik.png"   
import smadarultauhid from "../asset/smadarultauhid.png" 
import smasyafana from "../asset/smasyafana.png" 
import smathi from "../asset/smathi.png" 
// import Header from "../components/Header"

const IndexPage = () => {
  // const initSlider = () => {


    
  //   const imageList = document.querySelector(".slider-wrapper .image-list")
  //   const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button")
  
  // slideButtons.forEach(button => {
  // button.addEventListener("click", () => {
  //   const direction = button.id === "prev-slide" ? -1 : 1;
  //   const scrollAmount = imageList.clientWidth * direction;
  //   imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
  // });
  // });
  // }
  
  // window.addEventListener("load", initSlider);
    return (
   
    // Section home
    <div>
      <section className="home w-screen h-screen">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
          </a>
          <div></div>
          <nav className="navbar">
            <ul className="relative text-black mt-5">
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
              <a className="tombol_menu absolute text-black w-40 h-14 justify-center flex items-center" 
              href="https://wa.me/6288212743988">Daftar Sekarang<i class='bx bxl-whatsapp'></i></a>
          
      
      </section>


      {/* SECTION ALASAN */}

      <section className="alasan-section" id="alasan-section">
            <div className=" justify-center flex ">
              <h1 className=" mt-40 text-4xl font-bold">Kenapa Harus SMP Mutiara Hati ?</h1>
            </div>

            <div className="card flex justify-center items-center flex-wrap gap-8">
                <div className="cardBox text-left">
                  <p className="cardText font-bold">Kegiatan Pembelajaran Projek</p>
                  <p className="mt-6">Sekolah kami kegiatan pembelajaran melalui projek Pembelajaran 
                    berbasis proyek (project based learning) adalah metode pembelajaran yang menggunakan 
                    proyek sebagai media untuk mencapai tujuan pembelajaran. Dalam pembelajaran ini, peserta didik 
                    terlibat secara aktif dalam proses pembelajaran, mulai dari awal hingga akhir. ...</p>
                </div>
                <div className="cardBox text-left">
                  <h1 className="cardText font-bold">Fokus Tahap perkembangan Anak</h1>
                  <p className="mt-6">Sekolah kami Pada usia SMP (sekitar 12-15 tahun), anak berada dalam fase 
                    perkembangan yang dikenal sebagai masa remaja awal. Tahap ini ditandai dengan perubahan signifikan dalam aspek fisik, emosional, sosial, dan intelektual. dan Fokus tahap perkembangan anak SMP Mutiara Hati adalah menciptakan lingkungan yang mendukung pertumbuhan mereka secara holistik. Sekolah, orang tua, dan masyarakat perlu bekerja sama untuk memastikan bahwa anak-anak dapat berkembang dengan optimal sesuai dengan potensi mereka...</p>
                </div>
                <div className="cardBox text-left">
                  <h1 className="cardText font-bold">Regulasi diri</h1>
                  <p className="mt-6">Sekolah kami  kemampuan dalam mengontrol, mengatur, merencanakan, mengarahkan, dan memonitor perilaku untuk mencapai suatu tujuan tertentu dengan menggunakan strategi tertentu dan melibatkan unsur fisik, kognitif, motivasi, emosional, dan sosial.</p>
                </div>
            </div>
       
      </section>

      {/* SECTION  PRODUK*/}

    <section className="produk-section">
      <div className="justify-center items-center text-center">
        <h1 className="mt-20 mb-10 text-4xl font-bold">Fasilitas kami</h1>
        <p>Sekolah kami menyediakan fasilitas terbaik untuk mendukung proses belajar mengajar.</p>
          <p>Dengan ruang kelas yang modern,nyaman dan bersih, laboratorium lengkap, perpustakaan 
            dengan koleksi buku yang kaya, area olahraga yang luas,</p>
            <p>serta teknologi terkini, kami memastikan siswa memiliki lingkungan yang kondusif untuk belajar dan berkembang.</p>
        <p>Fasilitas-fasilitas ini dirancang untuk memberikan kenyamanan dan kemudahan bagi siswa 
          dalam mengeksplorasi dan mengembangkan potensi mereka secara maksimal.</p>
           <p>Bergabunglah dengan kami dan rasakan manfaat dari fasilitas unggulan kami!




</p>
      </div>

      <div className="card mt-10 flex justify-center items-center text-center flex-wrap gap-4">
                <a href="../pasir/pasirCor" className="cardProduk rounded-2xl">
                  <img src={(lapangan)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../batu/batuBataMerah" className="cardProduk rounded-2xl">
                  <img src={(perpustakaan)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../pasir/pasirRangkas" className="cardProduk rounded-2xl">
                  <img src={(laboratorium)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../batu/batuSirdam" className="cardProduk rounded-2xl">
                  <img src={(tempatshalat)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../batu/batuScreening" className="cardProduk rounded-2xl">
                  <img src={(ruangbelajar)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../batu/batuS  k" className="cardProduk rounded-2xl">
                  <img src={(ruanguks)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                {/* <a href="../pasir/abuBatu" className="cardProduk rounded-2xl">
                  <img src={(produk6)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../pasir/pasirBangka" className="cardProduk rounded-2xl">
                  <img src={(produk7)} className="img-produk w-full h-full rounded-3xl"></img>
                </a> */}


            </div>
                {/* <div className=" justify-center items-center flex mt-10 mb-10">
                  <a href="/batu" className="btn-produk flex justify-center items-center text-center w-40 h-16 rounded-3xl text-white">
                    EXPLORE MORE
                  </a>
              </div> */}
    </section>

    {/* SECTION CLOSING */}

    <section className="closing"> 
    <div className="closing-first flex items-center">
      <div className="img-logo">
        <img className="w-40 h-40 mt-5 mb-5 ml-28 mr-28 rounded-2xl" src={(image2)} alt="Gambar" />
      </div>
      <div className="text-logo mr-52">
        <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
        <p><b>SMP Mutiara Hati </b>berada di bawah Naungan Yayasan Mutiara Hati
        Lebih dari 10 Tahun ikut membangun pondasi pendidikan di Kota Tangerang.</p>
        <p>Lahir SMP Mutiara tak lepas dari kepercayaan orang tua yang telah bersama kami mendampingi perkembangan anak - anak di jenjang sebelumnya</p>
        <p>SMP Mutiara Hati Concern dalam pembentukan akhlak yang disarikan dari 99 Asmaul Husna</p>
      </div>
    </div>
    <div className="text-produk justify-center item-center text-center">
        <h1 className="text-4xl font-bold mt-20 ">Prestasi</h1>
      </div>

    <div className="body-slide flex items-center justify-center">
      <div className="container-slide ">
          <div className="slide-wrapper">
            {/* <button id="prev-slide" className="slide-button material-symbols-rounded text-4xl">◂</button> */}
            <div className="image-list grid">
              <div className="image-item">
                <img src={(prestasi1)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi2)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasismp)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi1)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi5)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi6)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi1)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi2)} className="" ></img>
              </div>
            </div>
            {/* <button id="next-slide" className="slide-button material-symbols-rounded text-4xl">▸</button> */}

            {/* <div className="slider-scrollbar h-[24px] w-full flex items-center">
              <div className="scrollbar-track h-[2px] w-full relative bg-white rounded-md">
                <div className="scrollbar-thumb h-full w-[50%] absolute bg-white "></div>
              </div>
            </div> */}
          </div>
      </div>
      </div>  

      <div className="card-closing mt-[-100px] flex justify-center items-center text-center flex-wrap gap-4">
                {/* <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk2)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk3)} className="img-produk w-full h-full rounded-2xl"></img>
                </a> */}

        <div className="closing-cta mt-[-150px] mb-52 ml-56 mr-40 justify-center align-center bg-white rounded-2xl">
          <div className="ml-10 pt-10 text-left">
          <h1 className="h1-cta font-bold text-3xl mb-5 pb-">Hubungi Kami Segera</h1>
          <p className="p-cta font-bold">Untuk informasi lebih lanjut.</p>
          <a href="https://wa.me/6288212743988" className="btn-cta justify-center align-center flex ">
              whatsapp
          </a>
          </div>
        </div>
        </div>

        <div className="text-cus justify-center item-center text-center">
          <h1 className="text-4xl font-bold mt-20 ">Lulusan SMP Mutiara Hati Masuk 
            SMA Favorit Atau Unggul Diantaranya Adalah:</h1>
        </div>

        <div className="closing-customer flex justify-center items-center text-center flex-wrap gap-4">
          <div className="card-customer">
             <img src={(sman1)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(sman2)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(sman7)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(man1)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(islamik)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(smadarultauhid)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(smasyafana)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(smathi)} className="img-customer w-full h-full"></img>
          </div>



        </div>
    


    </section>

    <Footer/>
    </div>

    

  )
}


 


export default IndexPage

export const Head = () => <title>SMP Mutiara Hati</title> 
