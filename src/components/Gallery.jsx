
import { useState, memo } from "react";
import { motion } from "framer-motion";

const DATA = [
  {
    id: 1,
    title: "30+ Years of Academic Excellence",
    desc: `Established in 1994, the Institute of Commerce has built a strong legacy of
    over three decades in commerce education. With consistent academic results and
    a reputation for excellence, the institute has successfully shaped generations
    of skilled, ethical, and industry-ready professionals.`,
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    ],
  },
  {
    id: 2,
    title: "Experienced & Dedicated Faculty",
    desc: `Our faculty members bring strong academic foundations combined with valuable
    industry experience. They focus on conceptual clarity, practical exposure, and
    personalized mentorship, ensuring students gain real-world insights alongside
    academic excellence.`,
    images: [
      "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    ],
  },
  {
    id: 3,
    title: "Career-Oriented Curriculum",
    desc: `The curriculum is aligned with modern business practices and evolving market
    needs. Regular updates ensure students develop relevant professional skills,
    analytical thinking, and industry awareness, preparing them for competitive
    career opportunities.`,
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    ],
  },
  {
    id: 4,
    title: "Strong Focus on Practical Learning",
    desc: `Practical learning is emphasized through case studies, projects,
    presentations, workshops, and internships. This hands-on approach allows
    students to apply theoretical concepts, develop problem-solving abilities,
    and gain confidence in professional environments.`,
    images: [
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
    ],
  },
  {
    id: 5,
    title: "Student-Centric Learning Environment",
    desc: `A supportive and student-focused environment encourages growth,
    innovation, leadership, and collaboration. Academic counseling, mentoring,
    and continuous guidance ensure that every student progresses with clarity,
    confidence, and purpose.`,
    images: [
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    ],
  },
  {
    id: 6,
    title: "Consistent Academic Results & Alumni Success",
    desc: `The institute has consistently delivered strong academic outcomes, with
    alumni succeeding across diverse industries such as finance, corporate
    management, entrepreneurship, education, and public services. Their success
    reflects the institute’s commitment to quality education.`,
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    ],
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-20">
          Why Choose <br />
          <span className="text-red-600 font-bold">
            College of Commerce
          </span>
        </h2>

        {DATA.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={active === item.id}
            onClick={() => setActive(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------- ACCORDION ITEM ---------------- */

const AccordionItem = memo(function AccordionItem({
  item,
  isOpen,
  onClick,
}) {
  return (
    <div className="border-b">
      {/* HEADER */}
      <button
        onClick={onClick}
        className="
          group w-full flex items-center justify-between
          py-10 text-left cursor-pointer
          transition-colors duration-300
          hover:bg-gray-200
        "
      >
        <div className="flex items-center gap-8">
          <span
            className="
              text-6xl font-light text-gray-200
              transition-colors duration-300
              group-hover:text-gray-300
            "
          >
            {String(item.id).padStart(2, "0")}
          </span>

          <h3 className="text-2xl font-semibold max-w-xl">
            {item.title}
          </h3>
        </div>

        <motion.span
          animate={{
            rotate: isOpen ? 90 : 0,
            x: isOpen ? 6 : 0,
          }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            text-3xl transition-colors duration-300
            group-hover:text-red-600
          "
        >
          →
        </motion.span>
      </button>

      {/* CONTENT */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="overflow-hidden will-change-[height,opacity]"
      >
        <div className="grid md:grid-cols-12 gap-10 pb-16">
          <p className="md:col-span-5 text-gray-600 leading-relaxed">
            {item.desc}
          </p>

          <div className="md:col-span-6 flex gap-6">
            {item.images.map((img, i) => (
              <div
                key={i}
                className="w-1/2 h-64 rounded-xl overflow-hidden bg-gray-200"
              >
                <img
                  src={img}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
});