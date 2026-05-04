import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://kreativeagency.com.br";
const SITE_NAME = "Kreative Agency - Audiovisual e Marketing Estratégico";
const DEFAULT_TITLE = "Kreative Agency";
const DEFAULT_DESCRIPTION =
  "Transforme a atenção da sua audiência em vendas. A Kreative Agency une produção audiovisual de alto impacto, tráfego pago e marketing estratégico para escalar os resultados do seu negócio.";
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
    "produção audiovisual",
    "agência de vídeos",
    "vídeos corporativos",
    "edição de vídeo",
    "vídeos para redes sociais",
    "criativos para anúncios",
    "vídeos de alta conversão",
    "estratégia de vendas",
    "marketing audiovisual",
    "lançamentos",
    "gravação de vídeos",
    "audiovisual premium",
    "copywriting de conversão",
    "kreative agência",
    "agência de marketing e audiovisual",
    "vídeos para tiktok e reels",
    "produção de conteúdo",
    "gestão de tráfego e vídeos",
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
        alt: "Logo da Kreative Agency",
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
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
