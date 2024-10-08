/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#01B2B7",
      dark: "#2C2D3F",
      white: "#FFFFFF",
      "gray-light": "#f3f4f6",
      error: "#E91E63",
      sky: "#03B8D7",
      ash: "#888888",
      lightAsh: "#dddddd",
      transparent: "#00000000",
      "dashboard-light": "#9FA6D1",
      "dashboard-dark": "#2E37A4",
      "dashboard-bg": "#f5f5f6",
    },
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    fontFamily: {
      inter: "'Inter', sans-serif",
    },
    extend: {
      backgroundImage: {
        login:
          "url('https://images.unsplash.com/photo-1533283986565-dcb510874ba8')",
        signup:
          "url('https://img.freepik.com/free-photo/beautiful-view-lake-surrounded-by-mountains-with-glowing-sun-background_181624-24090.jpg')",
        carousel1: "url('https://i.ibb.co/mR0CXTB/doctor-1.jpg')",
        carousel2: "url('https://i.ibb.co/YdZYv6H/doctor-2.jpg')",
        carousel3: "url('https://i.ibb.co/P6Nh4bR/doctor-3.jpg')",
        reliableHands: "url('https://i.ibb.co/Z18VL95/Reliable-Hands.jpg')",
        paralax1: "url('https://i.ibb.co/g4t3NLL/hospital-1.jpg')",
        paralax2: "url('https://i.ibb.co/LzYLWp5/doc-patient-1.jpg')",
        thumbnail: "url('https://i.ibb.co/jG9WgZq/doctor-patient-02.jpg')",
        about: "url('https://i.ibb.co/xC7WrYQ/about-img.jpg')",
        mission: "url('https://i.ibb.co/xzFQ4Sc/mission-img.jpg')",
      },
    },
  },
  plugins: [],
};
