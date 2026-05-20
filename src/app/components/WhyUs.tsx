'use client';

import React from 'react';
import { LanguagePack } from '../types';

interface WhyUsProps {
  t: LanguagePack;
}

export default function WhyUs({ t }: WhyUsProps) {
  return (
    <section className="why-section" id="why">
      <div className="section-inner">
        <div className="why-grid">
          <div>
            <div className="section-label">{t.whyLabel}</div>
            <h2 className="section-title">{t.whyTitle}</h2>
            <ul className="features-list">
              {t.features.map((feature, i) => (
                <li key={i}>
                  <span className="check">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="why-visual">
            {t.whyItems.map((item, i) => (
              <div key={i} className="why-item">
                <div className="why-num">{item.num}</div>
                <div className="why-text">
                  <strong>{item.title}</strong>
                  <span>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
