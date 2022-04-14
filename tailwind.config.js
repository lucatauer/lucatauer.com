module.exports = {
  content: ['./src/App.js',
            './src/pages/Home.js',
            './src/pages/Projects.js',
            './src/pages/Blog.js',
            './src/pages/HelloThere.js',
            './src/pages/DidSoftwareEatTheWorld.js',
            './src/Contact.js',
],
  theme: {
    extend: {
      screens: {
        'smartphone': '10px',
        'tablet': '1000px',
        '2xl': '1600px',
        '3xl': '2000px',
      }
    },
  },
  plugins: [],
}
