import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";
import "./App.css";

function App() {
  if (!window.fetchAPI) {
    window.fetchAPI = async (date) => {
      console.log('Simulated fetchAPI for date:', date);
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    };
  }

  return (
    <div className="app">
      <Nav />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;