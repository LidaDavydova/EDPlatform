/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'nova-flat': '"Nova Flat"',
      'noto-sans-jp': '"Noto Sans JP"',
      'source-serif-pro': '"Source Serif Pro"',
    },
    backgroundImage: {
      'main-pattern': "url('https://images.unsplash.com/photo-1635187452645-420a43369504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
    },
    extend: {
    },
  },
  plugins: [],
}
