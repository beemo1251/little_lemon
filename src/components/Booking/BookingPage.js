// src/pages/BookingPage.jsx
import React, { useReducer, useEffect } from 'react';
import BookingForm from './Form/BookingForm';
import restaurantImage from '../../assets/restaurant.jpg';
import './BookingPage.css';
import { ReservationContext } from '../../context/ReservationContext';

const initialTimes = ['17:00', '18:00', '19:00'];

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(reducer, initialTimes);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    window.fetchAPI(today)
      .then((times) => dispatch({ type: 'UPDATE_TIMES', payload: times }))
      .catch((error) => {
        console.error('Error fetching available times:', error);
        dispatch({ type: 'UPDATE_TIMES', payload: initialTimes });
      });
  }, []);

  return (
    <ReservationContext.Provider value={{ availableTimes, dispatch }}>
      <section className="booking-page">
        <div className="booking-container">
          <div className="booking-header">
            <h1>Make a Reservation</h1>
            <p>
              Reserve your table at Little Lemon and enjoy an authentic 
              Mediterranean dining experience with fresh ingredients and 
              traditional recipes.
            </p>
          </div>

          <div className="booking-content">
            <div className="booking-form-container">
              <BookingForm />
            </div>
            
            <img 
              src={restaurantImage} 
              alt="Little Lemon Restaurant interior" 
              className="booking-image"
            />
          </div>

          <div className="booking-info">
            <h2>Reservation Information</h2>
            <ul>
              <li>We hold reservations for 15 minutes past the booked time</li>
              <li>Large groups (12+ people) please call us directly</li>
              <li>Special dietary requirements can be noted when booking</li>
              <li>We offer outdoor seating when weather allows</li>
            </ul>
          </div>
        </div>
      </section>
    </ReservationContext.Provider>
  );
};

export default BookingPage;
