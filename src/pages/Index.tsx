import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PlatformSection from "@/components/home/PlatformSection";
import ServicesSection from "@/components/home/ServicesSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <PlatformSection />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
