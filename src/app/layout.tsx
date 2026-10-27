import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio By Yash",
  description:
    "A personal portfolio showcasing my projects, skills, experience, and journey as a developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        {/* Offset for the fixed desktop sidebar (w-25 / xl:w-28) and the mobile header (h-19 is handled per-section) */}
        <div className="flex min-h-screen flex-1 flex-col overflow-x-clip lg:pl-25 xl:pl-28">
          <main className="w-full flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}