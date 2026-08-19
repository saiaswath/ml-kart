import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ML Kart — The AI Layer for Business",
  description:
    "ML Kart embeds AI into the tools, workflows and customer experiences your business already uses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
