'use client';

import { DataLayer, GtagCommand } from '@/types/gtag';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: DataLayer;
  }
}

export default function GoogleScripts() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if scripts already exist to avoid duplicates
    const adsenseExists = document.querySelector('script[src*="adsbygoogle"]');
    const gaExists = document.querySelector('script[src*="gtag/js"]');

    if (!adsenseExists) {
      const adsenseScript = document.createElement('script');
      adsenseScript.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2534929702759944';
      adsenseScript.async = true;
      adsenseScript.crossOrigin = 'anonymous';
      document.head.appendChild(adsenseScript);
    }

    if (!gaExists) {
      const gaScript = document.createElement('script');
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-H0PBMXTEBB';
      gaScript.async = true;
      document.head.appendChild(gaScript);
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: GtagCommand) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-H0PBMXTEBB', { page_path: window.location.pathname });

    // No need to track loaded state since we're just injecting scripts
  }, []);

  return null;
}
