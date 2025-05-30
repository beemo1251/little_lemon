import React, { useState, useContext } from 'react';
import { ReservationContext } from '../../../context/ReservationContext';
import './BookingForm.css';

const BookingForm = () => {
  const { availableTimes } = useContext(ReservationContext);

  const getCurrentDate = () => new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(getCurrentDate());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';
    if (!guests || guests < 1 || guests > 12) newErrors.guests = 'Please enter a number between 1 and 12';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Reservation submitted:", {
        date,
        time,
        guests: Number(guests),
        occasion
      });

      // Reset form (opcional)
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const handleGuestsChange = (e) => {
    const value = e.target.value;
    setGuests(value);

    if (errors.guests && value && !isNaN(value) && Number(value) >= 1 && Number(value) <= 12) {
      setErrors(prev => ({ ...prev, guests: undefined }));
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit} noValidate aria-labelledby="reservation-heading">
      {isSubmitted && (
        <section aria-live="polite" className="success-message">
          Reservation confirmed! We'll be in touch shortly.
        </section>
      )}

      <h2 id="reservation-heading" className="visually-hidden">Reservation Form</h2>

      <fieldset>
        <legend className="visually-hidden">Reservation Details</legend>

        <div className="form-group">
          <label htmlFor="res-date">
            Choose date <span className="required-indicator">*</span>
          </label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={getCurrentDate()}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "date-error" : undefined}
          />
          {errors.date && <p id="date-error" className="error" role="alert">{errors.date}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="res-time">
            Choose time <span className="required-indicator">*</span>
          </label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-invalid={!!errors.time}
            aria-describedby={errors.time ? "time-error" : undefined}
          >
            <option value="">Select a time</option>
            {availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>{timeOption}</option>
            ))}
          </select>
          {errors.time && <p id="time-error" className="error" role="alert">{errors.time}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">
            Number of guests <span className="required-indicator">*</span>
          </label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={handleGuestsChange}
            min="1"
            max="12"
            required
            aria-invalid={!!errors.guests}
            aria-describedby={errors.guests ? "guests-error" : undefined}
          />
          {errors.guests && <p id="guests-error" className="error" role="alert">{errors.guests}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            aria-describedby="occasion-help"
          >
            <option value="">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Corporate">Corporate dinner</option>
          </select>
          <p id="occasion-help" className="help-text">Optional</p>
        </div>
      </fieldset>

      <button type="submit" className="submit-btn" aria-label="On Click, Make your reservation">
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
