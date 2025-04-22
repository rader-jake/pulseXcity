import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Pulse x City – Healthy Social Connections Near You',
  description: 'Discover and join curated fitness events in your city. Powered by community, sweat, and good vibes.',
  openGraph: {
    title: 'Pulse x City – Healthy Social Connections Near You',
    description: 'Discover and join curated fitness events in your city. Powered by community, sweat, and good vibes.',
    url: 'https://pulsexcity.com', // change to your actual URL
    siteName: 'Pulse x City',
    images: [
      {
        url: 'https://pulsexcity.com/pulsexcity.png', // upload this to your public folder or a CDN
        width: 1200,
        height: 630,
        alt: 'Pulse x City Event Preview',
      },
    ],
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
