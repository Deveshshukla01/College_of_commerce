
import { useNavigate } from "react-router-dom";

const courses = [
  { name: "11th", path: "/courses/11th" },
  { name: "12th", path: "/courses/12th" },
  { name: "CA", path: "/courses/ca" },
  { name: "CS", path: "/courses/cs" },
  { name: "B.Com", path: "/courses/bcom" },
];

export default function Courses() {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 md:py-20 flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 place-items-center">
          {courses.map((course) => (
            <div
              key={course.name}
              onClick={() => navigate(course.path)}
              className="group relative w-full max-w-[200px] aspect-square cursor-pointer overflow-hidden rounded-xl border border-gray-200 shadow-md bg-white flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              {/* Red fill animation */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-red-600 transition-all duration-500 group-hover:h-full"></div>

              {/* Light background text */}
              <span className="absolute text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-200 group-hover:text-red-300 transition z-10">
                {course.name}
              </span>

              {/* Foreground text */}
              <span className="relative z-20 text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-white transition">
                {course.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}