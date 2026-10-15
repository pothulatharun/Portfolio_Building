import { ArrowUp } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import { GithubMark, LinkedinMark } from './BrandIcons.jsx'

const copyrightYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#080b12] py-7">
      <div className="page-wrap flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-medium text-slate-200">{portfolio.name}<span className="text-sky-300">.</span></p>
          <p className="mt-1 text-xs text-slate-500">© {copyrightYear} {portfolio.name}. Built with care.</p>
        </div>
        <div className="flex items-center gap-3">
          {portfolio.profiles.github && (
            <a className="social-link" href={portfolio.profiles.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubMark size={16} /></a>
          )}
          {portfolio.profiles.linkedin && (
            <a className="social-link" href={portfolio.profiles.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinMark size={16} /></a>
          )}
          <a className="social-link" href="#home" aria-label="Back to top"><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
