import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Main from "./components/Main";
import GoogleMap from "./components/GoogleMap";
import Popular from "./components/Popular";
import SplineApp from "./components/Spline";
import Calculator from "./components/Calculator";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Sponsors from "./components/Sponsors";

const App: React.FC = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="flex justify-between">
          <Main />
          <div className="mt-[1.5rem]">
            <SplineApp />
          </div>
        </div>
        <Card />
        <Popular />
        <Calculator />
        <Sponsors />
        <Reviews />
        {/* <Features /> */}
      </div>
      <GoogleMap />
      <Footer />
    </>
  );
};

export default App;
