import foto from './assets/Thatiana.png'
import warungnasi from './assets/UMKM.png'
import rumahsakit from './assets/rumahsakit.png'
import dentalcare from './assets/dental.png'

export default function App() {
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
            Mobile Design
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
        className="w-full h-52 object-cover"
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

    {/* DENTAL CARE */}
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-[32px] overflow-hidden hover:-translate-y-2 transition duration-300 hover:border-rose-300">

      <img
        src={dentalcare}
        alt="Dental Care"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <p className="text-rose-300 text-sm mb-3">
          UI DESIGN
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Dental Care App
        </h3>

        <p className="text-zinc-400 mb-6">
          Modern dental clinic mobile interface with clean healthcare design.
        </p>

        <div className="flex gap-3 flex-wrap mb-6">
          <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
            Figma
          </span>

          <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
            UI Design
          </span>
        </div>

        <a
          href="https://www.figma.com/proto/7sdt7BtIdlq5acd3Q2mYCm/LSP---Klinik-Dental-Senyum---Tim-4?node-id=109-95&p=f&t=HPs2OBkT2WjB4NMk-1&scaling=min-zoom&content-scaling=fixed&page-id=108%3A12"
          target="_blank"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold"
        >
          View Design
        </a>
      </div>
    </div>

  </div>
</section>

      {/* CERTIFICATES */}
      <section className="px-8 md:px-20 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Certificates</h2>
          <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'UI/UX Design Fundamentals',
              issuer: 'Coursera',
            },
            {
              title: 'React Web Development',
              issuer: 'Dicoding',
            },
            {
              title: 'Database Management',
              issuer: 'MySkill',
            },
          ].map((cert) => (
            <div
              key={cert.title}
              className="bg-zinc-900 border border-zinc-800 rounded-[28px] overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-rose-500/20 to-red-500/20 flex items-center justify-center text-zinc-500 text-sm">
                Certificate Preview
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  {cert.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-4">
                  {cert.issuer}
                </p>

                <button className="text-rose-300 hover:text-red-300 transition">
                  View Certificate →
                </button>
              </div>
            </div>
          ))}
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
