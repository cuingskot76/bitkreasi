import Hero from "@/app/Hero";
import { Service } from "./Service/Service";
import Cta from "./Cta/Cta";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />
      <Service />
      <Cta />
      <Footer />
    </main>
  );
}
