import React from "react";
import { Navbar } from "./components";
import { Home, About, Developers, Subscribe, Footer } from "./containers";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
