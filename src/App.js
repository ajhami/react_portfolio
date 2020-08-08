import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      {/* <Container> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      {/* </Container> */}
      <Footer />
    </Router>
  );
}

export default App;
