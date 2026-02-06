import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Achievers from "../components/Achievers";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Admissions from "../components/Admissions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import StickyApply from "../components/StickyApply";
import { VanishText } from "../components/VanishTexts";
import ModernTestimonials from "../components/ModernTestimonials";

export default function Home() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <Hero />
      <About />
      <VanishText/>
      <Courses />
      {/* <Achievers /> */}
      <Admissions />
      <Gallery />
      <Testimonials />
      <ModernTestimonials/>
     
      {/* <Contact /> */}
      <Footer />
      <StickyApply />
    </>
  );
}
