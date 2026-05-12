import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://kreativeagency.com.br";
const SITE_NAME = "Kreative Agency - Marketing e Audiovisual em João Pessoa";
const DEFAULT_TITLE = "Kreative Agency | Marketing e Produção Audiovisual em João Pessoa - PB";
const DEFAULT_DESCRIPTION =
  "A Kreative Agency é uma agência de marketing e produção audiovisual em João Pessoa, Paraíba. Oferecemos tráfego pago, gestão de social media (Instagram, TikTok), criação de sites, fotos e edição de vídeo. Especialistas em marketing para restaurantes, clínicas médicas e odontológicas, empresas, construção civil, mercado imobiliário, direito, gospel, eventos e casamentos.";
const OG_IMAGE_URL = `${SITE_URL}/bannerkreative.jpg`;

export const metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: `${SITE_NAME}: %s`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Glauber Monteiro", url: SITE_URL }],
  keywords: [
    "agência de marketing joão pessoa",
    "produção audiovisual joão pessoa",
    "marketing digital paraíba",
    "agência de publicidade jp",
    "kreative agency",
    "gravação de eventos joão pessoa",
    "filmagem de casamentos joão pessoa",
    "marketing para restaurantes",
    "marketing médico",
    "marketing odontológico",
    "marketing empresarial",
    "marketing para construção civil",
    "marketing imobiliário",
    "marketing para advogados",
    "marketing cristão gospel",
    "gestão de redes sociais joão pessoa",
    "social media instagram tiktok",
    "tráfego pago joão pessoa",
    "criação de sites joão pessoa",
    "edição de vídeo e fotos",
    "fotografia corporativa"
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Kreative Agency - Agência em João Pessoa",
      },
    ],
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  // Schema JSON-LD para SEO Local (LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kreative Agency",
    "image": OG_IMAGE_URL,
    "description": DEFAULT_DESCRIPTION,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "João Pessoa",
      "addressRegion": "PB",
      "addressCountry": "BR"
    },
    "url": SITE_URL,
    "areaServed": {
      "@type": "City",
      "name": "João Pessoa"
    },
    "knowsAbout": [
      "Marketing Digital",
      "Produção Audiovisual",
      "Gestão de Redes Sociais",
      "Tráfego Pago",
      "Criação de Sites",
      "Fotografia e Edição"
    ]
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
