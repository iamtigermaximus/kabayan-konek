// src/types/cloudinary.d.ts
import { CloudinaryV2 } from 'cloudinary';

// Extend the cloudinary module to include the `v2` property
declare module 'cloudinary' {
  export const v2: CloudinaryV2;
}

declare global {
  interface Window {
    cloudinary: typeof cloudinary;
  }
}
