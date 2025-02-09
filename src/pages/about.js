import React from "react";
import Footer from "../components/Footer";
import jurnalpagi from "../asset/jurnalpagi.png"
import shalatdhuha from "../asset/shalatdhuha.png"
import snacktime from "../asset/snacktime.png"
import belajarsentra from "../asset/belajarsentra.png"
import makansiang from "../asset/makansiang.png"
import Afirmasi from "../asset/Afirmasi.png"
import Murojaah from "../asset/Murojaah.png"
import siswa from "../asset/siswa.png"
import ikrar from "../asset/ikrar.png"
import logosmp from "../asset/logosmp.png"
import shalatdzuhur from "../asset/shalatdzuhur.png"
import recalling from "../asset/recalling.png"
const AboutPage = () => {
    return (
        
        <div>
        <section className="about-section h-screen">
        <div className="about w-full">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
            <img src={(logosmp)} className="logo w-28 h-28 absolute "></img>
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
              <h1 className="font-bold text-6xl pt-52 mb-6">Tentang Kami</h1>
              <p className=" font-bold text-3xl">SMP Mutiara Hati Kota Tangerang</p>
            </div>          

            <div className="about-info  bg-white justify-center ml-36 mt-20 items-center text-left pt-10 rounded-xl">
                <div className="garis w-20 h-2 bg-green-500 ml-10"></div>
                <div className="flex">
                <div className="mr-40">
                <h1 className="h1-about text-3xl font-bold pt-1 ml-10">Visi</h1>
                <p className="h1-about ml-10">Visi sekolah adalah Terwujudnya Tunas Bangsa yang Bertaqwa, Cerdas, dan 
                  Mandiri yang mampu Berkontribusi Secara Global.</p>
                </div>
                <div className="">
                <h1 className="h1-about text-3xl font-bold pt-1 ">Misi</h1>
                <p className="h1-about">Membangun Khalifah yang Beriman, Bertakwa dan Berakhlak Mulia 
                  Berkualifikasi Fii Dunya Wal Akhirah.
                </p>
                </div>
                </div>
            </div>
            </div>
      
      </section>

      <section className="about-section-info w-full h-screen">
        <div className="text-center">
            <h1 className="h1-about font-bold text-3xl pt-20"> Kegiatan Kami</h1>
        </div>

        <div className="order flex justify-center items-center flex-wrap gap-6">
                <div className="order-about text-left">
                  <img src={(jurnalpagi)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Jurnal Pagi</h1>
                  <p className="mt-6">Jurnal pagi adalah kegiatan yang dilakukan di sekolah sebagai pembuka 
                  pembelajaran, di mana anak menuangkan isi pikiran dan perasaannya dalam bentuk gambar atau coretan. 
                  Jurnal pagi merupakan bagian dari kegiatan circle-time dalam konsep Beyond Centers and Circle Time (BCCT)
                  </p>
                </div>
                <div className="order-about text-left">
                <img src={(ikrar)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Ikrar</h1>
                  <p className="mt-6">Ikrar adalah janji yang sungguh-sungguh, pengakuan, atau pemberitahuan yang 
                    diberikan oleh seseorang. Kata "ikrar" berasal dari bahasa Arab yang artinya memutuskan, mengambil 
                    keputusan, atau menyatakan.</p>
                </div>
                <div className="order-about text-left">
                <img src={(Afirmasi)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Afirmasi</h1>
                  <p className="mt-6"> pernyataan positif yang digunakan untuk memengaruhi pikiran bawah sadar seseorang. 
                    Pernyataan ini dirancang untuk menciptakan perubahan positif dalam cara seseorang berpikir, merasa, 
                    dan bertindak.></p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                <img src={(shalatdhuha)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Shalat Dhuha & Dzikir Asmaul Husna</h1>
                  <p className="mt-6">Membiasakan shalat Dhuha dan membaca Asmaul Husna dapat meningkatkan keimanan 
                    dan ketaqwaan dan Membiasakan shalat Dhuha dan membaca Asmaul Husna dapat membentuk karakter yang baik.</p>
                </div>
                <div className="order flex justify-center items-center flex-wrap gap-6">
               <div className="order-about text-left mt-[-50px]">
                <img src={(snacktime)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Snacktime</h1>
                  <p className="mt-6">Snack Time kegiatan makan makanan ringan yang dilakukan secara berjama'ah, yang didalamnya ada banyak sekali pembelajaran berharga yang dapat menjadi pijakan bagi sang anak.</p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                <img src={(belajarsentra)} className="mb-10"></img>                  
                <h1 className="cardText font-bold text-2xl">Belajar Sentra</h1>
                  <p className="mt-6">Belajar sentra adalah model pembelajaran yang menggunakan sentra dan lingkaran sebagai sarana belajar. Model ini menekankan pada aktivitas eksplorasi lingkungan</p>
                </div>
            </div>
                <div className="order-about text-left">
                  <img src={(shalatdzuhur)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Shalat Dzuhur </h1>
                  <p className="mt-6">Sholat dhuhur berjamaah melatih siswa untuk lebih sabar, iktiar, dan tawakal kepada Allah SWT. dalam menghadapi dan melewati ujian dalam menuntut ilmu. 
                  </p>
                </div>
                <div className="order-about text-left">
                <img src={(makansiang)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Makan Siang</h1>
                  <p className="mt-6">Meningkatkan kesehatan Makanan bergizi yang dikonsumsi anak-anak dapat meningkatkan daya tahan tubuh dan mengurangi risiko penyakit. 
Meningkatkan prestasi belajar dan Asupan gizi yang cukup dan seimbang dapat meningkatkan daya pikir dan konsentrasi anak.</p>
                </div>
                <div className="order-about text-left">
                <img src={(Murojaah)} className="mb-12"></img>
                  <h1 className="cardText font-bold text-2xl">Murojaah</h1>
                  <p className="mt-6"> Murojaah dilakukan Oleh Siswa SMP Mutiara Hati dilaksankan pada siang hari tujuannya untuk Menjaga hafalan agar tidak mudah hilang karena lupa, Memperkuat pemahaman terhadap materi yang telah dipelajari, Membantu memperbaiki pemahaman dalam tajwid, Membantu meningkatkan daya ingat.></p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                <img src={(recalling)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Recalling dan Pulang</h1>
                  <p className="mt-6">Recalling adalah kegiatan harian di akhir pembelajaran. Anak-anak dan guru duduk melingkar di karpet, atau duduk di kursi yang ditata sedemikian rupa agar semua bisa saling menatap. Satu per satu, “dimoderatori” guru, anak bergiliran menceritakan pengalamannya selama belajar hari itu.</p>
                </div>
                </div>
            <div className="closing-first flex items-center mb-40">
            <div className="img-logo">
                <img className="w-[500px] h-[800px] mr-20" src={(siswa)} alt="siswa" />
            </div>
            <div className="text-logo mr-20 mt-[-400px]">
                <h1 className="text-5xl font-bold mb-6 mt-[-100px]">Kenapa Memilih Kami ?</h1>
            <div className="list-card bg-white w-[450px] h-[460px] absolute mt-20">
                <ul className="list">
                    <li className="list-li mt-6">
                        <p className="py-2 mx-4 font-bold">✓  Kekhasan Kami</p>
                        <p className="keterangan hidden hover:block ml-[40px]">
                        <p className="py-2 mx-4 font-bold">1. 20 Sikap Mulia</p>  
                        <p className="py-2 mx-4 font-bold">2.Belajar Melalui Projek</p>
                        <p className="py-2 mx-4 font-bold">3.AQSHO Curriculumn + Curr Nasional</p>
                        <p className="py-2 mx-4 font-bold"> 4.Feel Like  Homel</p>
                        <p className="py-2 mx-4 font-bold">5.Dicipline with love (Membangun aturan dengan sayang)</p>
                        <p className="py-2 mx-4 font-bold"> 6.Curricular domain (Membangun 6 domain berpikir= Estetik, afeksi, kognisi, fisik, bahasa dan sosial)</p>
                        <p className="py-2 mx-4 font-bold"> 7.Multiple Intelligence (Membangun semua kecerdasan jamak)</p>
                        <p className="py-2 mx-4 font-bold"> 8.Evaluasi  Harian (Diskusi dan refleksi setelah  mengajar)</p>
                        <p className="py-2 mx-4 font-bold">  9.Sabtu Berkarya (Kegiatan pengembangan diri)</p>
                        <p className="py-2 mx-4 font-bold">  10,TFP ( Term Fact Principle) (Materi disusun dari berbagai  Al Qur an , hadist dan referensi).</p></p>
                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Tenaga Pendidikan Berkualitas</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami memiliki tim guru yang berpengalaman dan berkualifikasi tinggi dalam bidangnya. Para guru tidak hanya berperan sebagai pengajar, tetapi juga sebagai pembimbing dan motivator yang membantu siswa mencapai potensi maksimal mereka.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Kurikulum Kami</p>
                        <p className="keterangan hidden hover:block ml-[40px]">
                        <p className="py-2 mx-4 font-bold">1.Kurikulum yang digunakan adalah kurikulum domain dan tahapan perkembangan.</p>
                        <p className="py-2 mx-4 font-bold">2.Kurikulum ini diadopsi dari Creative Scholl Florida AS yang dikembangkan oleh Prof.Pamela Phelps,P.hd.</p>
                        <p className="py-2 mx-4 font-bold">3.Kurikulum sekolah diperkaya dengan pembangunan akhlak mulia sesuai Al - Qur'an dan teladan Rasulullah SAW.</p>
                        <p className="py-2 mx-4 font-bold">4.Kurikulum sekolah adalah perpaduan AQSHO Curiculum (Al-Qur'an - Sunnah - Habbit - Otak) dengan kurikulum Nasional.</p>      </p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Lingkungan Belajar yang Mendukung</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami menciptakan lingkungan yang aman, nyaman, dan inklusif, di mana setiap siswa merasa diterima dan dihargai. Kami juga menyediakan layanan konseling untuk mendukung kesejahteraan emosional dan mental siswa.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Banyaknya Ekstrakurikuler</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Sekolah kami menawarkan berbagai kegiatan ekstrakurikuler, mulai dari olahraga, seni, musik, hingga klub sains dan debat. Kegiatan ini dirancang untuk mengembangkan keterampilan sosial, kepemimpinan, dan kreativitas siswa.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Komitmen terhadap Teknologi</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami selalu mengintegrasikan teknologi terbaru dalam proses belajar mengajar. Dengan akses ke perangkat dan software modern, siswa kami siap menghadapi era digital dengan percaya diri.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Layanan Kami</p>
                        <p className="keterangan hidden hover:block ml-[40px]">
                        <p className="py-2 mx-4 font-bold">1. Satu Kelas maks 15 Siwa.</p>
                        <p className="py-2 mx-4 font-bold">2.Ruang kelas ber-AC</p>
                        <p className="py-2 mx-4 font-bold">3.Tahsin metode UMMI</p>
                        <p className="py-2 mx-4 font-bold">4.Program Tahfidz</p>
                        <p className="py-2 mx-4 font-bold">5.Boarding Week</p>
                        <p className="py-2 mx-4 font-bold">6.Kelas Inpirasi & Kelas Wirausaha</p>
                        <p className="py-2 mx-4 font-bold">7.Ekspedisi (National/Internasional)</p>
                        <p className="py-2 mx-4 font-bold">8.Olahraga Sunnah Rasul</p>
                        <p className="py-2 mx-4 font-bold">9.Parenting PPOT, Konsultasi Psikolog</p>
                        </p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ After Class Program</p>
                        <p className="keterangan hidden hover:block ml-[40px]">
                        <p className="py-2 mx-4 font-bold">1.Tahfidz</p>
                        <p className="py-2 mx-4 font-bold">2.Taekwondo</p>
                        <p className="py-2 mx-4 font-bold">3.Panca Silat</p>
                        <p className="py-2 mx-4 font-bold">4.Basket</p>
                        <p className="py-2 mx-4 font-bold">5.Futsal</p>
                        <p className="py-2 mx-4 font-bold">6.Badminton</p>
                        <p className="py-2 mx-4 font-bold">7.English Club</p>
                        <p className="py-2 mx-4 font-bold">8.Math Club</p>
                        <p className="py-2 mx-4 font-bold">9.Secience Club</p>
                        <p className="py-2 mx-4 font-bold">10.Theatre and Poem Club</p>

                        </p>
                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Lokasi Strategis</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Sekolah kami terletak di lokasi yang mudah diakses, baik oleh transportasi umum maupun kendaraan pribadi, memudahkan siswa dan orang tua dalam menjangkau sekolah.</p>

                    </li>
                   
                </ul>
            </div>
            </div>


            </div>

            <div className="closing-cta mt-20 mb-52 ml-56 mr-40 justify-center align-center bg-white rounded-2xl">
          <div className="ml-10 pt-10 text-left">
          <h1 className="h1-cta font-bold text-3xl mb-5 pb-">Hubungi Kami Segera</h1>
          <p className="p-cta font-bold">Untuk informasi lebih lanjut.</p>
          <a href="https://wa.me/6281388230020" className="btn-cta justify-center align-center flex ">
              Whatsapp
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

export default AboutPage