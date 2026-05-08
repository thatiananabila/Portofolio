export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-4">
        Thatiana Nabila
      </h1>

      <p className="text-gray-400 mb-10">
        Information Systems Student
      </p>

      <div className="grid gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            About Me
          </h2>

          <p>
            Mahasiswa Sistem Informasi yang tertarik pada
            pengembangan sistem dan ERP.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            Skills
          </h2>

          <p>
            React, MySQL, ERP, PowerBuilder
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            Projects
          </h2>

          <p>
            Quality Checking ERP System
          </p>
        </div>
      </div>
    </div>
  )
}