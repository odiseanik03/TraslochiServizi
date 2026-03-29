"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DualServiceSection from "@/components/DualServiceSection";
import Services from "@/components/Services";
import Map from "@/components/map";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import CertificateSection from "@/components/CertificateSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import BeforeAfterSection from "@/components/BeforeAfterSection";

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
