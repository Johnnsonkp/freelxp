/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "desk-2xl": { max: "1535px" },
        "desk-xl": { max: "1279px" },
        "desk-lg": { max: "1023px" },
        "desk-md": { max: "767px" },
        "desk-sm": { max: "639px" },
        "desk-xs": { max: "479px" },
      },
      colors: {
        dark: "#121212",
        dark2: "#1b1b1b",
        light: "#f5f5f5",
        light2: "#fff",
        // primary: "#58E6D9",
        primary: "#ec5899",
        primaryDark: "#ec5899",
        lightGray: "lightGray",
        darkBorder: "rgba(255, 255, 255, 0.1)",
        white: "#fff",
        neon: {
          pink: "hsl(var(--neon-pink))",
          purple: "hsl(var(--neon-purple))",
          blue: "hsl(var(--neon-blue))",
        }
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        'neon-gradient': "linear-gradient(to right, #4f46a5, #ec5899)",
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px)",
        circularLightWhite:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px, #fff 100px)",
        circularLightDark:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#1C1C1C 5px, #1C1C1C 100px)",
        circularLighter:
          "repeating-radial-gradient(rgba(244, 195, 194, 0.0)1px,#f5f5f5 2px, #f5f5f5 110px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px, #1b1b1b 100px)",
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
