import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Yash Kumar",
    role: "CA Aspirant",
    image: "/images/testimonials/1.png",
    text:
      "Great faculty, professional teachers and most importantly student welfare is the primary agenda in COC. Best coaching institute in Tricity!",
  },
  {
    id: 2,
    name: "Nischay Dhingra",
    role: "Commerce Student",
    image: "/images/testimonials/2.png",
    text:
      "College Of Commerce is an excellent coaching centre! The teachers are very knowledgeable and help us understand the subjects well. Regular tests keep us prepared for competitive exams. The class size is good, so we get personal attention.",
  },
  {
    id: 3,
    name: "Suraj Maurya",
    role: "CA Student",
    image: "/images/testimonials/3.png",
    text:
      "The College of Commerce stands out as an exceptional coaching center, offering high-quality, specialized courses that truly prepare students for success. The experienced faculty provide personalized attention and expert guidance.",
  },
  {
    id: 4,
    name: "Manu Padam",
    role: "Commerce Student",
    image: "/images/testimonials/4.png",
    text:
      "College Of Commerce is an exceptional coaching centre that truly prioritizes its students. The personal attention provided by the faculty ensures that each student feels valued. Regular evaluations keep us on track for continuous improvement.",
  },
  {
    id: 5,
    name: "Sachit Ghambir",
    role: "CA Aspirant",
    image: "/images/testimonials/5.png",
    text:
      "College of Commerce is the best institution in North India, having highly knowledgeable and dedicated faculty who put their best efforts into building strong CA preparation.",
  },
  {
    id: 6,
    name: "Riya Singh",
    role: "B.Com Student",
    image: "/images/testimonials/6.png",
    text:
      "College of Commerce offers top-notch B.Com coaching with experienced faculty and comprehensive study resources. Their exam-oriented teaching ensures excellent results every year. Highly recommended for B.Com students!",
  },
];

const REVIEW_LINK =
  "https://www.justdial.com/Chandigarh/College-Of-Commerce-Near-Guru-Nanak-Public-School-Chandigarh-Sector-36D/0172PX172-X172-220204143555-Z1H5_BZDET/reviews";

export default function TestimonialGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const next = () =>
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wide text-sm">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            What Our Students Say
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Real experiences from students who trust College of Commerce for their academic success.
          </p>
        </div>

        {/* MOBILE SLIDER */}
        <div className="relative sm:hidden max-w-md mx-auto">
          <div
            key={testimonials[activeIndex].id}
            className="relative bg-white border border-slate-200 rounded-xl p-8 text-center shadow-md"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-md">
              <Quote className="w-5 h-5 text-white" />
            </div>

            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-16 h-16 rounded-full mx-auto mt-6 mb-4 border-2 border-red-600"
            />

            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
              ))}
            </div>

            <p className="text-slate-700 text-[15px] leading-relaxed mb-6">
              {testimonials[activeIndex].text}
            </p>

            <h4 className="font-semibold text-slate-900">
              {testimonials[activeIndex].name}
            </h4>
            <span className="text-xs text-red-600">
              {testimonials[activeIndex].role}
            </span>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-slate-300 hover:bg-red-600 hover:text-white transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-slate-300 hover:bg-red-600 hover:text-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white border border-slate-200 rounded-xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.45)]"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                <Quote className="w-5 h-5 text-white" />
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mt-6 mb-4 border-2 border-red-600"
              />

              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                ))}
              </div>

              <p className="text-slate-700 text-[15px] leading-relaxed mb-6">
                {item.text}
              </p>

              <h4 className="font-semibold text-slate-900">{item.name}</h4>
              <span className="text-xs text-red-600">{item.role}</span>
            </div>
          ))}
        </div>

        {/* ⭐ BOTTOM RATING SECTION */}
        <div className="mt-16 flex flex-col items-center text-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-red-600 text-red-600" />
            <span className="text-sm text-slate-700 font-medium">
              Rated <strong>4.8</strong> • 547 reviews (till 7th Feb 2026)
            </span>
          </div>

          <a
            href={REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold text-sm hover:underline"
          >
            Learn more on Justdial
          </a>
        </div>

      </div>
    </section>
  );
}
