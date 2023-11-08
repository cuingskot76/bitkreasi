import {
  Advantage,
  Cta,
  Footer,
  Hero,
  Project,
  Service,
} from "@/app/component/index";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />
      <Service />
      <Advantage />
      <Project />
      <Cta />
      <Footer />
    </main>
  );
}
