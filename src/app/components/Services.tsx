'use client';

import React from 'react';
import { LanguagePack } from '../types';

interface ServicesProps {
  t: LanguagePack;
}

export default function Services({ t }: ServicesProps) {
  return (
    <section id="services">
      <div className="section-inner">
        <div className="section-label">{t.svcLabel}</div>
        <h2 className="section-title">{t.svcTitle}</h2>
        <p className="section-desc">{t.svcDesc}</p>
        
        <div className="services-grid">
          {t.services.map((svc, i) => (
            <div key={i} className="service-card">
              <div className="svc-icon">
                {svc.icon}
              </div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
