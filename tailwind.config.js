/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#A7A7A7',
        'custom-bg': '#191919',
        'text-gray': '#666666',
        'button-success': '#D7FFE0',
        'button-text': '#018C0F',
        'heading-text': '#42446E',
      },
      textColor: {
        'custom-gray': '#A7A7A7',
      },
      spacing: {
        '25': '6.25rem',
      },
      maxWidth: {
        '6.5xl': '72rem',
        '6.8xl': '76rem',
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      letterSpacing: {
        'wider': '1px',
        'tighter': '-0.4px',
      },
      lineHeight: {
        'tight': '28px',
        'button': '26px',
        'loose': '52px',
        'normal': '26px',
      },
      fontSize: {
        'md': '20px',
        'xs': '10.5px',
        'sm': '12px',
        'lg': '42px',
        'base': '18px',
        '2xl': '32px',
        'tech-title': '48px',
        'tech-subtitle': '32px',
      },
      fontWeight: {
        'semi-bold': 600,
        'bold': 700,
        'regular': 400,
      },
      keyframes: {
        'fade-in-bottom': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-bottom': 'fade-in-bottom 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
        'fade-in-top': 'fade-in-top 1s ease-out',
      },
    },
  },
  plugins: [],
}
