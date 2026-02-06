// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export const VanishText = () => {
//   return (
//     <div className="bg-red-600 px-4 py-8 text-center md:py-8">
//       <h3 className="text-3xl font-medium text-white sm:text-4xl md:text-5xl lg:text-6xl">
//         We Offer Many Courses
//         <AnimatedText
//           phrases={[
//             "Hybrid",
//             "Online",
//             "Offline",
//           ]}
//         />
//       </h3>
//     </div>
//   );
// };

// const ONE_SECOND = 1000;
// const WAIT_TIME = ONE_SECOND * 2;

// const AnimatedText = ({ phrases }) => {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const intervalRef = setInterval(() => {
//       setActive((pv) => (pv + 1) % phrases.length);
//     }, WAIT_TIME);

//     return () => clearInterval(intervalRef);
//   }, [phrases]);

//   return (
//     <div className="relative mb-14 mt-2 w-full">
//       {phrases.map((phrase) => {
//         const isActive = phrases[active] === phrase;
//         return (
//           <motion.div
//             key={phrase}
//             initial={false}
//             animate={isActive ? "active" : "inactive"}
//             style={{
//               x: "-50%",
//             }}
//             variants={{
//               active: {
//                 opacity: 1,
//                 scale: 1,
//               },
//               inactive: {
//                 opacity: 0,
//                 scale: 0,
//               },
//             }}
//             className="absolute left-1/2 top-0 w-full text-violet-50"
//           >
//             {phrase}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const VanishText = () => {
  return (
    <div className="bg-white px-4 py-8 text-center md:py-10">
      <h3 className="text-3xl font-medium text-black sm:text-4xl md:text-5xl lg:text-6xl">
        We Offer Many Courses
      </h3>

      <AnimatedText phrases={["Hybrid", "Online", "Offline"]} />
    </div>
  );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 2;

const AnimatedText = ({ phrases }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="relative mt-3 h-[4.6em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={phrases[active]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
        >
          {phrases[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
