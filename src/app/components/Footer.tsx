'use client';

import React from 'react';
import { LanguagePack } from '../types';

interface FooterProps {
  t: LanguagePack;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer>
      <p>{t.footer}</p>
    </footer>
  );
}
