import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookingPage, HomePage } from "./pages";
import { Footer, Nav } from "./components";
import { ConfirmedBooking } from "./components/ConfirmedBooking";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/booking" element={<BookingPage />} ></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />} ></Route>
        <Route path="/*" element={<HomePage />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
