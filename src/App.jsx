import React from "react";
import Header from "./components/Header";
import Terminal from "./components/Terminal";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { mempool } from "./constants";
import Information from "./components/Information";

const App = () => (
  <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header />
    {[...mempool.entries()].map(([index, item]) => (
      <React.Fragment key={index}>
        <Terminal>
          <Content {...item} />
        </Terminal>
        {index === 0 && <Information />}
      </React.Fragment>
    ))}
    <Footer />
  </div>
);

export default App;
