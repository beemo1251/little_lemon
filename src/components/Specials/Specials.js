import React from "react";
import "./Specials.css";
import bruschetta from "../../assets/bruchetta.jpg";
import lemonDessert from "../../assets/lemon dessert.jpg";
import greekSalad from "../../assets/ensaladagriega.jpg";
import { MdDeliveryDining } from "react-icons/md";

const Specials = () => {
  const specials = [
    {
      id: 1,
      title: "Bruschetta",
      price: "$8.99",
      description: "Aliquam erat volutpat. Donec quis posuere orci. Etiam finibus ut augue sit amet bibendum. Praesent scelerisque pellentesque mauris, sit amet pharetra metus convallis in.",
      image: bruschetta
    },
    {
      id: 2,
      title: "Lemon Dessert",
      price: "$6.99",
      description: "Aliquam erat volutpat. Donec quis posuere orci. Etiam finibus ut augue sit amet bibendum. Praesent scelerisque pellentesque mauris, sit amet pharetra metus convallis in.",
      image: lemonDessert
    },
    {
      id: 3,
      title: "Greek Salad",
      price: "$12.99",
      description: "Aliquam erat volutpat. Donec quis posuere orci. Etiam finibus ut augue sit amet bibendum. Praesent scelerisque pellentesque mauris, sit amet pharetra metus convallis in.",
      image: greekSalad
    }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="btn-secondary">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((item) => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="btn-order">Order for Delivery <MdDeliveryDining className="delivery-icon"/></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;