"use client";
import { useEffect } from "react";

export default function MailtoRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const clickEvent = new MouseEvent("click");
      const link = document.createElement("a");
      link.href = "mailto:minhajap00@gmail.com";
      link.dispatchEvent(clickEvent);
    }, 1000); // give a small delay after mount

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Opening mail app...</p>
      <a href="mailto:minhajap00@gmail.com" className="hidden" id="mailto-link">
        Open Mail
      </a>
    </div>
  );
}
