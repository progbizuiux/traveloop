import { Geist, Geist_Mono, Montserrat,Figtree,Raleway } from "next/font/google"; // ✅ import Montserrat here
import "./globals.css";
import "@/styles/theme.scss";
import { Locomotive } from "@/lib/locomotive";
import TransitionLayout from "@/components/ui/TransitionLayout/TransitionLayout";
import LenisSmoothScroll from "@/lib/LenisScrool";
import { Navbar } from "@/components/Navbar/Navbar";
import NoSSRBootstrap from "@/lib/bootstrap";

import localFont from "next/font/local";
import ScrollToTop from "@/components/top-arrow";


// const roobert = localFont({
//   src: [
//     { path: '/fonts/roobert/Roobert-TRIAL.woff2', weight: '400', style: 'normal' },
//   ],
//   variable: '--font-roobert',
//   display: "swap",
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {};

const montserrat = Montserrat({
  subsets: ["latin"],
  // Pick what you need:
  weight: ["300", "400", "500", "600", "700"], // or use 'variable' below
  variable: "--font-montserrat", // use this for Tailwind/CSS variable setup
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  // Pick what you need:
  weight: ["300", "400", "500", "600", "700"], // or use 'variable' below
  variable: "--font-figtree", // use this for Tailwind/CSS variable setup
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  // Pick what you need:
  weight: ["300", "400", "500", "600", "700"], // or use 'variable' below
  variable: "--font-raleway", // use this for Tailwind/CSS variable setup
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${figtree.variable} ${raleway.variable}`}
        cz-shortcut-listen="true"
        suppressHydrationWarning={true}
        // style={{
        //   fontFamily:
        //     typeof window !== "undefined"
        //       ? "var(--font-satoshi), sans-serif"
        //       : undefined,
        // }}
      >
        <NoSSRBootstrap />
        {/* <Locomotive> */}
        <LenisSmoothScroll>
          <Navbar />
          {/* <TransitionLayout> */}
          {children}
          {/* </TransitionLayout> */}
        </LenisSmoothScroll>
        <ScrollToTop/>

        {/* </Locomotive> */}
      </body>
    </html>
  );
}
