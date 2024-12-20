import PrivacyPolicy from '@/components/privacy-policy/PrivacyPolicy';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PRIVACY POLICY  | KABAYAN KONEK',
  description:
    'Read Kabayan Konek’s Privacy Policy to understand how we collect, use, and protect your personal data when using our services.',
  keywords:
    'Privacy Policy, Kabayan Konek privacy, data protection, Filipino community privacy, online privacy policy, Kabayan Konek terms, personal data protection, data collection policy, privacy rights, user data security, online privacy in Finland, user privacy Finland, Kabayan Konek data practices',
  openGraph: {
    title: 'PRIVACY POLICY  | KABAYAN KONEK',
    description:
      'Read Kabayan Konek’s Privacy Policy to understand how we collect, use, and protect your personal data when using our services.',
    url: 'https://kabayankonek.com/privacy-policy',
    images: [
      {
        url: 'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png',
        width: 1200,
        height: 630,
        alt: 'Kabayan Konek Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    title: 'PRIVACY POLICY | KABAYAN KONEK',
    description:
      'Read Kabayan Konek’s Privacy Policy to understand how we collect, use, and protect your personal data when using our services.',
    images: [
      {
        url: 'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png',
        width: 1200,
        height: 630,
        alt: 'Kabayan Konek Image',
      },
    ],
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://kabayankonek.com/privacy-policy',
  },
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
