/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        VeryDarkBLue: '#383B4B',
        DarkBlue: '#0B0D17',
        LightBlue: '#D0D6F9',
        Gray: '#D0D6F9',
        fontColor: '#D0D6F9'
      },
      backgroundImage: {
        homeDesktopImage: "url('public/assets/home/background-home-desktop.jpg')",
        homeMobileImage: "url('public/assets/home/background-home-mobile.jpg')",
        homeTabletImage: "url('public/assets/home/background-home-tablet.jpg')",
        destinationDesktopImage: "url('public/assets/destination/background-destination-desktop.jpg')",
        crewDesktopImage: "url('public/assets/crew/background-crew-desktop.jpg')",
        crewTabletImage: "url('public/assets/crew/background-crew-tablet.jpg')",
        crewMobileImage: "url('public/assets/crew/background-crew-mobile.jpg')",
        techDesktopImage: "url('public/assets/technology/background-technology-desktop.jpg')",
        techTabletImage: "url('public/assets/technology/background-technology-tablet.jpg')",
        techMobileImage: "url('public/assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [],
}