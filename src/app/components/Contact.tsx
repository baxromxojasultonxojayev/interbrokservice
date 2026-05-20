'use client';

import React, { useState } from 'react';
import { LanguagePack } from '../types';

interface ContactProps {
  t: LanguagePack;
  lang: 'ru' | 'uz' | 'en';
}

export default function Contact({ t, lang }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(t.fso[0]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert(lang === 'ru' ? 'Пожалуйста, заполните обязательные поля!' : lang === 'uz' ? 'Iltimos, majburiy maydonlarni to\'ldiring!' : 'Please fill in the required fields!');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset input form
      setName('');
      setPhone('');
      setService(t.fso[0]);
      setMessage('');

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          <div>
            <div className="section-label">{t.ctLabel}</div>
            <h2 className="section-title">{t.ctTitle}</h2>
            <p className="section-desc">{t.ctDesc}</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <span>
                  Ташкентская область, логистический центр &quot;Highway Logistics Center&quot;
                  <br />
                  г. Ташкент, логистический центр &quot;UNIVERSAL LOGISTICS SERVICES&quot;
                </span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <span>+998 99 898 51 61</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <span>info@interbrokservis.uz</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <span>{t.ctHours}</span>
              </div>
            </div>
          </div>
          
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name-input">{t.flName} *</label>
                  <input 
                    type="text" 
                    id="name-input" 
                    placeholder={t.placeholders.name} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone-input">{t.flPhone} *</label>
                  <input 
                    type="text" 
                    id="phone-input" 
                    placeholder={t.placeholders.phone} 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label htmlFor="service-select">{t.flSvc}</label>
                <select 
                  id="service-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {t.fso.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-field">
                <label htmlFor="message-textarea">{t.flMsg}</label>
                <textarea 
                  id="message-textarea" 
                  placeholder={t.placeholders.msg}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="form-submit"
                disabled={isSubmitting}
                style={isSubmitted ? { background: 'linear-gradient(135deg,#0f6e56,#1d9e75)', boxShadow: '0 4px 15px rgba(29, 158, 117, 0.3)' } : {}}
              >
                {isSubmitting ? (
                  lang === 'ru' ? 'Отправка...' : lang === 'uz' ? 'Yuborilmoqda...' : 'Sending...'
                ) : isSubmitted ? (
                  lang === 'ru' ? '✓ Заявка отправлена!' : lang === 'uz' ? '✓ Ariza yuborildi!' : '✓ Request sent!'
                ) : (
                  t.formBtn
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
