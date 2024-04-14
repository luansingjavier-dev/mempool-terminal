import React from "react";
import Header from "./components/Header";
import Terminal from "./components/Terminal";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { mempool } from "./constants";

const App = () => (
  <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header />
    {mempool.map((pool) => (
      <Terminal>
        <Content {...pool} />
      </Terminal>
    ))}
    <Footer />
  </div>
);

export default App;
