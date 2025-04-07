import "./globals.css";
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('@/components/Navbar'))


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
      </body>
    </html>
  );
}
