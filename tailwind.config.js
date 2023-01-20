module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      // => @media (min-width: 640px) { ... }

      md: '900px',
      // => @media (min-width: 768px) { ... }

      lg: '1200px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
