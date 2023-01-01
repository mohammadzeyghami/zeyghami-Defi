import React from "react";
import { Navbar } from "./components";
import { Home, About, Developers, Subscribe } from "./containers";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Developers />
      <Subscribe />
    </>
  );
}

export default App;
