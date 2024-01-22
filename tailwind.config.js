/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //? Menu Nav Light Theme
        'nav-bg': '#F0F0F0',
        'nav-text': '#0F0F0F',
        'topnav-shadow': '#D8D8D8',
        'sidebar-border': '#D8D8D8',
        'sidebar-menu-option-focus': '#DEDFE0',
        'sidebar-menu-option-hover': '#CED0D2',
        //? Menu Nav Dark Theme
        'nav-bg-dark': '#1a1a1a',
        'nav-text-dark': '#FFFFFF',
        'topnav-shadow-dark': '#513905',
        'sidebar-border-dark': '#1E1604',
        'sidebar-menu-option-focus-dark': '#535353',
        'sidebar-menu-option-hover-dark': '#3D3D3D',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        sidebarFadeOut: 'fadeOut 0.4s ease-out'
      }
    },
  },
  plugins: [],
}

