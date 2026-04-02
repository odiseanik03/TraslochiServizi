import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DualServiceSection from "@/components/DualServiceSection";
import Services from "@/components/Services";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import CertificateSection from "@/components/CertificateSection";
import Footer from "@/components/Footer";

const Map = dynamic(() => import("@/components/map"), {
  loading: () => <SectionPlaceholder height={520} />,
});

const BeforeAfterSection = dynamic(() => import("@/components/BeforeAfterSection"), {
  loading: () => <SectionPlaceholder height={640} />,
});

const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"), {
  loading: () => <SectionPlaceholder height={420} />,
});

const FloatingButtons = dynamic(() => import("@/components/FloatingButtons"));

function SectionPlaceholder({ height }) {
  return <div aria-hidden="true" style={{ minHeight: height }} />;
}

export default function ClientApp() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DualServiceSection />
        <Services />
        <Map />
        <WhyChooseUsSection />
        <BeforeAfterSection />
        <ContactSection />
        <CertificateSection />
        <ReviewsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
