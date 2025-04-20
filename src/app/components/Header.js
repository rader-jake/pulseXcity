import Link from "next/link"


export default function Header() {

return (
<header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo / Brand */}
    <h1 className="text-2xl font-bold text-white tracking-tight">
      pulse <span className="text-orange-400">X</span> city
    </h1>

    {/* Nav Links */}
    <nav className="flex items-center space-x-6">
      <a
        href="#"
        className="text-white/80 hover:text-orange-300 transition font-medium"
      >
        Events
      </a>
      <Link href="/map" className="text-white/80 hover:text-orange-300 transition font-medium">
  Map
</Link>
      <a
        href="#"
        className="text-white/60 hover:text-white transition font-medium"
      >
        Login
      </a>
      <a
        href="#"
        className="ml-2 text-black font-semibold bg-gradient-to-r from-orange-400 to-rose-500 px-4 py-2 rounded-full hover:scale-105 transition-transform"
      >
        Sign Up
      </a>
    </nav>
  </div>
</header>
)
}