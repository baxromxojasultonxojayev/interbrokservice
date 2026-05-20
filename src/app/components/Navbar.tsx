'use client';

import React, { useState } from 'react';
import { LanguagePack } from '../types';

interface NavbarProps {
  lang: 'ru' | 'uz' | 'en';
  setLang: (l: 'ru' | 'uz' | 'en') => void;
  t: LanguagePack;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav>
        <div className="logo" onClick={(e) => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <div className="logo-icon">IBS</div>
          <div>
            <div className="logo-text">INTERBROKSERVIS</div>
            <div className="logo-sub">{t.navSub}</div>
          </div>
        </div>

        <div className="nav-links">
          <a href="#services" onClick={(e) => handleScroll(e, '#services')}>{t.navSvc}</a>
          <a href="#why" onClick={(e) => handleScroll(e, '#why')}>{t.navWhy}</a>
          <a href="#how" onClick={(e) => handleScroll(e, '#how')}>{t.navHow}</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>{t.navCt}</a>
        </div>

        <div className="nav-right">
          <div className="lang-switcher">
            <button 
              className={`lang-btn ${lang === 'ru' ? 'active' : ''}`} 
              onClick={() => setLang('ru')}
            >
              RU
            </button>
            <button 
              className={`lang-btn ${lang === 'uz' ? 'active' : ''}`} 
              onClick={() => setLang('uz')}
            >
              UZ
            </button>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <button 
            className="nav-cta" 
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.navBtn}
          </button>
        </div>

        <button 
          className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#services" onClick={(e) => handleScroll(e, '#services')}>{t.navSvc}</a>
          <a href="#why" onClick={(e) => handleScroll(e, '#why')}>{t.navWhy}</a>
          <a href="#how" onClick={(e) => handleScroll(e, '#how')}>{t.navHow}</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>{t.navCt}</a>
        </div>
        <div className="mobile-nav-right">
          <div className="lang-switcher">
            <button 
              className={`lang-btn ${lang === 'ru' ? 'active' : ''}`} 
              onClick={() => { setLang('ru'); toggleMenu(); }}
            >
              RU
            </button>
            <button 
              className={`lang-btn ${lang === 'uz' ? 'active' : ''}`} 
              onClick={() => { setLang('uz'); toggleMenu(); }}
            >
              UZ
            </button>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => { setLang('en'); toggleMenu(); }}
            >
              EN
            </button>
          </div>
          <button 
            className="nav-cta" 
            style={{ width: '100%' }}
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              toggleMenu();
            }}
          >
            {t.navBtn}
          </button>
        </div>
      </div>
    </>
  );
}
