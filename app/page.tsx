import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Specialties from "@/components/Specialties";
import SupportSection from "@/components/SupportSection";
import AboutSection from "@/components/AboutSection";
import FAQs from "@/components/FAQs";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import OurOffice from "@/components/OurOffice";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <IntroSection />
      <Specialties />
      <SupportSection />
      <AboutSection />
      <OurOffice />
      <FAQs />
      <ProfessionalBackground />
      <CTA />
      <Footer />
    </main>
  );
}
