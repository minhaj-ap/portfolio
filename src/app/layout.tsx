import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import ThemeToggle from "@/components/theme-toggle";

import { ToastContainer } from "react-toastify";
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
