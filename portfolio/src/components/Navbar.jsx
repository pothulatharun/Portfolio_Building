import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080b12]/90 backdrop-blur-xl">
      <nav className="page-wrap flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight text-white" onClick={() => setMenuOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10 font-mono text-sm text-sky-200">T.</span>
          <span>Tharun<span className="text-sky-300">.</span></span>
        </a>
        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div
          id="primary-links"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-[71px] flex-col gap-1 border-b border-white/[0.08] bg-[#080b12] p-4 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          <a className="nav-link" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          {links.map(([label, target]) => (
            <a className="nav-link" href={`#${target}`} key={target} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          {portfolio.resumeUrl ? (
            <a className="button-outline mt-2 md:mt-0" href={portfolio.resumeUrl} download>
              Resume <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="button-outline mt-2 cursor-not-allowed opacity-50 md:mt-0" aria-label="Resume download unavailable until a resume file is configured">
              Resume unavailable
            </span>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
