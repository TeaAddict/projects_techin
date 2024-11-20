/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        // Theme 1 Colors
        "theme-1-bg-main": "hsl(222, 26%, 31%)",
        "theme-1-bg-toggle": "hsl(223, 31%, 20%)",
        "theme-1-bg-screen": "hsl(224, 36%, 15%)",
        "theme-1-key-dark-blue": "hsl(225, 21%, 49%)",
        "theme-1-key-dark-blue--active": "#a2b3e1",
        "theme-1-key-dark-blue-shadow": "hsl(224, 28%, 35%)",
        "theme-1-key-red": "hsl(6, 63%, 50%)",
        "theme-1-key-red--active": "#f96c5b",
        "theme-1-key-red-shadow": "hsl(6, 70%, 34%)",
        "theme-1-key-light-orange": "hsl(30, 25%, 89%)",
        "theme-1-key--active": "#ffffff",
        "theme-1-key-hover": "hsl(100, 100%, 100%)",
        "theme-1-key-light-orange-shadow": "hsl(28, 16%, 65%)",
        "theme-1-text-dark-blue": "hsl(221, 14%, 31%)",
        "theme-1-text-white": "hsl(0, 0%, 100%)",

        // Theme 2 Colors
        "theme-2-bg-main": "hsl(0, 0%, 90%)",
        "theme-2-bg-toggle": "hsl(0, 5%, 81%)",
        "theme-2-bg-screen": "hsl(0, 0%, 93%)",
        "theme-2-key-cyan": "hsl(185, 42%, 37%)",
        "theme-2-key-cyan--active": "#62b5bd",
        "theme-2-key-cyan-shadow": "hsl(185, 58%, 25%)",
        "theme-2-key-orange": "hsl(25, 98%, 40%)",
        "theme-2-key-orange--active": "#ff8b38",
        "theme-2-key-orange-shadow": "hsl(25, 99%, 27%)",
        "theme-2-key-light-yellow": "hsl(45, 7%, 89%)",
        "theme-2-key-light-yellow--active": "#ffffff",
        "theme-2-key-light-yellow-shadow": "hsl(35, 11%, 61%)",
        "theme-2-text-dark-yellow": "hsl(60, 10%, 19%)",

        // Theme 3 Colors
        "theme-3-bg-main": "hsl(268, 75%, 9%)",
        "theme-3-bg-toggle": "hsl(268, 71%, 12%)",
        "theme-3-bg-screen": "hsl(268, 71%, 12%)",
        "theme-3-key-violet": "hsl(281, 89%, 26%)",
        "theme-3-key-violet--active": "hsl(280, 56, 44)",
        "theme-3-key-magenta": "hsl(285, 91%, 52%)",
        "theme-3-key-cyan": "hsl(176, 100%, 44%)",
        "theme-3-key-cyan--active": "hsl(177, 100, 79)",
        "theme-3-key-cyan-shadow": "hsl(177, 92%, 70%)",
        "theme-3-key-dark-violet": "hsl(268, 47%, 21%)",
        "theme-3-key-dark-magenta": "hsl(290, 70%, 36%)",
        "theme-3-text-yellow": "hsl(52, 100%, 62%)",
        "theme-3-text-dark-blue": "hsl(198, 20%, 13%)",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      fontSize: {
        numbers: "32px",
      },
    },
  },
  plugins: [],
};
