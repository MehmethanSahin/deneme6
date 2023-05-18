import React from "react";
import styles from "./Landing.module.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Tanıtım from "./Tanıtım";
import SecondPage from "./SecondPage";
import Footer from "./Footer";
import Service from "./Service";
import Technology from "./Technology";
import Safety from "./Safety";
import FaqPage from "./FaqPage";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <RouteRender />
        <Footer />
      </div>
    </Router>
  );
}

function RouteRender() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Safety" element={<Safety />} />
          <Route path="/tanitim" element={<Tanıtım />} />
          <Route path="/secondpage" element={<SecondPage />} />
          <Route path="/FaqPage" element={<FaqPage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;