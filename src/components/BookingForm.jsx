import { useState } from "react";
import { useForm } from "../hook/useForm";

export const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const { formState, onInputChange } = useForm({
    date: new Date().toISOString().split("T")[0],
    time: "",
    guests: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!formState.date || formState.date < today) {
      newErrors.date = "Please select a valid date.";
    }

    if (!formState.time) {
      newErrors.time = "Please select a time.";
    }

    const guests = parseInt(formState.guests);
    if (!guests || guests < 1 || guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
    }

    if (!formState.occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm(e);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formState.date}
        onChange={(e) => {
          onInputChange(e);
          dispatch({ type: "UPDATE", date: e.target.value });
        }}
      />
      {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formState.time} onChange={onInputChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formState.guests}
        onChange={onInputChange}
      />
      {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formState.occasion} onChange={onInputChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && <span style={{ color: "red" }}>{errors.occasion}</span>}

      <input type="submit" value="Make your reservation" />
    </form>
  );
};
