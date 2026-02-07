import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCoursesClick = () => {
    navigate("/#courses");
    setTimeout(() => {
      const section = document.getElementById("courses");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-black text-gray-300">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LOGO & BRAND */}
        <div>
          <img
            src="/images/Logo.png"
            alt="ABC Institution Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            ABC Institution is committed to delivering quality education,
            career-focused learning, and a brighter future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={handleHomeClick}
                className="hover:text-red-500 transition"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={handleCoursesClick}
                className="hover:text-red-500 transition"
              >
                Courses
              </button>
            </li>

            <li>
              <Link
                to="/apply"
                className="hover:text-red-500 transition"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-400 mb-3">
            India <br />
            +91 98765 43210 <br />
            info@abcinstitution.com
          </p>

          <div className="flex gap-4 mt-4 text-sm">
            <a href="#" className="hover:text-red-500 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-red-500 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © 2026 <span className="text-white">College of Commerce</span>. All rights reserved.
      </div>
    </footer>
  );
}
