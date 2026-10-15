import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { GithubMark, LinkedinMark } from './BrandIcons.jsx'

function Contact({ notice, setNotice }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('This form is a frontend demo; no message was sent. Configure an email or connect a form service to receive messages.')
  }

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  return (
    <section id="contact" className="section-space border-t border-white/[0.06]">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let’s build something meaningful."
          description="I’m happy to connect about software engineering opportunities, interesting projects, or ideas worth exploring."
        />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="rounded-2xl border border-sky-300/15 bg-sky-300/[0.04] p-6 sm:p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200"><Mail size={19} /></span>
              <h3 className="mt-5 text-lg font-medium text-white">Prefer email?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Reach out directly and I’ll be glad to hear from you.</p>
              {portfolio.email ? (
                <a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200" href={`mailto:${portfolio.email}`}>
                  {portfolio.email} <ArrowRight size={15} />
                </a>
              ) : (
                <p className="mt-5 text-sm text-slate-500">Add an email address in <code>src/data/portfolio.js</code> to enable this link.</p>
              )}
              <div className="mt-7 flex gap-3">
                {portfolio.profiles.github && (
                  <a className="social-link" href={portfolio.profiles.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubMark size={17} /></a>
                )}
                {portfolio.profiles.linkedin && (
                  <a className="social-link" href={portfolio.profiles.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinMark size={17} /></a>
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-5 rounded-xl border border-amber-200/10 bg-amber-100/[0.04] px-4 py-3 text-xs leading-5 text-amber-100/70">
                Demo only — this form does not send messages. Configure an email link or connect a form service before publishing.
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label" htmlFor="contact-name">
                  Name
                  <input id="contact-name" className="form-input" name="name" value={form.name} onChange={updateField} autoComplete="name" required minLength={2} maxLength={80} />
                </label>
                <label className="field-label" htmlFor="contact-email">
                  Email
                  <input id="contact-email" className="form-input" name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required maxLength={254} />
                </label>
              </div>
              <label className="field-label mt-5 block" htmlFor="contact-message">
                Message
                <textarea id="contact-message" className="form-input mt-2 min-h-36 resize-y" name="message" value={form.message} onChange={updateField} required minLength={10} maxLength={2000} />
              </label>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className="button-primary w-fit" type="submit">Preview form behavior <ArrowRight size={15} /></button>
                <p className="text-xs text-slate-500">Submitting will only show a demo notice; nothing is transmitted.</p>
              </div>
              {notice && <p className="mt-4 rounded-lg border border-sky-300/15 bg-sky-300/[0.06] p-3 text-sm leading-6 text-sky-100" role="status">{notice}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
