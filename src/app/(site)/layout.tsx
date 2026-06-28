import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <Navbar />
      {children}
      <Footer />
    </SmoothScrollProvider>
  );
}
