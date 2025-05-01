import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader} from "next/font/google";
import "./globals.css";
import NavBar from "../../components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: "500",
  style: "normal",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Conservation vs. Recreation",
  description: "A Comparative Case Study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-dvh w-dvw" lang="en">
      <body
        className={`h-full flex flex-col justify-center items-center ${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
      >
        <NavBar/>
        <main className="grow max-w-[100%]">
        {children}
        </main>
      </body>
    </html>
  );
}
