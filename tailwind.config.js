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
        homeDesktopImage: "url('src/assets/home/background-home-desktop.jpg')",
        homeMobileImage: "url('src/assets/home/background-home-mobile.jpg')",
        homeTabletImage: "url('src/assets/home/background-home-tablet.jpg')",
        destinationDesktopImage: "url('src/assets/destination/background-destination-desktop.jpg')",
        crewDesktopImage: "url('src/assets/crew/background-crew-desktop.jpg')",
        crewTabletImage: "url('src/assets/crew/background-crew-tablet.jpg')",
        crewMobileImage: "url('src/assets/crew/background-crew-mobile.jpg')",
        techDesktopImage: "url('src/assets/technology/background-technology-desktop.jpg')",
        techTabletImage: "url('src/assets/technology/background-technology-tablet.jpg')",
        techMobileImage: "url('src/assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [],
}