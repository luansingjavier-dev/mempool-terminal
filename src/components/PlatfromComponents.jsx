import React from "react";

import {
  get_transaction_data,
  get_price_log,
  get_live_price,
  processing1,
  processing2,
  processing3,
  processing4,
  processing5,
  processing6,
  processing7,
  processing8,
  dataframe1,
  dataframe2,
  dataframe3,
  dataframe4,
  dataframe5,
  dataframe6,
  dataframe7,
} from "../constants/images";
const PlatfromComponents = () => (
  <section id="platform-components" className="mb-6 scroll-mt-32">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Platform Components
    </h2>
    <h3 className="h3 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      data function
    </h3>
    <img
      src={get_transaction_data}
      alt="First Image"
      className={`w-full sm:w-full md:w-2/4 md:top-20 right-0 mb-5`}
    />
    <p className="body text-n-3 ">get_transaction_data:</p>
    <span className="font-normal text-[16px] text-n-4 my-5">
      The get_transaction_data function fetches all transaction data for a
      specified Bitcoin address using pagination. It repeatedly makes requests
      to the Mempool API, appending each page of transactions to a list
      (raw_data), and continues until all available data has been retrieved. If
      there are any issues during the request process, the function handles them
      gracefully by returning None.
    </span>
    <img
      src={get_price_log}
      alt="Second Image"
      className={`w-full sm:w-full md:w-2/4 md:top-20 right-0 mb-5  mt-5`}
    />
    <p className="body text-n-3">get_price_log:</p>
    <span className="font-normal text-[16px] text-n-4 my-5">
      The get_price_log function retrieves historical Bitcoin prices for a list
      of provided block times from the Mempool API. It sends requests for each
      block time, parses the returned data for the price in the specified
      currency, and stores it in a price_log list. If a price is found, it adds
      the timestamp and price to the list. The function continues retrieving
      prices even if one request fails, and returns a list of price data after
      processing all the block times.
    </span>
    <img
      src={get_live_price}
      alt="Third Image"
      className={`w-full sm:w-full md:w-2/4 md:top-20 right-0 mb-5 mt-5`}
    />
    <p className="body text-n-3">get_live_price:</p>
    <span className="font-normal text-[16px] text-n-4 my-5">
      The get_live_price function fetches the current price of Bitcoin in USD by
      sending a GET request to the Mempool API. If the request is successful, it
      returns the price in USD. If there is an issue with the request (e.g.,
      network error), it handles the exception and returns None.
    </span>

    <h3 className="h3 flex items-center text-center mt-10 justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      processing function
    </h3>
    <img
      src={processing8}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/6 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5">
      A list processed_data is initialized to store the processed information
      for each transaction.
    </span>

    <img
      src={processing1}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <ul className="list-disc pl-6 mt-2 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        The function loops through each transaction in raw_data.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        It checks if the transaction contains the necessary keys "txid"
        (transaction ID) and "status".
      </li>
    </ul>

    <img
      src={processing2}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5">
      For valid transactions, it retrieves the txid, block_height, and
      block_time from the transaction's "status" object.
    </span>

    <img
      src={processing3}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5">
      This section extracts input data (vin) for the transaction:
    </span>

    <ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
      <li className="font-normal text-[16px] text-n-4 my-5">
        input_addresses: A list of all input addresses in the transaction.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        sent_amount: The amount of Bitcoin sent from the user_address.
      </li>
    </ul>
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      It checks whether the "scriptpubkey_address" in "prevout" matches the
      user's address. If it does, the value (amount) is added to sent_amount.
    </span>

    <img
      src={processing4}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5">
      This part processes output data (vout) for the transaction:
    </span>
    <ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
      <li className="font-normal text-[16px] text-n-4 my-5">
        output_addresses: A list of all output addresses in the transaction.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        received_amount: The amount of Bitcoin received by the user_address.
      </li>
    </ul>
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      Similar to inputs, it checks whether the "scriptpubkey_address" matches
      the user's address and retrieves the associated value if it does.
    </span>
    <img
      src={processing5}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Calls a function get_price_log (presumably defined elsewhere) with the
        block time to retrieve the price of Bitcoin in USD.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        If the price is available, it is formatted; otherwise, it defaults to
        "N/A".
      </li>
    </ul>
    <img
      src={processing6}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5">
      A dictionary is created for each transaction with:
    </span>
    <ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Transaction Hash: The transaction ID.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Block Index: The block height of the transaction.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        block_time: The timestamp of the block.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        received_amount and sent_amount: Formatted Bitcoin amounts (in BTC
        instead of satoshis).
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        BTC/USD: The price of Bitcoin at the transaction time.
      </li>
    </ul>
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      The dictionary is appended to the processed_data list.
    </span>
    <img
      src={processing7}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/6 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5">
      Once all transactions are processed, the function returns the list of
      dictionaries.
    </span>
    <h3 className="h3 flex items-center text-center mt-10 justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      dataframe function
    </h3>

    <img
      src={dataframe1}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <ul className="list-disc pl-6 mt-2 mb-4">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Iterates over all transactions in processed_data to compute the total
        Bitcoin received by the user_address.{" "}
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        A string (e.g., "0.12345678 BTC"): The string is split, and the numeric
        part is converted to float.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        A list of numeric values: The sum of the list is used directly.{" "}
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Aggregates the amounts across all transactions.
      </li>
    </ul>
    <img
      src={dataframe2}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      Similar logic as total_received, but calculates the total Bitcoin sent by
      the user_address.
    </span>
    <img
      src={dataframe3}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      The confirmed balance is the difference between the total Bitcoin received
      and sent.
    </span>
    <img
      src={dataframe4}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      Captures the current date and time in UTC format as the report generation
      time.
    </span>
    <img
      src={dataframe5}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/4 md:top-20 right-0 mb-5 mt-5`}
    />

    <ul className="list-disc pl-6 mt-2 mb-4">
      <li className="font-normal text-[16px] text-n-4 my-5">
        "Address Statement": Labels for each summary metric.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        user_address: The Bitcoin address for which the report is generated.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        timestamp: When the report was generated.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        total_received: Total Bitcoin received, formatted to 8 decimal places.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        total_sent: Total Bitcoin sent, formatted similarly.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        confirmed_balance: Confirmed balance.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        live_price: The current price of Bitcoin in USD, formatted with commas
        and two decimal places.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        len(processed_data): The count of processed transactions.
      </li>
    </ul>
    <img
      src={dataframe6}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/3 md:top-20 right-0 mb-5 mt-5`}
    />
    <ul className="list-disc pl-6 mt-2 mb-4">
      <li className="font-normal text-[16px] text-n-4 my-5">
        summary_df: A DataFrame containing the summary data.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        transactions_df: A DataFrame containing the detailed transaction data
        (processed_data).
      </li>
    </ul>
    <img
      src={dataframe7}
      alt="Third Image"
      className={`w-full sm:w-full md:w-1/2 md:top-20 right-0 mb-5 mt-5`}
    />
    <ul className="list-disc pl-6 mt-2 mb-4">
      <li className="font-normal text-[16px] text-n-4 my-5">
        Concatenates the summary and transaction DataFrames side by side
        (axis=1).
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        Replaces any NaN values with an empty string (fillna("")) for cleaner
        presentation.
      </li>
    </ul>
  </section>
);

export default PlatfromComponents;
