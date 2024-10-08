import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveSectionContextProvider } from "../../context/activeSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grupo Astraea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <ActiveSectionContextProvider>
        <body className={inter.className}>
          {children}
        </body>
      </ActiveSectionContextProvider>
    </html>
  );
}
