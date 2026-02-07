// import { useEffect, useState } from "react";
// import {
//   Menu,
//   X,
//   Phone,
//   MapPin,
//   MessageCircle,
//   Facebook,
//   Instagram,
//   Twitter,
// } from "lucide-react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItemClass =
//     "relative cursor-pointer font-medium transition-colors duration-300 hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full";

//   return (
//     <nav className="fixed top-0 w-full z-50">
//       {/* 🔝 TOP STRIP */}
//       <div
//         className={`transition-all duration-300 overflow-hidden ${
//           scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
//         }`}
//       >
//         <div className="bg-transparent text-white">
//           <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
//             <div className="flex items-center gap-4">
//               <span className="flex items-center gap-1 hover:text-green-400 cursor-pointer">
//                 <MessageCircle size={16} /> WhatsApp
//               </span>
//               <span className="flex items-center gap-1 hover:text-blue-300 cursor-pointer">
//                 <Phone size={16} /> Call Us
//               </span>
//               <span className="flex items-center gap-1 hover:text-red-300 cursor-pointer">
//                 <MapPin size={16} /> Map
//               </span>
//             </div>

//             <div className="flex items-center gap-4">
//               <Facebook size={16} className="hover:text-blue-400 cursor-pointer" />
//               <Instagram size={16} className="hover:text-pink-400 cursor-pointer" />
//               <Twitter size={16} className="hover:text-sky-400 cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <div
//         className={`transition-all duration-300 border-b ${
//           scrolled
//             ? "bg-white shadow-sm border-gray-200"
//             : "bg-transparent border-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
//           {/* Logo */}
//           <img
//             src="/images/Logo.png"
//             alt="ABC Institution Logo"
//             className="h-10 w-auto object-contain"
//           />

//           {/* Enquire Box */}
//           <div className="flex items-center gap-4 bg-red-600 text-white px-6 py-3 rounded-md shadow-md">
//             <div className="flex flex-col leading-tight">
//               <span className="text-sm font-semibold uppercase tracking-wide">
//                 Enquire Now
//               </span>
//               <span className="text-base font-bold whitespace-nowrap">
//                 9876543210
//               </span>
//             </div>

//             {/* Hamburger */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="md:hidden relative w-8 h-8 flex items-center justify-center transition-transform duration-300 hover:scale-110"
//             >
//               <div
//                 className={`absolute transition-all duration-300 ${
//                   open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
//                 }`}
//               >
//                 <Menu size={22} />
//               </div>
//               <div
//                 className={`absolute transition-all duration-300 ${
//                   open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
//                 }`}
//               >
//                 <X size={22} />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM STRIP */}
//       <div
//         className={`hidden md:flex justify-center transition-all duration-300 ${
//           scrolled
//             ? "bg-white text-gray-700 border-t border-gray-200 shadow-[0_-1px_4px_rgba(0,0,0,0.04)]"
//             : "bg-transparent text-white"
//         }`}
//       >
//         {["About Us", "Why Us", "Students", "Testimonials"].map(
//           (item, index) => (
//             <div key={item} className="flex items-center px-8 py-3">
//               <span className={navItemClass}>{item}</span>
//               {index !== 3 && (
//                 <span
//                   className={`ml-8 h-5 w-px ${
//                     scrolled ? "bg-gray-300/70" : "bg-white/40"
//                   }`}
//                 />
//               )}
//             </div>
//           )
//         )}
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`md:hidden bg-white shadow-lg transition-all duration-300 ${
//           open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//         }`}
//       >
//         <ul className="flex flex-col gap-6 px-6 py-6 text-gray-700">
//           {["About Us", "Why Us", "Students", "Testimonials"].map((item) => (
//             <li key={item} className={navItemClass}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔽 Smooth Scroll Function */
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -140; // navbar height offset
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  const navItemClass =
    "relative cursor-pointer font-medium transition-colors duration-300 hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full";

  const navItems = [
    { label: "About Us", id: "about" },
    { label: "Why Us", id: "why" },
    { label: "Courses", id: "courses" },
    { label: "Students", id: "students" },
    { label: "Testimonials", id: "testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* 🔝 TOP STRIP */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="bg-transparent text-white">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 hover:text-green-400 cursor-pointer">
                <MessageCircle size={16} /> WhatsApp
              </span>
              <span className="flex items-center gap-1 hover:text-blue-300 cursor-pointer">
                <Phone size={16} /> Call Us
              </span>
              <span className="flex items-center gap-1 hover:text-red-300 cursor-pointer">
                <MapPin size={16} /> Map
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Facebook size={16} className="hover:text-blue-400 cursor-pointer" />
              <Instagram size={16} className="hover:text-pink-400 cursor-pointer" />
              <Twitter size={16} className="hover:text-sky-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-white shadow-sm border-gray-200"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <img
            src="/images/Logo.png"
            alt="Institution Logo"
            className="h-10 w-auto object-contain"
          />

          {/* Enquire Box */}
          <div className="flex items-center gap-4 bg-red-600 text-white px-6 py-3 rounded-md shadow-md">
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-wide">
                Enquire Now
              </span>
              <span className="text-base font-bold whitespace-nowrap">
                9876543210
              </span>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <div
                className={`absolute transition-all duration-300 ${
                  open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu size={22} />
              </div>
              <div
                className={`absolute transition-all duration-300 ${
                  open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              >
                <X size={22} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div
        className={`hidden md:flex justify-center transition-all duration-300 ${
          scrolled
            ? "bg-white text-gray-700 border-t border-gray-200 shadow-[0_-1px_4px_rgba(0,0,0,0.04)]"
            : "bg-transparent text-white"
        }`}
      >
        {navItems.map((item, index) => (
          <div key={item.id} className="flex items-center px-8 py-3">
            <span
              onClick={() => handleScrollTo(item.id)}
              className={navItemClass}
            >
              {item.label}
            </span>

            {index !== navItems.length - 1 && (
              <span
                className={`ml-8 h-5 w-px ${
                  scrolled ? "bg-gray-300/70" : "bg-white/40"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6 text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={navItemClass}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
