/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        clipPath: {
          wave: "polygon(0 0,100% 0,100% 85%,0 100%)",
        },
      },
    },
    plugins: [],
  };
  