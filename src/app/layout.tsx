import type { Metadata } from "next";
import "@/styles/global.scss";
import Navbar from "./components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Expansion App",
  description: "Ma super App Expansion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
