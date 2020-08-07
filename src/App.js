import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Container from "./components/Container/Container";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/react_portfolio" component={Home} />
        <Route exact path="/react_portfolio/home" component={Home} />
        <Route exact path="/react_portfolio/bio" component={Bio} />
        <Route exact path="/react_portfolio/portfolio" component={Portfolio} />
        <Route exact path="/react_portfolio/contact" component={Contact} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
