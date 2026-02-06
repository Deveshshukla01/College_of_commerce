// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const images = [
//   "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative min-h-screen flex items-center"
//       style={{
//         backgroundImage: `url(${images[index]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/60" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-14 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             India’s Prestigious <br />
//             <span className="text-red-400">
//               Scholarship & National-Level
//             </span>{" "}
//             Entrance Test
//           </h1>

//           <p className="text-lg opacity-90 max-w-lg">
//             Secure your admission through our structured scholarship and
//             entrance examination process.
//           </p>
//         </div>

//         {/* RIGHT APPLY BOX */}
//         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white shadow-xl max-w-md ml-auto">
//           <h3 className="text-2xl font-semibold mb-4 text-center">
//             How to Apply
//           </h3>

//           <div className="space-y-4 text-sm opacity-90">
//             <div className="flex gap-3">
//               <span className="font-bold text-red-400">1.</span>
//               <p>
//                 You will see a <strong>QR Code</strong>. Pay the required amount
//                 and copy the <strong>Transaction ID</strong>.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <span className="font-bold text-red-400">2.</span>
//               <p>
//                 Fill in the application form and enter your
//                 <strong> Transaction ID</strong>.
//               </p>
//             </div>

//             <p className="text-xs opacity-80 pt-2 text-center">
//               Once the transaction is confirmed,{" "}
//               <strong>College of Commerce</strong> will connect with you.
//             </p>
//           </div>

//           <Link
//             to="/apply"
//             target="_blank"
//             className="block text-center mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold"
//           >
//             Go to the Form
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            India’s Prestigious <br />
            <span className="text-red-400">
              Scholarship & National-Level
            </span>{" "}
            Entrance Test
          </h1>

          <p className="text-lg opacity-90 max-w-lg">
            Secure your admission through our structured scholarship and
            entrance examination process.
          </p>
        </div>

        {/* RIGHT APPLY BOX – TRANSLUCENT */}
        <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 shadow-2xl max-w-md ml-auto text-center border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-3">
            Apply for Admission
          </h3>

          <p className="text-sm text-white/90 mb-2">
            Fill in the form after reading the <strong>How to Apply</strong>{" "}
            instructions on the Apply page.
          </p>

          <p className="text-sm text-white/80 mb-6">
            After submission, our admissions team will connect with you shortly.
          </p>

          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/apply"
              target="_blank"
              className="relative overflow-hidden group bg-red-600 text-white py-3 font-semibold"
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute inset-0 bg-red-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>

            <a
              href="/brochure.pdf"
              target="_blank"
              className="relative overflow-hidden group bg-red-600 text-white py-3 font-semibold"
            >
              <span className="relative z-10">Download Brochure</span>
              <span className="absolute inset-0 bg-red-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



