/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px", // Example: Adjust the pixel value as needed for your 3xl breakpoint
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
