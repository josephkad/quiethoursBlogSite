import Footer from "@/lib/pageLayout/Footer";
import Hero from "@/lib/pageLayout/Hero";
import Nav from "@/lib/pageLayout/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
