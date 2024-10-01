const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@headlessui/react/**/*.{js,ts,jsx,tsx}", // Include Headless UI
    flowbite.content(),
  ],
  theme: {
    colors: {
      primary: "#F90945",
      secondary: "#004785",
    },
    container: {
      center: true,
      padding: "24px",
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
        "why-choose-us-pr-bg": "url('/images/why-choose-us-pr-bg.png')",
        "industry-card-bg": "url('/images/industry-card-bg.png')",
        "timeline-card-bg": "url('/images/timeline-card-bg.png')",
        "timeline-card-bg": "url('/images/timeline-card-bg.png')",
        "work-permit-card-bg": "url('/images/work-permit-card-bg.png')",
        "visa-application-card-bg":
          "url('/images/visa-application-card-bg.png')",
        "employer-align-card-inner-bg":
          "url('/images/employer-align-card-inner-bg.png')",
        "employer-align-card-bg": "url('/images/employer-align-card-bg.png')",
        "timeline-card-inner-bg": "url('/images/timeline-card-inner-bg.png')",
        "timeline-card-bg-left": "url('/images/timeline-card-bg-left.png')",
        "timeline-card-inner-bg-right":
          "url('/images/timeline-card-inner-bg-right.png')",
        "work-permit-card-bg-blue":
          "url('/images/work-permit-card-bg-blue.png')",
        "partnership-bg": "url('/images/partnership-bg.png')",
        "partnership-faq-bg": "url('/images/partnership-faq-bg.png')",
        "hire-worker-bg": "url('/images/hire-worker-bg.png')",
      },
      keyframes: {
        slideLeftRight: {
          "0%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(-20%)" },
        },
        pulse: {
          "25%": {
            transform: "scale(0.9)",
          },
          "75%": {
            transform: "scale(1.1)",
          },
        },
        floating: {
          "0%": {
            shadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(5px)",
          },
          "50%": {
            shadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translateY(-5px)",
          },
          "100%": {
            shadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(5px)",
          },
        },
      },
      animation: {
        slideLeftRight: "slideLeftRight 4s ease-in-out infinite",
        pulse: "pulse 1s ease-in-out infinite",
        floating: "floating 3s ease-in-out infinite",
      },
    },
  },
  plugins: [flowbite.plugin(), require("@tailwindcss/typography")],
};
