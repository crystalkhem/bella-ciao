import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Bella Ciao - Greensboro, NC Cafe & Creperie",
  description: "Experience the best crepes and hand-crafted coffee in Greensboro at Bella Ciao. Visit our European-style café for artisan drinks, fresh pastries, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
      <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
