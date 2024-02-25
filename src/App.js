import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col pb-4 bg-white">
      <div>
        <Navbar />
      </div>

      <div>
        <Body />
      </div>


      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
