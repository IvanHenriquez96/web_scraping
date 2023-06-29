import { Navbar } from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const geologica = localFont({
  src: [
    {
      path: "../../public/fonts/Geologica-Regular.ttf",
      weight: "400",
    },
    // {
    //   path: "../../public/fonts/Poppins-Bold.ttf",
    //   weight: "700",
    // },
  ],
  // variable: "--font-poppins",
});

export const metadata = {
  title: "IHenriquez - Web Scraping",
  description: "Web Scraping",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-indigo-950 text-tema_letra")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
