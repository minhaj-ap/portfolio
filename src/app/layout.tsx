import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import ThemeToggle from "@/components/theme-toggle";

import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: "Minhaj AP | Full Stack Developer",
  description:
    "Portfolio of Minhaj AP – A passionate full stack developer specializing in the MERN stack with Next.js, currently learning Python and DSA. Open to jobs, internships, and freelance work.",
  keywords: [
    "Minhaj AP",
"Ap Minhaj",
"Minhaj",
"Ap",
"Minhaj pattikkad",
"Minhaj perinthalmanna",
"Minhaj pmna",
"Minhaj Ap perinthalmanna ",
"Minhaj perinthalmanna ",
"perinthalmanna developer ",
"Ap Minhaj perinthalmanna",
"Ap developer",
"Developer Minhaj",
"Developer backend",
"react developer",
"backend",
"perinthalmanna",
"pmna",
"backend pmna",
"Mern pmna",
"Mern developer",
"Mern perinthalmanna",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "Python",
    "DSA",
    "TypeScript",
    "React Developer",
    "Backend Developer",
    "Internship",
    "Junior Developer",
    "Mallappuram",
    "Kerala",
    "Portfolio",
  ],
  authors: [{ name: "Minhaj AP" }],
  creator: "Minhaj AP",
  metadataBase: new URL("https://portfolio-minhaj.vercel.app"),
  openGraph: {
    title: "Minhaj AP | Full Stack Developer",
    description:
      "Full stack developer based in Kerala, India. Proficient in the MERN stack and Next.js, actively learning Python and DSA. Seeking job opportunities and internships.",
    url: "https://portfolio-minhaj.vercel.app",
    siteName: "Minhaj Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://portfolio-minhaj.vercel.app/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Minhaj AP Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minhaj AP | Full Stack Developer",
    description:
      "Explore the portfolio of Minhaj AP, a full stack developer with strong backend skills, open to internships and opportunities.",
    images: ["https://portfolio-minhaj.vercel.app/og-image.png"], 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var storedTheme = localStorage.getItem('theme');
                var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
                document.documentElement.classList.add(initialTheme);
              })();
            `,
          }}
        />
      </head>
      <meta
        name="google-site-verification"
        content="VYTPW2PcOS0YgyX_sB3Dg9IaOTU4wQ_fRWD--lp8Sp0"
      />
      <body>
        <ThemeProvider>
          {children}
          <ToastContainer position="bottom-right" autoClose={1500} />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
