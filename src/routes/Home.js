import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/Heroimg";
import HeroImg2 from "../components/HeroImg2";
import Testimonials from "../components/TestimonialsContent";
import ContactContent from "../components/ContactContent";
import ServicesContent from "../components/ServicesContent";
import ResumeContent from "../components/ResumeContent";

const Home = () => {
  return (
    <section id="hero-section">
      <Navbar />

      <HeroImg />
      <HeroImg2 />
      <Testimonials />
      <ResumeContent />
      <ServicesContent />

      <ContactContent />
      <Footer />
    </section>
  );
};

export default Home;
