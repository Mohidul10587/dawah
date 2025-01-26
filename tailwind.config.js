module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        bengali: "bengali", // বাংলা লিস্ট নম্বর সাপোর্টের জন্য কাস্টম স্টাইল টাইপ
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".list-bangla": {
          listStyleType: "bengali", // বাংলা লিস্ট নম্বর
        },
      });
    },
  ],
};
