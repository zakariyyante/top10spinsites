import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top 10 Spin Sites | UK's Best Casino Reviews 2026",
  description: "Compare the best UK casino sites. Expert reviews, exclusive bonuses, and rapid payouts. Find your perfect spin site today.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual ID
const CONVERSION_LABEL = 'XXXXXXXXXXXX'; // Replace with actual label

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '${GA_MEASUREMENT_ID}/${CONVERSION_LABEL}',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
