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
import MoreAboutCollege from "../components/MoreAboutCollege";

export default function Home() {
  return (
    <>
 

      {/* <TopBar /> */}
      <Navbar />
      <div className="sticky top-0 z-50 w-full bg-red-600 text-white">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center">
    <span className="text-center font-bold tracking-wide
      text-xl
      sm:text-2xl
      md:text-4xl
      lg:text-6xl
      xl:text-8xl">
      UNDER MAINTENANCE
    </span>
  </div>
</div>

      <Hero />
      <section id="about"> <About /> </section>
  
      <VanishText/>
      <section id="courses">  <Courses /> </section>
      <Admissions />
      <section id="why">  <Gallery /> </section>
      <section id="students">  <Testimonials />   </section>
      <MoreAboutCollege/>
      <section id="testimonials">   <ModernTestimonials/></section>
    
      {/* <Contact /> */}
      <Footer />
      <StickyApply />
    </>
  );
}
