import { ArrowUpRight, BookOpen, GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function Education() {
  const { degree, field, university, graduationYear } = portfolio.education

  return (
    <section id="education" className="section-space border-t border-white/[0.06] bg-[#0a0e16]">
      <div className="page-wrap">
        <SectionHeading eyebrow="EDUCATION" title="The foundation I’m building on." />
        <Reveal>
          <article className="education-card">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.07] text-sky-200">
                <GraduationCap size={22} />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{degree}</h3>
                    <p className="mt-1 text-slate-300">{field}</p>
                  </div>
                  <span className="rounded-full border border-white/[0.09] px-3 py-1 text-xs text-slate-300">Expected {graduationYear}</span>
                </div>
                <p className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                  <BookOpen size={15} className="text-sky-300" /> {university}
                </p>
                <div className="mt-6 border-t border-white/[0.07] pt-5">
                  <a className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-sky-200" href="#skills">
                    Exploring software development, DSA, and computer science <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export default Education
