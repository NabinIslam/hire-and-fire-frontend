const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      primary: "#F90945",
      secondary: "#004785",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/hero-bg.png')",
        "banner-bg": "url('/Background-image-1.jpg')",
        "contact-bg": "url('/Background image 2.jpg')",
        "our-success-bg": "url('/our-success-bg.jpg')",
        "why-choose-us-bg": "url('/images/why-choose-us-bg.png')",
      },
      keyframes: {
        pulse: {
          "25%": {
            transform: "scale(0.9)",
          },
          "75%": {
            transform: "scale(1.1)",
          },
        },
      },
      animation: {
        pulse: "pulse 1s ease-in-out infinite",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
