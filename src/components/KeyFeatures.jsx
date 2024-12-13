import React from "react";

const KeyFeatures = () => (
  <section id="key-features" className="mb-6 scroll-mt-32">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Key Features
    </h2>
    <ul className="list-disc pl-6 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        <span className="body mb-[2rem] text-n-3">
          Seamless download and code base under 150 lines:
        </span>{" "}
        The Mempool API Terminal is optimized for simplicity, with a compact
        codebase that ensures quick setup and minimal maintenance.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <span className="body mb-[2rem] text-n-3">
          Built-in functions to fetch the data from mempool.space:{" "}
        </span>{" "}
        With a set of pre-configured functions, the terminal directly retrieves
        transaction and holding information from the mempool.space API for
        effortless integration.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <span className="body mb-[2rem] text-n-3">
          Transformation of request response into a manageable data frame:{" "}
        </span>{" "}
        Data is automatically parsed and converted into a structured data frame,
        making it easy to analyze and export for reporting purposes.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <span className="body mb-[2rem] text-n-3">
          Intelligent automation and organized Bitcoin data:{" "}
        </span>{" "}
        The terminal automates data collection, cleaning, and categorization,
        providing well-organized and actionable insights on your Bitcoin
        transactions and current holdings.
      </li>
    </ul>
  </section>
);

export default KeyFeatures;
