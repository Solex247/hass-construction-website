import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hass Construction Company | Building for Generations",
  description:
    "Hass Construction Company — thoughtful residential construction, renovation and project delivery built for generations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
