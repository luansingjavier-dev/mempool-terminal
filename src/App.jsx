import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Documentation from "./components/Documentation";

const App = () => (
  <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header />
    <div className="flex flex-row">
      <Sidebar />
      <Documentation />
    </div>
    <Footer />
  </div>
);

export default App;
