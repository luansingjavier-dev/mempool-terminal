import React from "react";

const PlatformArchitecture = () => (
  <section id="application-architecture" className="mb-6 scroll-mt-32">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Application Architecture
    </h2>

    <p className="body mb-[2rem] text-n-3">
      Mempool API Terminal consists of 4 modules:
    </p>
    <ol className="list-decimal pl-6 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        <strong className="body mb-[2rem] text-n-3">Data:</strong> The backbone
        of communication between the API server and terminal, providing:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Source Code:</span>{" "}
            functions to fetch transaction data, price at time of transaction
            and the current price of Bitcoin denominated in USD.
          </li>
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Infrastructure:</span>{" "}
            built-in API calls to Mempool, ensuring seamless data retrieval for
            both transaction details and prices.
          </li>
        </ul>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <strong className="body mb-[2rem] text-n-3">Processing:</strong> The
        engine that powers data analysis, featuring:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">
              Data Transformation:
            </span>{" "}
            converts raw response data into structured insights, including
            parsing transactions to extract key information.
          </li>
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Price Correlation:</span>{" "}
            integrates price data per transaction and real-time Bitcoin market
            value.
          </li>
        </ul>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <strong className="body mb-[2rem] text-n-3">Dataframe:</strong> The
        visualizer of results, offering:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Data Presentation:</span>{" "}
            transforms processed data into a structured DataFrame, summarizing
            key metrics.
          </li>
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Excel Workbook:</span>{" "}
            formats and saves the DataFrame into a user-friendly .xlsx file for
            easy reporting and analysis.
          </li>
        </ul>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <strong className="body mb-[2rem] text-n-3">Run:</strong> The
        orchestrator responsible for executing the application, handling:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">User Interaction:</span>{" "}
            captures a Bitcoin address from the user and coordinates data
            fetching, processing and reporting.
          </li>
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Output Automation:</span>{" "}
            provides the user with an automatically generated statement.
          </li>
        </ul>
      </li>
    </ol>
  </section>
);

export default PlatformArchitecture;
