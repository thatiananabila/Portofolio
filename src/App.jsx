import foto from './assets/Thatiana.png'

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
              Information Systems student passionate about ERP systems,
              UI/UX design, and modern web development.
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
      <section className="px-8 md:px-20 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            'React JS',
            'MySQL',
            'ERP System',
            'UI/UX Design',
            'PowerBuilder',
            'Tailwind CSS',
            'JavaScript',
            'Figma',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:-translate-y-2 transition duration-300 hover:border-rose-300"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-8 md:px-20 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="h-[1px] bg-zinc-800 flex-1 ml-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[32px] p-8 hover:scale-[1.02] transition duration-300 shadow-xl">
            <p className="text-rose-300 text-sm mb-4">ERP SYSTEM</p>

            <h3 className="text-2xl font-bold mb-4">
              Quality Checking ERP
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              A quality control management system designed to streamline
              inspection and reporting processes within ERP workflows.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                React
              </span>

              <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                MySQL
              </span>

              <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                ERP
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[32px] p-8 hover:scale-[1.02] transition duration-300 shadow-xl">
            <p className="text-red-300 text-sm mb-4">UI/UX</p>

            <h3 className="text-2xl font-bold mb-4">
              Modern Dashboard Design
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              A responsive dashboard interface concept focused on usability,
              clean layout, and modern aesthetics.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                Figma
              </span>

              <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                UI Design
              </span>

              <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                Prototype
              </span>
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
