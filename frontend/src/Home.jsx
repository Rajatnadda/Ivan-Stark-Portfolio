import React from "react";
import Hero from "./components/Hero";
import CreativeJourney from "./components/CreativeJourney";
import Experience from "./components/Experience";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CreativeJourney />
      <Experience />
      <Clients />
      <Services />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
