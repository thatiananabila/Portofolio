import { useState } from 'react'

import gmuCert from './assets/certificates/gmu.png';
import gaoCert from './assets/certificates/gao.png';
import lspCert from './assets/certificates/lsp.png';
import oracleCert from './assets/certificates/oracle.png';
import sqlCert from './assets/certificates/sql.png';
import courseraCert from './assets/certificates/coursera.png';
import dicodingCert from './assets/certificates/dicoding.png';
import fundaWebCert from './assets/certificates/funda-web.png';

import foto from './assets/Thatiana.png'
import warungnasi from './assets/UMKM.png'
import rumahsakit from './assets/rumahsakit.png'
import dentalcare from './assets/dental.png'
import erp1 from './assets/qip-form.png'
import erp2 from './assets/qip-record.png'
import erp3 from './assets/qip-report.png'
import erp4 from './assets/qip-print.png'

const erpImages = [erp1, erp2, erp3, erp4]
export default function App() {
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120809] via-[#2a1013] to-[#14090b] text-white overflow-hidden">
      {/* HERO */}
      <section className="px-8 md:px-20 pt-24 pb-20 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-14">
          <div className="max-w-2xl">
            <p className="text-rose-300 mb-4 tracking-[0.3em] uppercase text-sm">
              Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Thatiana Nabila
              <br />
              Maritza Patra
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
              Transforming ideas into modern and impactful digital experiences.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
                View Projects
              </button>

              <button className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900 transition duration-300">
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-red-400 rounded-[40px] blur-2xl opacity-40" />

            <img
              src={foto}
              alt="profile"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-[40px] border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 md:px-20 py-16">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-[32px] p-10 backdrop-blur-xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Mahasiswa aktif jurusan Sistem Informasi yang memiliki passion besar dalam menciptakan solusi digital yang inovatif. Memiliki ketertarikan tinggi terhadap perkembangan teknologi dan digital serta senang mengeksplorasi berbagai hal yang berkaitan dengan bidang Teknologi Informasi, khususnya analisis sistem, pengembangan solusi digital, dan desain antarmuka pengguna. Memiliki kemampuan adaptasi yang baik, semangat belajar yang tinggi, serta mampu bekerja secara individu maupun dalam tim. Aspirasi karier mencakup posisi sebagai System Analyst, IT Business Analyst, IT Project Manager, UI/UX Designer, dan QA Engineer.
          </p>
        </div>
      </section>

      {/* SKILLS */}
{/* SKILLS */}
<section className="px-8 md:px-20 py-16">
  <div className="flex items-center justify-between mb-10">
    <h2 className="text-3xl font-bold">Skills & Interests</h2>
    <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* DATABASE */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-8 hover:border-rose-300 transition duration-300">
      <div className="text-4xl mb-5">🗄️</div>

      <h3 className="text-2xl font-bold mb-4">
        Database Management
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          'MySQL',
          'Oracle (PL/SQL)',
          'SSMS',
        ].map((skill) => (
          <span
            key={skill}
            className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* DEVELOPMENT */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-8 hover:border-rose-300 transition duration-300">
      <div className="text-4xl mb-5">💻</div>

      <h3 className="text-2xl font-bold mb-4">
        Application Development
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          'PowerBuilder',
          'HTML',
          'CSS',
        ].map((skill) => (
          <span
            key={skill}
            className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* DESIGN */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-8 hover:border-rose-300 transition duration-300">
      <div className="text-4xl mb-5">🎨</div>

      <h3 className="text-2xl font-bold mb-4">
        Design Tools
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          'Canva',
          'Figma',
          'Inkscape',
        ].map((skill) => (
          <span
            key={skill}
            className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* OFFICE & ANALYTICS */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-8 hover:border-rose-300 transition duration-300">
      <div className="text-4xl mb-5">📊</div>

      <h3 className="text-2xl font-bold mb-4">
        Office & Analytics
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          'Word',
          'Excel',
          'PowerPoint',
          'Power BI',
          'Weka',
          'Jupyter Notebook',
        ].map((skill) => (
          <span
            key={skill}
            className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* SOFT SKILLS */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-8 hover:border-rose-300 transition duration-300">
      <div className="text-4xl mb-5">🧠</div>

      <h3 className="text-2xl font-bold mb-4">
        Soft Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          'Communication',
          'Time Management',
          'Analytical Thinking',
          'Leadership',
          'Teamwork',
        ].map((skill) => (
          <span
            key={skill}
            className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* INTERESTS */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] p-8 hover:border-rose-300 transition duration-300">
      <div className="text-4xl mb-5">🚀</div>

      <h3 className="text-2xl font-bold mb-4">
        Career Interests
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          'System Analyst',
          'IT Business Analyst',
          'IT Project Manager',
          'UI/UX Designer',
          'QA Engineer',
        ].map((skill) => (
          <span
            key={skill}
            className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* PROJECTS */}
<section className="px-8 md:px-20 py-16">
  <div className="flex items-center justify-between mb-10">
    <h2 className="text-3xl font-bold">Projects</h2>
    <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* WARUNG NASI */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] overflow-hidden hover:-translate-y-2 transition duration-300 hover:border-rose-300">

      <img
        src={warungnasi}
        alt="Warung Nasi"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <p className="text-rose-300 text-sm mb-3">
          UI/UX DESIGN
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Warung Nasi Ibu Wati
        </h3>

        <p className="text-zinc-400 mb-6">
          UI/UX design for UMKM food ordering system with user and admin interface.
        </p>

        <div className="flex gap-3 flex-wrap mb-6">
          <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
            Figma
          </span>

          <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
            Website Design
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.figma.com/proto/GGg1fcMc6iLgWLmRCAqTfn/Warung-Nasi-Ibu-Wati?node-id=160-290&starting-point-node-id=160%3A290&t=7AA4RDp5HOEr132q-1"
            target="_blank"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold"
          >
            User UI
          </a>

          <a
            href="https://www.figma.com/proto/GGg1fcMc6iLgWLmRCAqTfn/Warung-Nasi-Ibu-Wati?node-id=112-87&starting-point-node-id=112%3A87&t=5BUYhSGSTyFDqNGd-1"
            target="_blank"
            className="border border-zinc-700 px-5 py-2 rounded-full text-sm"
          >
            Admin UI
          </a>
        </div>
      </div>
    </div>

    {/* RUMAH SAKIT */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] overflow-hidden hover:-translate-y-2 transition duration-300 hover:border-rose-300">

      <img
        src={rumahsakit}
        alt="Rumah Sakit"
        className="w-full h-52 object-cover object-top"
      />

      <div className="p-6">
        <p className="text-rose-300 text-sm mb-3">
          MOBILE UI/UX
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Hospital Queue App
        </h3>

        <p className="text-zinc-400 mb-6">
          Mobile application design for hospital queue management system.
        </p>

        <div className="flex gap-3 flex-wrap mb-6">
          <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
            Figma
          </span>

          <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
            Prototype
          </span>
        </div>

        <a
          href="https://www.figma.com/proto/NE7HsYG4a1ByILo2tYqXqy/IMK-M12?node-id=0-1&t=H735JUvhhk3vCpTw-1"
          target="_blank"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold"
        >
          View Prototype
        </a>
      </div>
    </div>

    {/* ERP POWERBUILDER */}
<div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] overflow-hidden hover:-translate-y-2 transition duration-300 hover:border-rose-300">

  <div className="relative">
    <img
      src={erpImages[currentImage]}
      alt="ERP QC"
      className="w-full h-52 object-cover transition duration-500"
    />

    <button
      onClick={() =>
        setCurrentImage(
          currentImage === 0
            ? erpImages.length - 1
            : currentImage - 1
        )
      }
      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded-full"
    >
      ←
    </button>

    <button
      onClick={() =>
        setCurrentImage(
          currentImage === erpImages.length - 1
            ? 0
            : currentImage + 1
        )
      }
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded-full"
    >
      →
    </button>
  </div>

  <div className="p-6">
    <p className="text-rose-300 text-sm mb-3">
      ERP SYSTEM
    </p>

    <h3 className="text-2xl font-bold mb-4">
      Quality Checking ERP
    </h3>

    <p className="text-zinc-400 mb-6">
      Desktop-based ERP quality checking system developed using PowerBuilder
      for inspection, reporting, and quality control management.
    </p>

    <div className="flex gap-3 flex-wrap mb-6">
      <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
        PowerBuilder
      </span>

      <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
        SQL Server
      </span>

      <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
        ERP
      </span>
    </div>
  </div>
</div>
  </div>
</section>

      {/* CERTIFICATES */}
{/* ================= SECTION CERTIFICATES & EXPERIENCE ================= */}
<section className="px-8 md:px-20 py-20 bg-[#0a0a0a]">
  
  {/* 1. INTERNSHIP EXPERIENCE (BERDASARKAN CV) */}
  <div className="flex items-center justify-between mb-10">
    <h2 className="text-3xl font-bold text-rose-300">Internship Experience</h2>
    <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
  </div>

  <div className="grid md:grid-cols-2 gap-8 mb-20">
    {/* Card PT. Garuda Metal Utama */}
    <div className="group bg-zinc-900/40 border border-zinc-800 rounded-[32px] p-8 hover:border-rose-400/50 transition-all duration-500 hover:-translate-y-2">
      <div className="flex justify-between items-start mb-6">
        <span className="px-4 py-1 bg-rose-400/10 text-rose-400 rounded-full text-xs font-mono">Ags 2025 - Nov 2025</span>
        <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform text-xl">
          ⚙️
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-1 text-white text-[22px]">IT Support - Programmer</h3>
      <p className="text-rose-300/80 mb-4 font-medium">PT. Garuda Metal Utama</p>
      <ul className="text-zinc-400 text-sm leading-relaxed mb-8 list-disc ml-4 space-y-2">
        <li>Berkontribusi dalam digitalisasi sistem <b>Quality in Process (QiP)</b> ke sistem ERP menggunakan PowerBuilder.</li>
        <li>Membuat dashboard <i>Machine Trend</i> dan <i>Control Chart</i> untuk monitoring kualitas produksi.</li>
      </ul>
      <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-rose-300 transition">
        View Proof ↗
      </button>
    </div>

    {/* Card GAOTek Inc. */}
    <div className="group bg-zinc-900/40 border border-zinc-800 rounded-[32px] p-8 hover:border-rose-400/50 transition-all duration-500 hover:-translate-y-2">
      <div className="flex justify-between items-start mb-6">
        <span className="px-4 py-1 bg-rose-400/10 text-rose-400 rounded-full text-xs font-mono">Oct 2024 - Jan 2025</span>
        <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform text-xl">
          🚀
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-1 text-white text-[22px]">Product Sourcing - Squad Leader</h3>
      <p className="text-rose-300/80 mb-4 font-medium">GAOTek Inc. (Remote)</p>
      <ul className="text-zinc-400 text-sm leading-relaxed mb-8 list-disc ml-4 space-y-2">
        <li>Melakukan riset pasar, analisis tren industri, serta evaluasi harga dan supplier.</li>
        <li><b>Dipromosikan menjadi Squad Leader</b> untuk membimbing intern dan melaporkan kinerja tim ke manajemen.</li>
      </ul>
      <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-rose-300 transition">
        View Proof ↗
      </button>
    </div>
  </div>

  {/* 2. TOP CERTIFICATIONS - WITH PREVIEW */}
  <div className="flex items-center justify-between mb-10">
    <h2 className="text-3xl font-bold text-rose-300">Top Certifications</h2>
    <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { title: "System Analyst", issuer: "LSP Gunadarma", img: lspCert },
      { title: "Oracle Intermediate", issuer: "LEPKOM", img: oracleCert },
      { title: "SQL Server Intermediate", issuer: "LEPKOM", img: sqlCert },
      { title: "Business Analysis", issuer: "Coursera", img: courseraCert },
      { title: "Manajemen Proyek", issuer: "Dicoding", img: dicodingCert },
      { title: "Fundamental Web", issuer: "LEPKOM", img: fundaWebCert },
    ].map((cert, index) => (
      <a key={index} href={cert.img} target="_blank" rel="noreferrer" className="group bg-zinc-900/20 border border-zinc-800 rounded-2xl overflow-hidden hover:border-rose-400/30 transition">
        <div className="h-28 bg-zinc-800 overflow-hidden">
          <img src={cert.img} alt={cert.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition duration-500" />
        </div>
        <div className="p-4">
          <h4 className="font-bold text-white group-hover:text-rose-300 transition text-sm leading-tight">{cert.title}</h4>
          <p className="text-zinc-500 text-[10px] uppercase mt-1 tracking-widest">{cert.issuer}</p>
        </div>
      </a>
    ))}
  </div>

</section>


  {/* VIEW ALL BUTTON */}
  <div className="mt-12 text-center">
    <button className="text-zinc-500 hover:text-rose-300 text-sm font-medium transition flex items-center justify-center gap-2 mx-auto">
      View All 15+ Certificates <span className="text-lg">→</span>
    </button>
  </div>

</section>


      {/* CONTACT */}
      <section className="px-8 md:px-20 py-24">
        <div className="bg-gradient-to-r from-purple-300/10 to-blue-300/10 border border-zinc-800 rounded-[40px] p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Feel free to contact me for collaborations, internships, or
            creative projects.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
              Email Me
            </button>

            <button className="border border-zinc-700 px-8 py-3 rounded-full hover:bg-zinc-900 transition duration-300">
              GitHub
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
