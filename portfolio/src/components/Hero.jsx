import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { portfolio } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import { GithubMark, LinkedinMark } from './BrandIcons.jsx'

const roles = ['Full-Stack Developer', 'Problem Solver', 'Software Developer']

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [deleting, setDeleting] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined

    const currentRole = roles[roleIndex]
    const isComplete = typedRole === currentRole
    const isEmpty = typedRole.length === 0
    const delay = isComplete && !deleting ? 1500 : isEmpty && deleting ? 350 : deleting ? 34 : 68
    const timer = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true)
      } else if (deleting && isEmpty) {
        setDeleting(false)
        setRoleIndex((index) => (index + 1) % roles.length)
      } else {
        setTypedRole(currentRole.slice(0, typedRole.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, reduceMotion, roleIndex, typedRole])

  return (
    <section id="home" className="hero-grid relative isolate overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="page-wrap grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <Reveal className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-300/[0.07] px-3.5 py-2 text-xs font-medium tracking-wide text-sky-200">
            <span className="size-1.5 rounded-full bg-sky-300" />
            OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.4rem]">
            Building thoughtful
            <span className="block text-gradient">software for people.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            I’m <span className="font-medium text-white">{portfolio.name}</span>, a {portfolio.role.toLowerCase()} and {portfolio.headline.toLowerCase()}.
          </p>
          <p className="mt-2 max-w-xl leading-7 text-slate-400">{portfolio.intro}</p>
          <div className="mt-5 flex min-h-7 items-center gap-2 font-mono text-sm text-sky-300">
            <span aria-hidden="true">&gt;</span>
            <span className="sr-only">Specialty:</span>
            <span>{reduceMotion ? roles[0] : typedRole}</span>
            {!reduceMotion && <span className="typing-caret" aria-hidden="true" />}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href="#projects">View My Projects <ArrowRight size={16} /></a>
            <a className="button-outline" href="#contact">Contact Me <ArrowUpRight size={15} /></a>
            {portfolio.resumeUrl ? (
              <a className="button-outline" href={portfolio.resumeUrl} download>Download Resume</a>
            ) : (
              <span className="button-outline cursor-not-allowed opacity-50" aria-label="Resume download unavailable until a resume file is configured">Download Resume</span>
            )}
          </div>
          <div className="mt-8 flex items-center gap-3">
            {portfolio.profiles.github && (
              <a className="social-link" href={portfolio.profiles.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <GithubMark />
              </a>
            )}
            {portfolio.profiles.linkedin && (
              <a className="social-link" href={portfolio.profiles.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <LinkedinMark />
              </a>
            )}
            {!portfolio.profiles.github && !portfolio.profiles.linkedin && (
              <span className="text-xs text-slate-500">Add profile URLs in <code>src/data/portfolio.js</code></span>
            )}
          </div>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-[510px]" delay={0.12}>
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="code-window relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-rose-400/70" />
                <span className="size-2.5 rounded-full bg-amber-300/70" />
                <span className="size-2.5 rounded-full bg-emerald-300/70" />
              </div>
              <span className="font-mono text-[11px] text-slate-500">developer.js</span>
              <span className="w-8" aria-hidden="true" />
            </div>
            <div className="p-6 font-mono text-[13px] leading-[2.15] sm:p-8 sm:text-sm">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>
              <p><span className="code-muted">02</span> &nbsp;name: <span className="code-green">'{portfolio.name}'</span>,</p>
              <p><span className="code-muted">03</span> &nbsp;focus: <span className="code-green">'web applications'</span>,</p>
              <p><span className="code-muted">04</span> &nbsp;language: <span className="code-green">'Java + JavaScript'</span>,</p>
              <p><span className="code-muted">05</span> &nbsp;mindset: <span className="code-green">'always learning'</span>,</p>
              <p><span className="code-muted">06</span> &nbsp;build: <span className="code-purple">() =&gt;</span> {'{'}</p>
              <p><span className="code-muted">07</span> &nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-green">'useful things'</span>;</p>
              <p><span className="code-muted">08</span> &nbsp;{'}'}</p>
              <p><span className="code-muted">09</span> {'}'}</p>
            </div>
            <div className="border-t border-white/[0.07] px-5 py-3.5 text-[11px] text-slate-500">
              <span className="mr-2 text-emerald-300">●</span> Ready to learn, collaborate & build
            </div>
          </div>
          <div className="absolute -bottom-6 -left-7 z-20 hidden rounded-2xl border border-white/10 bg-[#111722] px-4 py-3 shadow-xl sm:block">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-slate-500">Currently learning</span>
            <span className="mt-1 block text-sm font-medium text-slate-200">DSA with Java <span className="text-sky-300">↗</span></span>
          </div>
        </Reveal>
      </div>
      <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-slate-500 transition hover:text-sky-200 md:flex">
        Scroll to explore <ArrowDown size={13} />
      </a>
    </section>
  )
}

export default Hero
