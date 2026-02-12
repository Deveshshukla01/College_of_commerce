

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Apply from "./pages/Apply";

// // course pages
// import Tenth from "./pages/Tenth";
// import Twelfth from "./pages/Twelfth";
// import CA from "./pages/CA";
// import CS from "./pages/CS";
// import BCom from "./pages/BCom";


// import ScrollToTop from "./components/ScrollToTop";

// export default function App() {
//   return (
//     <BrowserRouter>
     
//       <ScrollToTop />

//       <Routes>
//         {/* existing logic – unchanged */}
//         <Route path="/" element={<Home />} />
//         <Route path="/apply" element={<Apply />} />

//         {/* course routes */}
//         <Route path="/courses/11th" element={<Tenth />} />
//         <Route path="/courses/12th" element={<Twelfth />} />
//         <Route path="/courses/ca" element={<CA />} />
//         <Route path="/courses/cs" element={<CS />} />
//         <Route path="/courses/bcom" element={<BCom />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Apply from "./pages/Apply";

// course pages
import Tenth from "./pages/Tenth";
import Twelfth from "./pages/Twelfth";
import CA from "./pages/CA";
import CS from "./pages/CS";
import BCom from "./pages/BCom";


import Payment from "./pages/Payment";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* existing logic – unchanged */}
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />

        {/* course routes */}
        <Route path="/courses/11th" element={<Tenth />} />
        <Route path="/courses/12th" element={<Twelfth />} />
        <Route path="/courses/ca" element={<CA />} />
        <Route path="/courses/cs" element={<CS />} />
        <Route path="/courses/bcom" element={<BCom />} />

      
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
