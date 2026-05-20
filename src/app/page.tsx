'use client';

import React, { useState } from 'react';
import ru from '../../public/locales/ru.json';
import uz from '../../public/locales/uz.json';
import en from '../../public/locales/en.json';
import { LanguagePack } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

const T: Record<string, LanguagePack> = {
  ru: ru as LanguagePack,
  uz: uz as LanguagePack,
  en: en as LanguagePack,
};

export default function Home() {
  const [lang, setLang] = useState<'ru' | 'uz' | 'en'>('ru');
  const t = T[lang];

  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <WhyUs t={t} />
        <HowItWorks t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </>
  );
}
