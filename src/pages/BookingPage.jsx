import { useReducer } from "react";
import { BookingForm } from "../components"
import { Navigate } from "react-router-dom";

export const BookingPage = () => {
  const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
  };
  const updateTimes = (state, action) => {
    if (action.type === "UPDATE") {
      const selectedDate = new Date(action.date);
      return fetchAPI(selectedDate);
    }
    return state;
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      Navigate("/confirmed");
    }
  };

  return (
    <>
      <BookingForm availableTimes={ availableTimes } dispatch={ dispatch } submitForm={submitForm} />
    </>
  )
}
