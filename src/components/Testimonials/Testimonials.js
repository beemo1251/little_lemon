import React from "react";
import "./Testimonials.css";
import thomas from "../../assets/roman.jpg";
import pablo from "../../assets/pablo.jpg";
import selena from "../../assets/selena.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Thomas Cespedes",
      rating: 5,
      review: "Mauris faucibus erat vel blandit blandit. Aenean vitae posuere diam. Morbi convallis erat et iaculis lobortis. Suspendisse id massa velit. Ut elementum tristique ipsum",
      photo: thomas
    },
    {
      id: 2,
      name: "Pablo Benitez",
      rating: 4,
      review: "Mauris faucibus erat vel blandit blandit. Aenean vitae posuere diam. Morbi convallis erat et iaculis lobortis. Suspendisse id massa velit. Ut elementum tristique ipsum",
      photo: pablo
    },
    {
      id: 3,
      name: "Selena Acevedo",
      rating: 5,
      review: "Mauris faucibus erat vel blandit blandit. Aenean vitae posuere diam. Morbi convallis erat et iaculis lobortis. Suspendisse id massa velit. Ut elementum tristique ipsum",
      photo: selena
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">{"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</div>
            <div className="reviewer">
              <img src={testimonial.photo} alt={testimonial.name} />
              <span>{testimonial.name}</span>
            </div>
            <p>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;