import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { motion } from "framer-motion";
import GlobalStyle from "./GlobalStyles";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Switch>
            <Route exact path="/">
              <Hero />
              <Work />
              <Contact />
            </Route>
          </Switch>
        </motion.div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
