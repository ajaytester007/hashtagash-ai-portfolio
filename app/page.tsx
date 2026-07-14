import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Code2,
  GraduationCap,
  Mail,
  Music2,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Trophy
} from "lucide-react";
import { site } from "../content/site";

const Icon = ({ index }: { index: number }) => {
  const icons = [BrainCircuit, ShieldCheck, Code2, PlayCircle];
  const C = icons[index % icons.length];
  return <C size={24} />;
};

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Hashtag Ash home">
          <span className="brand-mark">#</span>
          <span>{site.brand}</span>
        </a>
        <div className="nav-links">
          <a href="#consulting">Consulting</a>
          <a href="#teaching">Teaching</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="button button-small" href={`mailto:${site.email}`}>
          Start a conversation
        </a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} /> AI-first consultant · builder · educator
          </div>
          <h1>{site.headline}</h1>
          <p className="lead">{site.subheadline}</p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              Hire or collaborate <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#teaching">
              Explore lessons <GraduationCap size={18} />
            </a>
          </div>
          <div className="availability">
            <span className="status-dot" />
            {site.location}
          </div>
        </div>

        <aside className="hero-card">
          <div className="portrait-placeholder" aria-label="Portrait placeholder">
            <span>AA</span>
          </div>
          <div>
            <p className="kicker">Ponnani “Ajay” Ananthanarayanan</p>
            <h2>Enterprise technologist with an educator’s mindset.</h2>
            <p>
              I combine deep delivery experience with patient, structured teaching—whether
              the subject is AI reliability, a data pipeline, a raga, an equation or a chess position.
            </p>
          </div>
          <div className="mini-proof">
            <CheckCircle2 size={18} /> Open to freelance projects, AI evaluation work and private instruction.
          </div>
        </aside>
      </section>

      <section className="proof-strip">
        <div className="shell proof-grid">
          {site.proof.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="consulting" className="section shell">
        <div className="section-heading">
          <div>
            <p className="kicker">For organizations and platforms</p>
            <h2>Trustworthy AI and quality engineering, grounded in real enterprise delivery.</h2>
          </div>
          <p>
            Engage me for targeted freelance assignments, evaluation programs, framework builds,
            quality transformation, technical reviews or content that turns expertise into authority.
          </p>
        </div>
        <div className="cards four">
          {site.services.map((service, index) => (
            <article className="card" key={service.title}>
              <div className="icon"><Icon index={index} /></div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <div className="tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="teaching" className="section teaching-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">For students and lifelong learners</p>
              <h2>Three disciplines. One method: clarity, practice and confidence.</h2>
            </div>
            <p>
              Lessons can be structured as ongoing instruction, focused skill-building,
              exam support or guided enrichment. Remote instruction is available.
            </p>
          </div>
          <div className="cards three">
            {site.teaching.map((item, index) => {
              const icons = [Music2, GraduationCap, Trophy];
              const C = icons[index];
              return (
                <article className="teaching-card" key={item.title}>
                  <C size={30} />
                  <p className="kicker">{item.audience}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a href={`mailto:${site.email}?subject=${encodeURIComponent(item.title + " lesson inquiry")}`}>
                    Ask about lessons <ChevronRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected builds</p>
            <h2>Open work that demonstrates how I think and deliver.</h2>
          </div>
          <a className="text-link" href="https://github.com/ajaytester007" target="_blank" rel="noreferrer">
            View GitHub profile <ArrowRight size={17} />
          </a>
        </div>
        <div className="project-list">
          {site.projects.map((project, index) => (
            <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <ArrowRight size={22} />
            </a>
          ))}
        </div>
      </section>

      <section className="section shell split-callout">
        <div>
          <p className="kicker">Content engine</p>
          <h2>Designed for articles, tutorials, project demos and an AI-first video presence.</h2>
          <p>
            The Git workflow makes it easy to publish case studies, embed YouTube lessons,
            add downloadable resources and grow a searchable knowledge library without rebuilding the site.
          </p>
        </div>
        <div className="content-formats">
          <span><PlayCircle size={20} /> Five-minute technical videos</span>
          <span><BrainCircuit size={20} /> AI evaluation case studies</span>
          <span><Music2 size={20} /> Music lesson clips</span>
          <span><GraduationCap size={20} /> Math and chess explainers</span>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <div>
            <p className="kicker">Let’s build or learn</p>
            <h2>Bring me a complex problem—or a subject you want to master.</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${site.email}`}>
              <Mail size={18} /> {site.email}
            </a>
            <a className="button button-outline-light" href="https://www.linkedin.com/in/ponnani-a-1118082b/" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Hashtag Ash LLC</span>
        <span>AI · Quality · Teaching · Thoughtful delivery</span>
      </footer>
    </main>
  );
}
