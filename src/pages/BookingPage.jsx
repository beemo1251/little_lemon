import { useReducer } from "react";
import { BookingForm } from "../components"
import { useNavigate } from "react-router-dom";

export const BookingPage = () => {
  const navigate = useNavigate();
  const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI(today);
  };
  const updateTimes = (state, action) => {
    if (action.type === "UPDATE") {
      const selectedDate = new Date(action.date);
      return window.fetchAPI(selectedDate);
    }
    return state;
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const isSuccess = window.submitAPI(formData);
    if (isSuccess) {
      navigate("/confirmed");
    }
  };

  return (
    <div className="booking">
      <BookingForm availableTimes={ availableTimes } dispatch={ dispatch } submitForm={submitForm} />
    </div>
  )
}
