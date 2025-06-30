import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Banner/Hero";
import Service from "../Service/Service";
import MySkills from "../MySkills/MySkills";
import MyProject from "../MyProject/MyProject";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Research from "../Research/Research";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg-[#EFEFED] pb-1">
      <div>
        <Navbar></Navbar>
      </div>
      <div id="banner">
        <Hero></Hero>
      </div>
      <div id="services">
        <Service></Service>
      </div>
      <div id="myskill">
        <MySkills></MySkills>
      </div>
      <div id="myProject">
        <MyProject></MyProject>
      </div>

      <Education></Education>
      <Research></Research>
      <div id="contact">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
