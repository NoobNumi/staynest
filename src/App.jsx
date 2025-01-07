import React from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Rooms from "./assets/Pages/Rooms";
import Testimonials from "./assets/Pages/Testimonials";
import FAQs from "./assets/Pages/FAQs";
import Blogs from "./assets/Pages/Blogs";
import Contact from "./assets/Pages/Contact";
import Footer from "./assets/Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <Home />

      {/* About section */}

      <About />

      {/* Rooms section */}

      <Rooms />

      {/* Testimonials section */}
      <Testimonials />

      {/* FAQs section */}
      <FAQs />

      {/* Blogs section */}
      <Blogs />

      {/* Contact section */}
      <Contact />

      {/* Footer section */}
      <Footer />
    </>
  );
}

export default App;
