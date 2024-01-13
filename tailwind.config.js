/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC700",
        secondary: "#433434",
        tersier: "#B1B1B1",
        title: "#613D2B",
        background: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
