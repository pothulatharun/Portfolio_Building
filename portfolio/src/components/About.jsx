import { ArrowUpRight, Code2, GraduationCap, UsersRound } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const values = [
  { icon: Code2, title: 'Build with purpose', detail: 'Practical applications, thoughtfully made.' },
  { icon: GraduationCap, title: 'Keep learning', detail: 'Growing my skills one project at a time.' },
  { icon: UsersRound, title: 'Work together', detail: 'Curious, collaborative, and open to feedback.' },
]

function About() {
  return (
    <section id="about" className="section-space border-t border-white/[0.06]">
      <div className="page-wrap">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Builder by choice." />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-lg leading-8 text-slate-300">{portfolio.about}</p>
            <p className="mt-5 leading-7 text-slate-400">{portfolio.learning}</p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-200">
              Let’s connect <ArrowUpRight size={15} />
            </a>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, detail }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="value-card h-full">
                  <span className="mb-8 flex size-10 items-center justify-center rounded-xl border border-sky-300/15 bg-sky-300/[0.07] text-sky-200">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
