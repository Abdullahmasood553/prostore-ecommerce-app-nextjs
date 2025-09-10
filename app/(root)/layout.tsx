import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ['latin']
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 wrapper">
            { children }
        </main>
        <Footer />
    </div>
  );
}
