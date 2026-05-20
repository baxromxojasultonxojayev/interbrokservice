'use client';

import React from 'react';
import { LanguagePack } from '../types';

interface HeroProps {
  t: LanguagePack;
}

export default function Hero({ t }: HeroProps) {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      
      <div className="badge fade-up">
        <span className="dot"></span>
        <span>{t.badge}</span>
      </div>
      
      <h1 className="hero-title fade-up delay-1">
        <span>{t.heroT1}</span>
        <br />
        <span className="accent-word">{t.heroT2}</span>
      </h1>
      
      <p className="hero-sub fade-up delay-2">
        {t.heroSub}
      </p>
      
      <div className="hero-btns fade-up delay-3">
        <button 
          className="btn-primary" 
          onClick={() => handleScroll('#contact')}
        >
          {t.heroBtn1}
        </button>
        <button 
          className="btn-outline" 
          onClick={() => handleScroll('#services')}
        >
          {t.heroBtn2}
        </button>
      </div>
      
      <div className="hero-stats fade-up delay-4">
        <div className="stat">
          <div className="stat-num">500+</div>
          <div className="stat-label">{t.stat1}</div>
        </div>
        <div className="stat-div"></div>
        <div className="stat">
          <div className="stat-num">10+</div>
          <div className="stat-label">{t.stat2}</div>
        </div>
        <div className="stat-div"></div>
        <div className="stat">
          <div className="stat-num">99%</div>
          <div className="stat-label">{t.stat3}</div>
        </div>
        <div className="stat-div"></div>
        <div className="stat">
          <div className="stat-num">24/7</div>
          <div className="stat-label">{t.stat4}</div>
        </div>
      </div>
    </div>
  );
}
