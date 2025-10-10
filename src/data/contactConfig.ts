/**
 * Contact page configuration
 * Centralized configuration for maintainability
 */
export interface ContactConfig {
  company: {
    name: string;
    phone: string;
    email: string;
    address: {
      line1: string;
      line2: string;
    };
    mapUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    location: string;
  };
  map: {
    zoom: number;
    language: string;
    height: {
      mobile: string;
      desktop: string;
    };
  };
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const contactConfig: ContactConfig = {
  company: {
    name: "Bestron Technology",
    phone: "+90 216 999 02 19",
    email: "info@bestrontechnology.com",
    address: {
      line1: "Star Port Residence",
      line2: "İstanbul, Türkiye"
    },
    mapUrl: "https://maps.app.goo.gl/BvrGQRKtaVH18nvt9",
    coordinates: {
      lat: 40.8765432,
      lng: 29.2345678
    },
    location: "STAR PORT RESIDENCE"
  },
  map: {
    zoom: 15,
    language: "tr",
    height: {
      mobile: "h-[400px]",
      desktop: "lg:h-[500px]"
    }
  },
  social: {
    // Add social media links when available
  }
};
