import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import PlatformMarquee from "@/components/PlatformMarquee";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Industry from "@/components/Industry";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <PlatformMarquee />
      <Testimonials />
      <WhyUs />
      <Team />
      <Industry />
      <Contact />
      <Footer />
    </main>
  );
}
