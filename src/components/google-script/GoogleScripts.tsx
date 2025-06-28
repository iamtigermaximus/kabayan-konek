// export default function GoogleScripts() {
//   useEffect(() => {
//     // Only run on client side
//     if (typeof window === 'undefined') return;

//     // Check if scripts already exist to avoid duplicates
//     const adsenseExists = document.querySelector('script[src*="adsbygoogle"]');
//     const gaExists = document.querySelector('script[src*="gtag/js"]');

//     if (!adsenseExists) {
//       const adsenseScript = document.createElement('script');
//       adsenseScript.src =
//         'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2534929702759944';
//       adsenseScript.async = true;
//       adsenseScript.crossOrigin = 'anonymous';
//       document.head.appendChild(adsenseScript);
//     }

//     if (!gaExists) {
//       const gaScript = document.createElement('script');
//       gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-H0PBMXTEBB';
//       gaScript.async = true;
//       document.head.appendChild(gaScript);
//     }

//     // Initialize dataLayer
//     window.dataLayer = window.dataLayer || [];
//     function gtag(...args: GtagCommand) {
//       window.dataLayer.push(args);
//     }
//     gtag('js', new Date());
//     gtag('config', 'G-H0PBMXTEBB', { page_path: window.location.pathname });

//     // No need to track loaded state since we're just injecting scripts
//   }, []);

//   return null;
// }

// 'use client';

// import { useEffect } from 'react';
// import type { DataLayer, GtagCommand } from '@/types/gtag';

// declare global {
//   interface Window {
//     dataLayer: DataLayer;
//     gtag: (...args: GtagCommand) => void; // ← SIMPLIFIED TYPE
//   }
// }

// export default function GoogleScripts() {
//   useEffect(() => {
//     // 1. FIRST - Add debug logs to verify execution
//     console.log('[GA] Script loader executing'); // ← ADD THIS LINE

//     if (typeof window === 'undefined') return;

//     // 2. Initialize dataLayer DIFFERENTLY
//     if (!window.dataLayer) {
//       window.dataLayer = [];
//       console.log('[GA] dataLayer initialized'); // ← DEBUG
//     }

//     // 3. SIMPLIFIED gtag function (remove type assertions)
//     window.gtag = (...args: GtagCommand) => {
//       console.log('[GA] Event triggered:', args); // ← DEBUG
//       window.dataLayer.push(args);
//     };

//     // 4. FORCE RELOAD - Remove existing script first
//     const existingScript = document.querySelector('script[src*="gtag/js"]');
//     if (existingScript) existingScript.remove(); // ← CRITICAL FIX

//     const script = document.createElement('script');
//     script.src = 'https://www.googletagmanager.com/gtag/js?id=G-H0PBMXTEBB';
//     script.async = true;

//     // 5. ADD ERROR HANDLING
//     script.onerror = () => console.error('[GA] Failed to load gtag.js');

//     script.onload = () => {
//       console.log('[GA] gtag.js loaded'); // ← DEBUG
//       window.gtag('js', new Date());
//       window.gtag('config', 'G-H0PBMXTEBB', {
//         page_path: window.location.pathname,
//         debug_mode: true, // ← FORCE DEBUG MODE
//         send_page_view: true, // ← CRITICAL MISSING OPTION
//       });
//     };

//     document.head.appendChild(script);

//     // Load AdSense
//     if (!document.querySelector('script[src*="adsbygoogle"]')) {
//       const adsenseScript = document.createElement('script');
//       adsenseScript.src =
//         'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2534929702759944';
//       adsenseScript.async = true;
//       adsenseScript.crossOrigin = 'anonymous';
//       document.head.appendChild(adsenseScript);
//     }
//   }, []);

//   return null;
// }

'use client';

import { useEffect } from 'react';
import type { DataLayer, GtagCommand } from '@/types/gtag';

declare global {
  interface Window {
    dataLayer: DataLayer;
    gtag: (...args: GtagCommand) => void;
  }
}

export default function GoogleScripts() {
  useEffect(() => {
    console.log('[GA] Script loader executing');

    if (typeof window === 'undefined') return;

    if (!window.dataLayer) {
      window.dataLayer = [];
      console.log('[GA] dataLayer initialized');
    }

    window.gtag = (...args: GtagCommand) => {
      console.log('[GA] Event triggered:', args);
      window.dataLayer.push(args);
    };

    const existingScript = document.querySelector('script[src*="gtag/js"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-H0PBMXTEBB';
    script.async = true;
    script.onerror = () => console.error('[GA] Failed to load gtag.js');

    script.onload = () => {
      console.log('[GA] gtag.js loaded');
      window.gtag('js', new Date());
      window.gtag('config', 'G-H0PBMXTEBB', {
        page_path: window.location.pathname,
        debug_mode: true,
        send_page_view: true,
        transport_type: 'beacon', // ← ONLY CHANGE NEEDED (LINE 38)
      });
    };

    document.head.appendChild(script);

    // AdSense remains unchanged
    if (!document.querySelector('script[src*="adsbygoogle"]')) {
      const adsenseScript = document.createElement('script');
      adsenseScript.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2534929702759944';
      adsenseScript.async = true;
      adsenseScript.crossOrigin = 'anonymous';
      document.head.appendChild(adsenseScript);
    }
  }, []);

  return null;
}
