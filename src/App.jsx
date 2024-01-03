import React from 'react'
import Experties from './components/Experties/Experties'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main.jsx'
import People from './components/People/People'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/Work/Work'
import css from './styles/App.module.scss'
import Calculator from "./components/Calculator/Calculator.jsx";
import GoogleMap from "./components/GoogleMap/GoogleMap.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Available from "./components/Available/Available.jsx";
import Spline from "./components/Spline/Spline.jsx";

const App = () => {

    return (
        <div className={`bg-primary ${css.container}`}>
            <Header/>
            <Main/>
            <Experties/>
            <Portfolio/>
            <Calculator/>
            <Available/>
            <Work/>
            <People/>
            <Spline/>
            <Reviews/>
            <GoogleMap/>
            <Footer/>
        </div>
    );
}

export default App