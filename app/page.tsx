const practices = [
  {
    num: '01',
    name: 'Software as a Service',
    desc: 'Scalable, cloud-native platforms engineered for performance — from MVP to enterprise-grade SaaS.',
  },
  {
    num: '02',
    name: 'Music & Artist Unit',
    desc: 'Artist development, production, and digital distribution. Where sound meets technology.',
  },
  {
    num: '03',
    name: 'Photographic Brand',
    desc: 'Visual storytelling through commercial and editorial photography. Image as identity.',
  },
  {
    num: '04',
    name: 'Graphic Design',
    desc: 'Brand systems, typography, and editorial design. Structure and form in every detail.',
  },
];

const works = [
  { tag: 'SaaS Platform', title: 'Meridian — Project Intelligence', seed: 'meridian-arch' },
  { tag: 'Music & Artist', title: 'Nocturne Records — Label System', seed: 'nocturne-music' },
  { tag: 'Photography', title: 'Aperture — Visual Archive', seed: 'aperture-photo' },
  { tag: 'Graphic Design', title: 'Form & Press — Identity Suite', seed: 'form-press-design' },
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-logo">
          VISUAL<span>GV</span>
        </a>
        <ul className="nav-links">
          <li><a href="#practice">Practice</a></li>
          <li><a href="#philosophy">Philosophy</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Inquire</a>
      </nav>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <span className="eyebrow reveal">New York · Est. 2026</span>
              <h1 className="display display-xl hero-title reveal">
                We build the<br />
                structures of<br />
                the <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>digital</em> age.
              </h1>
              <p className="lead reveal">
                VISUALGV is a creative technology studio operating at the intersection of
                software, music, photography, and design — a multidisciplinary practice
                with the rigor of an architecture firm and the speed of a startup.
              </p>
              <div className="hero-meta reveal">
                <div className="hero-meta-item">
                  Practice<strong>Four Disciplines</strong>
                </div>
                <div className="hero-meta-item">
                  Approach<strong>Design-Led Engineering</strong>
                </div>
                <div className="hero-meta-item">
                  Based In<strong>New York, NY</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">Scroll</div>
        </section>

        <section id="practice">
          <div className="container">
            <div className="index-header reveal">
              <div>
                <span className="eyebrow">What We Do</span>
                <h2 className="display display-lg">Practice Areas</h2>
              </div>
              <p style={{ color: 'var(--fg-dim)', fontSize: '0.85rem', maxWidth: '30ch' }}>
                Four disciplines, one studio. Each unit operates independently yet
                shares a common foundation of craft.
              </p>
            </div>
            <div className="index-grid">
              {practices.map((practice) => (
                <div className="practice reveal" key={practice.num}>
                  <div className="practice-num">{practice.num}</div>
                  <div className="practice-name">{practice.name}</div>
                  <div className="practice-desc">{practice.desc}</div>
                  <div className="practice-arrow">→</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="philosophy">
          <div className="container">
            <div className="philosophy-grid">
              <div className="philosophy-text reveal">
                <span className="eyebrow">Philosophy</span>
                <h2 className="display display-lg" style={{ marginBottom: '2rem' }}>
                  Discipline<br />meets <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>imagination</em>.
                </h2>
                <p>
                  We approach every project the way a skyscraper architect approaches
                  a tower — with structural integrity, material honesty, and an
                  obsession with proportion. Software is architecture. Music is
                  architecture. A photograph is architecture. Each must stand on its
                  own, bear its own weight, and last.
                </p>
                <p>
                  VISUALGV was founded on the belief that the best creative work
                  emerges not from a single discipline, but from the tension between
                  many. Our SaaS practice informs our design. Our music informs our
                  software. Our photography informs our brand work. Everything is
                  connected. Everything is built.
                </p>
              </div>
              <div className="reveal">
                <div className="philosophy-stats">
                  <div className="stat">
                    <div className="stat-num">04</div>
                    <div className="stat-label">Disciplines</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">∞</div>
                    <div className="stat-label">Iterations</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">100%</div>
                    <div className="stat-label">In-House</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">01</div>
                    <div className="stat-label">Standard</div>
                  </div>
                </div>
                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--line)' }}>
                  <p style={{ color: 'var(--fg-dim)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    "We don't decorate. We construct. Every pixel, every note, every
                    line of code is load-bearing."
                  </p>
                  <p style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1rem' }}>
                    — Studio Manifesto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="works">
          <div className="container">
            <div className="index-header reveal">
              <div>
                <span className="eyebrow">Portfolio</span>
                <h2 className="display display-lg">Selected Works</h2>
              </div>
              <p style={{ color: 'var(--fg-dim)', fontSize: '0.85rem', maxWidth: '30ch' }}>
                A cross-section of recent projects across all four practice areas.
              </p>
            </div>
            <div className="works-grid">
              {works.map((work) => (
                <div className="work reveal" key={work.seed}>
                  <img
                    className="work-image"
                    src={`https://picsum.photos/seed/${work.seed}/800/600`}
                    alt={work.title}
                    loading="lazy"
                  />
                  <div className="work-overlay">
                    <div className="work-tag">{work.tag}</div>
                    <div className="work-title">{work.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <span className="eyebrow reveal">Begin</span>
            <h2 className="display display-xl reveal" style={{ marginBottom: '1.5rem' }}>
              Let's build<br />
              something <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>enduring</em>.
            </h2>
            <p className="lead reveal" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
              Whether you need a SaaS platform, a record label, a visual identity, or
              all four — we'd like to hear from you.
            </p>
            <a href="mailto:studio@visualgv.com" className="contact-email reveal">
              studio@visualgv.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">VISUAL<span>GV</span></div>
              <p>A creative technology studio building software, music, photography, and design from New York City.</p>
            </div>
            <div className="footer-col">
              <h4>Practice</h4>
              <a href="#practice">SaaS</a>
              <a href="#practice">Music &amp; Artists</a>
              <a href="#practice">Photography</a>
              <a href="#practice">Graphic Design</a>
            </div>
            <div className="footer-col">
              <h4>Studio</h4>
              <a href="#philosophy">Philosophy</a>
              <a href="#works">Works</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>studio@visualgv.com</p>
              <p>New York, NY</p>
              <p>By appointment</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 VISUALGV. All rights reserved.</span>
            <span>Designed &amp; engineered in-house.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
