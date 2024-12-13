import React from "react";

const MempoolTerminal = () => (
  <>
    <section id="terminal" className="mb-6 scroll-mt-80">
      <h4 className="h4 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
        Mempool API Terminal documentation
      </h4>

      <p className="body mb-[2rem] text-n-3">
        Wallet statement generator for in-depth reports on your address current
        holdings and previous transactions, including price at time of
        transaction.
      </p>
    </section>
    <section id="what-is-mempool-api-terminal" className="mb-6 scroll-mt-80">
      <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
        What is Mempool API Terminal?
      </h2>

      <p className="body mb-[2rem] text-n-3">
        The Mempool API Terminal is a dedicated python program that generates
        in-depth Excel workbooks on your address holdings. Make your accounting
        more simple with detailed insights about your Bitcoin purchases.
      </p>
    </section>
  </>
);

export default MempoolTerminal;
