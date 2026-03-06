import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tourms Biofarms Ventures",
  description: "Fresh agricultural products delivered to your door. Crops, livestock, processed goods and farming knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JYKJW3ND8Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JYKJW3ND8Z');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <a href="https://wa.me/2347066563559?text=Hello%20Tourms%20Biofarms%2C%20I%20would%20like%20to%20make%20an%20enquiry." target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '2rem', right: '2rem', backgroundColor: '#25D366', color: 'white', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', textDecoration: 'none', zIndex: 1000 }} title="Chat with us on WhatsApp">
          💬
        </a>
      </body>
    </html>
  );
}