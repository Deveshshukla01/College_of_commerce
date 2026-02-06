import { useNavigate } from "react-router-dom";

export default function ApplyNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md px-6 py-3 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center">
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="h-10 object-contain cursor-pointer hover:opacity-90 transition"
          onClick={() => navigate("/")}
        />
      </div>

      {/* GO BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 hover:shadow-lg transition"
      >
        Go Back
      </button>
    </nav>
  );
}
