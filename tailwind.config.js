module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      '2xl': {'max':'1536px'},      
      xl: {'max':'1280px'},
      lg: {'max':'1024px'},
      md: {'max':'768px'},
      sm: {'max': '640px'},
      'xsm': {'max':'400px'},
    },
    extend: {
    },
  },
  plugins: [],
}