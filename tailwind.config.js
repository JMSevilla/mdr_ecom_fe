module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
      logo: 'Proxima Nova'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        'contactUsBackground': "url('/src/assets/images/contactus/contactUsBg.jpg')",
      },
      content: {
        aboutUsTitle: 'url("/src/assets/images/outline-text/about.svg")',
        serviceTitle: 'url("/src/assets/images/outline-text/service.svg")',
        testimonialsTitle: 'url("/src/assets/images/outline-text/testimonials.svg")',
        contactUsTitle: 'url("/src/assets/images/outline-text/contact.svg")',
      },
      colors: {
        primary: '#ffffff', // white
        secondary: '#fdf9ff', // light gray
        gray: '#eff0f5', //gray
        accent: {
          DEFAULT: '#bd321c', //red,
          hoverToRed: '#bd321c', // red,
          hoverToBlack: '#000000', // black
          hoverToWhite: '#ffffff', // white'
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
}
