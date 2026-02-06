import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  { image: "/images/achievers/1.jpeg" },
  { image: "/images/achievers/2.jpeg" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-red-600 text-white py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div
          className={`transition-all duration-700 ease-out
            ${visible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}
          `}
        >
          <p className="uppercase tracking-wide text-sm mb-4">
            Students Speak
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover the inspiring stories{" "}
            <span className="font-extrabold">
              and gain valuable insights
            </span>{" "}
            straight from our accomplished graduates
          </h2>

          {/* DESKTOP CONTROLS (unchanged) */}
          <div className="hidden md:flex items-center gap-6 mt-10">
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  setActive(active === 0 ? testimonials.length - 1 : active - 1)
                }
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() => setActive((active + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {testimonials.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={`testimonial-${index}`}
                  onClick={() => setActive(index)}
                  className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition
                    ${
                      active === index
                        ? "border-white scale-105"
                        : "border-transparent opacity-70"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP APPLY BUTTON (unchanged) */}
          <div className="hidden md:flex mt-10 justify-center">
            <Link
              to="/apply"
              className="relative inline-block px-12 py-3 font-semibold
                        text-red-600 bg-white border-2 border-black
                        overflow-hidden group
                        transform transition-transform duration-300
                        hover:scale-105"
            >
              <span
                className="absolute inset-0 bg-red-600
                          translate-x-[-100%]
                          group-hover:translate-x-0
                          transition-transform duration-500 ease-out"
              />
              <span
                className="relative z-10
                          group-hover:text-white
                          transition-colors duration-300"
              >
                Apply Now
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-md ml-auto">
          <img
            src={testimonials[active].image}
            alt="Student testimonial"
            className="w-full h-[520px] object-cover"
          />

          {/* MOBILE CONTROLS BELOW IMAGE */}
          <div className="md:hidden px-6 py-6 bg-red-600 space-y-6">

          {/* Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() =>
                setActive(active === 0 ? testimonials.length - 1 : active - 1)
              }
              className="w-10 h-10 rounded-full bg-white text-red-600 flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => setActive((active + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-white text-red-600 flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-3">
            {testimonials.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={`testimonial-${index}`}
                onClick={() => setActive(index)}
                className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition
                  ${
                    active === index
                      ? "border-white scale-105"
                      : "border-transparent opacity-70"
                  }
                `}
              />
            ))}
          </div>

          {/* Apply Now Button */}
          <div className="flex justify-center">
            <Link
              to="/apply"
              className="relative inline-block px-12 py-3 font-semibold
                        text-red-600 bg-white border-2 border-black
                        overflow-hidden group"
            >
              {/* Red slide fill */}
              <span
                className="absolute inset-0 bg-red-600
                          translate-x-[-100%]
                          group-hover:translate-x-0
                          transition-transform duration-500 ease-out"
              />

              {/* Text */}
              <span
                className="relative z-10
                          group-hover:text-white
                          transition-colors duration-300"
              >
                Apply Now
              </span>
            </Link>
          </div>

          </div>

        </div>

      </div>
    </section>
  );
}
