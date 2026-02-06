// export default function StickyApply() {
//     return (
//       <a
//         href="https://wa.me/919876543210"
//         target="_blank"
//         className="fixed bottom-0 w-full bg-red-600 text-white py-2 overflow-hidden"
//       >
//         <div className="animate-marquee whitespace-nowrap">
//            Apply Now | Click Here to Chat on WhatsApp 
//         </div>
//       </a>
//     );
//   }
import { Link } from "react-router-dom";

export default function StickyApply() {
  return (
    <Link
      to="/apply"
      className="fixed bottom-0 w-full bg-[#edc98f] text-black py-2 overflow-hidden rounded-t-2xl shadow-lg"
    >
      <div className="animate-marquee whitespace-nowrap text-center font-bold text-lg">
        Apply Now – Admission Form Open
      </div>
    </Link>
  );
}