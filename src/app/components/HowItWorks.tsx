'use client';

import React from 'react';
import { LanguagePack } from '../types';

interface HowItWorksProps {
  t: LanguagePack;
}

export default function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section id="how">
      <div className="section-inner">
        <div className="how-grid-layout">
          <div>
            <div className="section-label">{t.howLabel}</div>
            <h2 className="section-title">{t.howTitle}</h2>
            <p className="section-desc">{t.howDesc}</p>
          </div>
          
          <div className="steps">
            {t.steps.map((step, i) => (
              <div key={i} className="step">
                <div className="step-num">{step.n}</div>
                <div className="step-body">
                  <strong>{step.t}</strong>
                  <p>{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
