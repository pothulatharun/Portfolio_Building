import { ArrowUpRight, Globe2, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { GithubMark } from './BrandIcons.jsx'

function Projects() {
  return (
    <section id="projects" className="section-space border-t border-white/[0.06]">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="SELECTED PROJECTS"
          title="Things I’ve been building."
          description="A few projects that reflect how I like to learn: by tackling real problems, building useful features, and working across the stack."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.07} className={index === 2 ? 'lg:col-span-2' : ''}>
              <article className={`project-card h-full ${index === 2 ? 'lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8' : ''}`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-wide text-sky-300/80">PROJECT {project.number}</span>
                    {project.inProgress && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/15 bg-amber-200/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-amber-100/80">
                        <Sparkles size={11} /> {project.type}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-white">{project.name}</h3>
                  {!project.inProgress && <p className="mt-1 text-xs uppercase tracking-[0.13em] text-slate-500">{project.type}</p>}
                  <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                </div>
                <div className={index === 2 ? 'mt-8 lg:mt-0' : ''}>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => <span className="skill-tag" key={technology}>{technology}</span>)}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.repoUrl && (
                      <a className="project-link" href={project.repoUrl} target="_blank" rel="noreferrer">
                        <GithubMark size={15} /> GitHub <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a className="project-link project-link-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                        <Globe2 size={15} /> Live demo <ArrowUpRight size={13} />
                      </a>
                    )}
                    {!project.repoUrl && !project.demoUrl && (
                      <span className="inline-flex items-center gap-2 text-xs text-slate-500">Concept project · links to be added</span>
                    )}
                    {!project.repoUrl && project.demoUrl && (
                      <span className="text-xs text-slate-500">Repository link to be added</span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
