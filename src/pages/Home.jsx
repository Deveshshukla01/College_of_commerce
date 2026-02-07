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
      <section id="about"> <About /> </section>
      <VanishText/>
      <section id="courses">  <Courses /> </section>
      <Admissions />
      <section id="why">  <Gallery /> </section>
      <section id="students">  <Testimonials />   </section>
      <section id="testimonials">   <ModernTestimonials/></section>
    
      {/* <Contact /> */}
      <Footer />
      <StickyApply />
    </>
  );
}
