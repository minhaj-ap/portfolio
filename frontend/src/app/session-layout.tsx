"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SessionLayout({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
