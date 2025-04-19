import React from "react";
import "./Hero.css";
import restaurantFood from "../../assets/fotoinicial.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        <button className="btn-primary">
          <Link className="btn-link" to="/booking">Reserve a Table</Link></button>
          
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="Little Lemon dishes" />
      </div>
    </section>
  );
};

export default Hero;