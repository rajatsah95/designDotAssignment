import "./globals.css";
import Navbar from "./components/Navbar";
import type { ReactNode } from "react";

export const metadata = {
  title: "Company Website",
  description: "Responsive company website",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}