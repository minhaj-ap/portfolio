import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "MINHAJ AP | FULL STACK DEVELOPER",
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
      <body>
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
