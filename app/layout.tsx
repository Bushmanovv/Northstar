import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northstar — Engineering Roadmap",
  description: "A practical one-year roadmap across infrastructure, networking, cloud, DevOps and cybersecurity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
