import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Banner/Hero";
import Service from "../Service/Service";
import MySkills from "../MySkills/MySkills";
import MyProject from "../MyProject/MyProject";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="bg-[#EFEFED] ">
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
      <div id="contact">
       <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
