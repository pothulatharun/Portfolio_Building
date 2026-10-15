import { Braces, Database, GitBranch, Layers3, Server, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const icons = [Braces, Server, Database, Layers3, GitBranch]

function Skills() {
  return (
    <section id="skills" className="section-space border-t border-white/[0.06] bg-[#0a0e16]">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="WHAT I WORK WITH"
          title="A growing toolkit."
          description="Technologies I’ve used in projects or am actively learning. I’m always open to picking up the right tool for the job."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map(({ category, items }, index) => {
            const Icon = icons[index] ?? Sparkles
            return (
              <Reveal key={category} delay={index * 0.06}>
                <div className="skill-card h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white/[0.04] text-sky-200">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-medium text-slate-100">{category}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
