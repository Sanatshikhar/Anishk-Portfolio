import GlassyHeader from './GlassyHeader';
import profilePic from './profile.jpg';
import React from 'react';
import './App.css';
import HeroScene from './HeroScene';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
  >
    {children}
  </motion.div>
);

function HeroOverlay() {
  return (
    <div className="overlay">
      <div className="intro">
        <FadeIn>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              objectFit: 'contain',
              marginBottom: 18,
              boxShadow: '0 4px 24px 0 rgba(103,232,249,0.13)',
              border: '3px solid var(--accent-2)',
              background: 'linear-gradient(135deg, #fff 70%, #a78bfa22 100%)',
              padding: 4,
              objectPosition: 'center top',
            }}
          />
          <h1>Anishk Krishna Sinha</h1>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="tagline">
            B.Com Student • Creative + Professional Portfolio • Finance • Analytics • UI Motion
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <div className="cta">
            <a className="btn" href="#about">About Me</a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function SectionAbout() {
  return (
    <>
      <section id="about">
        <h2 className="sec-title">About</h2>
        <p className="muted">
          As a B.Com (Accounting) Hons student at St. Xavier’s College, Ranchi, I’m passionate about understanding the world of business, finance, and accounting. I enjoy problem-solving, applying theoretical concepts to practical scenarios, and working on initiatives that encourage innovation and growth. Beyond academics, I’m an enthusiastic learner eager to connect with opportunities that allow me to contribute meaningfully while expanding my knowledge and skills.
        </p>
      </section>
      <section id="education">
        <h2 className="sec-title">Education</h2>
        <div className="card-grid" style={{ marginTop: 14 }}>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 20px', minHeight: 180 }}>
              <span style={{ fontSize: 36, marginBottom: 10 }}>🎓</span>
            <div style={{ textAlign: 'center' }}>
              <strong>St. Xavier's College, Ranchi</strong>
              <div>Bachelor of Commerce - BCom, Accounting</div>
              <div className="muted" style={{ margin: '6px 0 2px', fontSize: 14 }}>Jun 2023 - Jun 2026</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 20px', minHeight: 180 }}>
              <span style={{ fontSize: 36, marginBottom: 10 }}>🏫</span>
            <div style={{ textAlign: 'center' }}>
              <strong>Vivekananda Central School</strong>
              <div>12th</div>
              <div className="muted" style={{ margin: '6px 0 2px', fontSize: 14 }}>May 2021 - Apr 2023</div>
              <div className="muted" style={{ fontSize: 13 }}>Grade: 74%</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 20px', minHeight: 180 }}>
              <span style={{ fontSize: 36, marginBottom: 10 }}>🌟</span>
            <div style={{ textAlign: 'center' }}>
              <strong>Angels High School</strong>
              <div>10th</div>
              <div className="muted" style={{ margin: '6px 0 2px', fontSize: 14 }}>Apr 2011 - Mar 2021</div>
              <div className="muted" style={{ fontSize: 13 }}>Grade: 89%</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionProjects() {
  return (
    <section id="projects">
      <h2 className="sec-title">Featured Projects</h2>
      <p className="muted">
        A selection of projects presented with clarity and motion. Click cards to open case studies.
      </p>
      <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ width: '100%', maxWidth: 700, display: 'flex', flexDirection: 'row', position: 'relative' }}>
          {/* Subtle vertical accent line */}
          <div style={{ width: 4, background: 'linear-gradient(to bottom, var(--accent-2) 0%, var(--accent) 100%)', borderRadius: 2, opacity: 0.5, marginRight: 24, marginLeft: 0, minHeight: 340, alignSelf: 'stretch' }}></div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40, width: '100%', transition: 'transform 0.2s', cursor: 'pointer', borderRadius: 20, background: 'rgba(255,255,255,0.10)', border: '1.5px solid var(--accent-2)', padding: '22px 24px 22px 0' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-4px) scale(1.03)';e.currentTarget.style.borderColor='var(--accent)';}} onMouseOut={e => {e.currentTarget.style.transform='none';e.currentTarget.style.borderColor='var(--accent-2)';}}>
              <span style={{ fontSize: 36, background: 'rgba(167,139,250,0.13)', borderRadius: '50%', border: '3px solid var(--accent-2)', padding: 12, marginRight: 36, marginLeft: 8, zIndex: 2, color: 'var(--accent-2)' }}>🚀</span>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 22, color: 'var(--accent)' }}>Financial Dashboard</h3>
                <p className="muted" style={{ margin: '10px 0 0', fontSize: 16, color: 'var(--text)' }}>Interactive KPIs • YoY growth • Trend lines • Clean visuals.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40, width: '100%', transition: 'transform 0.2s', cursor: 'pointer', borderRadius: 20, background: 'rgba(255,255,255,0.10)', border: '1.5px solid var(--accent)', padding: '22px 24px 22px 0' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-4px) scale(1.03)';e.currentTarget.style.borderColor='var(--accent-2)';}} onMouseOut={e => {e.currentTarget.style.transform='none';e.currentTarget.style.borderColor='var(--accent)';}}>
              <span style={{ fontSize: 36, background: 'rgba(103,232,249,0.13)', borderRadius: '50%', border: '3px solid var(--accent)', padding: 12, marginRight: 36, marginLeft: 8, zIndex: 2, color: 'var(--accent)' }}>🧮</span>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 22, color: 'var(--accent)' }}>Expense Visualizer (3D)</h3>
                <p className="muted" style={{ margin: '10px 0 0', fontSize: 16, color: 'var(--text)' }}>3D bars & particles tell the story of monthly spend.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 0, width: '100%', transition: 'transform 0.2s', cursor: 'pointer', borderRadius: 20, background: 'rgba(255,255,255,0.10)', border: '1.5px solid var(--accent-2)', padding: '22px 24px 22px 0' }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-4px) scale(1.03)';e.currentTarget.style.borderColor='var(--accent)';}} onMouseOut={e => {e.currentTarget.style.transform='none';e.currentTarget.style.borderColor='var(--accent-2)';}}>
              <span style={{ fontSize: 36, background: 'rgba(167,139,250,0.13)', borderRadius: '50%', border: '3px solid var(--accent-2)', padding: 12, marginRight: 36, marginLeft: 8, zIndex: 2, color: 'var(--accent-2)' }}>🔗</span>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 22, color: 'var(--accent-2)' }}>Portfolio Motion Kit</h3>
                <p className="muted" style={{ margin: '10px 0 0', fontSize: 16, color: 'var(--text)' }}>Reusable motion components for smooth section reveals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionContact() {
  return (
    <section id="contact">
      <h2 className="sec-title">Let’s Connect</h2>
      <p className="muted">Open to internships, projects, and full-time roles.</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 56,
        marginTop: 40,
        marginBottom: 40,
        flexWrap: 'wrap',
        background: 'none',
        border: 'none',
        boxShadow: 'none',
        padding: 0
      }}>
        <a href="mailto:anishk5405@gmail.com" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', minWidth: 140,
          transition: 'transform 0.18s', borderRadius: 18, border: 'none', background: 'none', padding: 0,
        }} onMouseOver={e => {e.currentTarget.style.transform='scale(1.07)';}} onMouseOut={e => {e.currentTarget.style.transform='none';}}>
          <span style={{ fontSize: 54, background: 'none', borderRadius: '50%', border: 'none', padding: 0, marginBottom: 12, color: 'var(--accent-2)', boxShadow: 'none' }}>✉️</span>
          <span style={{ fontWeight: 700, color: 'var(--accent-2)', fontSize: 19 }}>Email</span>
          <span className="muted" style={{ fontSize: 15, marginTop: 2 }}>anishk5405@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/anishk-krishna-sinha-127aa2270/" target="_blank" rel="noreferrer" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', minWidth: 140,
          transition: 'transform 0.18s', borderRadius: 18, border: 'none', background: 'none', padding: 0,
        }} onMouseOver={e => {e.currentTarget.style.transform='scale(1.07)';}} onMouseOut={e => {e.currentTarget.style.transform='none';}}>
          <span style={{ fontSize: 54, background: 'none', borderRadius: '50%', border: 'none', padding: 0, marginBottom: 12, color: 'var(--accent)', boxShadow: 'none' }}>💼</span>
          <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: 19 }}>LinkedIn</span>
          <span className="muted" style={{ fontSize: 15, marginTop: 2 }}>Anishk Krishna Sinha</span>
        </a>
        <a href="#" target="_blank" rel="noreferrer" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', minWidth: 140,
          transition: 'transform 0.18s', borderRadius: 18, border: 'none', background: 'none', padding: 0,
        }} onMouseOver={e => {e.currentTarget.style.transform='scale(1.07)';}} onMouseOut={e => {e.currentTarget.style.transform='none';}}>
          <span style={{ fontSize: 54, background: 'none', borderRadius: '50%', border: 'none', padding: 0, marginBottom: 12, color: 'var(--accent-2)', boxShadow: 'none' }}>📄</span>
          <span style={{ fontWeight: 700, color: 'var(--accent-2)', fontSize: 19 }}>Resume</span>
          <span className="muted" style={{ fontSize: 15, marginTop: 2 }}>Download</span>
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <GlassyHeader />
      <div className="hero" role="region" aria-label="Hero 3D">
        <div className="canvas-wrap">
          <HeroScene />
        </div>
        <HeroOverlay />
      </div>
      <main>
        <SectionAbout />
        <SectionProjects />
        <SectionContact />
      </main>
  <footer>© {new Date().getFullYear()} Anishk Krishna Sinha — Designed & Built by Sanat Sinha</footer>
    </>
  );
}

export default App;
