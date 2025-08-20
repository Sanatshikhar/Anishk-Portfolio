import React, { useState } from "react";

const GlassyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <header style={{position:'fixed',top:0,left:0,width:'100%',zIndex:100}}>
      <div style={{
        background: 'rgba(20,20,30,0.6)',
        backdropFilter: 'blur(16px)',
        borderRadius: '2rem',
        margin: '1.5rem auto',
        width: '90%',
        maxWidth: 1200,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 32px 0 rgba(103,232,249,0.08)',
        padding: '0 2rem',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
            <g filter="url(#shadow)">
              <path d="M19 6L30 32H26.5L23.5 25H14.5L11.5 32H8L19 6Z" fill="url(#gradient)"/>
            </g>
            <defs>
              <linearGradient id="gradient" x1="19" y1="6" x2="19" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa"/>
                <stop offset="1" stopColor="#67e8f9"/>
              </linearGradient>
              <filter id="shadow" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#67e8f9" floodOpacity="0.18"/>
              </filter>
            </defs>
          </svg>
        </div>
        <nav style={{display:'flex',gap:32,alignItems:'center'}} className="header-nav signature-nav">
          <a href="#" className="signature-logo nav-link">Home</a>
          <a href="#about" className="signature-logo nav-link">About</a>
          <a href="#projects" className="signature-logo nav-link">Projects</a>
          <a href="#contact" className="signature-logo nav-link">Contact</a>
        </nav>
        <button onClick={toggleMenu} className="header-menu-btn" style={{display:'none'}}>
          <span style={{fontSize:28,color:'#e6e8ef'}}>&#9776;</span>
        </button>
      </div>
    </header>
  );
};

export default GlassyHeader;
