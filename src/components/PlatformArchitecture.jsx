import React from "react";

const PlatformArchitecture = () => (
  <section id="platform-architecture" className="mb-6 scroll-mt-32">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Platform Architecture
    </h2>

    <p className="body mb-[2rem] text-n-3">
      The Mempool API Terminal program consists of 4 modules:
    </p>
    <ol className="list-decimal pl-6 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        <strong className="body mb-[2rem] text-n-3">Data:</strong> The backbone
        of the platform, providing:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Source Code:</span>{" "}
            Functions for fetching transaction data, including retrieving
            transaction history for a given address and fetching live or
            historical Bitcoin prices.
          </li>
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Infrastructure:</span>{" "}
            Built-in API calls to the Mempool API, ensuring seamless data
            retrieval for both transaction details and market prices.
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
            Converts raw transaction data into structured, actionable insights,
            including parsing transactions to extract key information like
            addresses, amounts, and timestamps.
          </li>
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Price Correlation:</span>{" "}
            Integrates price data to align transaction information with
            real-time or historical Bitcoin market values.
          </li>
        </ul>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <strong className="body mb-[2rem] text-n-3">Dataframe:</strong> The
        visualizer of results, offering:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Data Presentation:</span>{" "}
            Transforms processed data into a structured DataFrame, summarizing
            key metrics like total received/sent amounts and confirmed balances.
          </li>
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Output Generation:</span>{" "}
            Combines transaction data with a summary and formats it into a
            user-friendly Excel workbook for easy reporting and analysis.
          </li>
        </ul>
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <strong className="body mb-[2rem] text-n-3">Run:</strong> The
        orchestrator of execution, handling:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">User Interaction:</span>{" "}
            Captures input from the user (Bitcoin address) and coordinates data
            fetching, processing, and reporting.
          </li>
          <li className="font-normal text-[16px] text-n-4 my-5">
            <span className="body mb-[2rem] text-n-3">Output Automation:</span>{" "}
            Saves the final processed data to an Excel file, providing the user
            with an automatically generated statement.
          </li>
        </ul>
      </li>
    </ol>
  </section>
);

export default PlatformArchitecture;
