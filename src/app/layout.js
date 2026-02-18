import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],  

  display: "swap",
})



export const metadata = {
  title: "Everest Engine | Crafted Web Developer",
  description: "High quality custom website Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${outfit.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
