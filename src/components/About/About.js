import React from "react";
import "./About.css";
import marioandadrian from "../../assets/marioandadrian.jpg";
import mario from "../../assets/mario.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h3>Little Lemon</h3>
        <p>
        Morbi mattis ex sit amet lorem laoreet tincidunt sit amet at nulla. Nulla lacinia aliquam consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="about-images">
        <img src={marioandadrian} alt="Our chefs" className="image1" />
        <img src={mario} alt="Our restaurant" className="image2" />
      </div>
    </section>
  );
};

export default About;