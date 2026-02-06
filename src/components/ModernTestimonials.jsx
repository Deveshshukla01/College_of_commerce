import { Quote } from "lucide-react";

const testimonials = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  name: "Jessica Doe",
  role: "Happy Client",
  image: "https://i.pravatar.cc/100?img=" + (i + 20),
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}));

export default function TestimonialGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wide text-sm">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                relative bg-white
                border border-slate-200
                rounded-xl
                p-8
                text-center
                shadow-md
                transition-all duration-300 ease-out
                hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.45)]
                hover:-translate-y-1
              "
            >
              {/* Quote Badge */}
              <div
                className="
                  absolute -top-4 left-1/2 -translate-x-1/2
                  w-10 h-10
                  bg-red-600
                  rounded-full
                  flex items-center justify-center
                  shadow-md
                "
              >
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Avatar */}
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-16 h-16
                  rounded-full
                  mx-auto
                  mt-6
                  mb-4
                  object-cover
                  border-2 border-red-600
                "
              />

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Name */}
              <h4 className="font-semibold text-slate-900">
                {item.name}
              </h4>
              <span className="text-xs text-red-600">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}