import React from "react";
import {
  getConvertToDataCode,
  getLivePriceCode,
  getPriceDataCode,
  getPriceLogCode,
  getProcessedDataCode,
  getProcessingDataCode,
  getSaveToXlsxCode,
  getSummaryDataCode,
  getTransactionCode,
  getTransactionDataCode,
} from "../constants/images";
const PlatfromComponents = () => (
  <section id="main-application-components" className="mb-6 scroll-mt-32">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Main Application Components
    </h2>
    <h3 className="h3 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Functions for fetching the raw data from Mempool API:
    </h3>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getTransactionDataCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <p className="body text-n-3 ">get_transaction_data:</p>
    <span className="font-normal text-[16px] text-n-4 my-5">
      fetches all transaction data for a specified Bitcoin address using
      pagination. It repeatedly makes requests, appending each page of
      transactions to a list (raw_data), and continues until all available data
      has been retrieved. If there are any issues during the request process,
      the function returns None.
    </span>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getPriceLogCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <p className="body text-n-3">get_price_log:</p>
    <span className="font-normal text-[16px] text-n-4 my-5">
      retrieves historical Bitcoin prices for a list of provided block times. It
      sends requests for each block time, parses the returned data for the price
      in the specified currency, and stores it in a price_log list. If a price
      is found, it adds the timestamp and price to the list. The function
      continues retrieving prices even if one request fails, and returns a list
      of price data after processing all the block times.
    </span>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getLivePriceCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <p className="body text-n-3">get_live_price:</p>
    <span className="font-normal text-[16px] text-n-4 my-5">
      fetches the current price of Bitcoin. If the request is successful, it
      returns the price in USD. If there is an issue with the request (e.g.,
      network error), it returns None.
    </span>
    <h3 className="h3 flex items-center text-center mt-10 justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Function for processing the raw data:
    </h3>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getProcessingDataCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <span className="font-normal text-[16px] text-n-4 my-5">
      It iterates through raw_data, checking if each transaction contains keys
      for "txid" and "status", and further ensures "block_height" and
      "block_time" are present in the "status" dictionary. Within this context,
      it prepares to extract transaction details such as txid, block_height, and
      block_time, and initializes empty lists for input and output addresses, as
      well as sent and received amounts.
    </span>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getTransactionCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <span className="font-normal text-[16px] text-n-4 my-5">
      For each input, it checks for a scriptpubkey_address in prevout and
      appends it to input_addresses, while also recording the value sent by
      user_address. Similarly, for each output, it checks for a
      scriptpubkey_address and appends it to output_addresses, recording the
      value received by user_address. This effectively tracks addresses and
      amounts associated with the user's transactions.
    </span>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getPriceDataCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <span className="font-normal text-[16px] text-n-4 my-5">
      Extracts the BTC/USD price from the first element of the price_data list,
      defaulting to "N/A" if the list is empty. The result is stored in the
      variable btc_usd_price
    </span>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getProcessedDataCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <span className="font-normal text-[16px] text-n-4 my-5">
      Appends a dictionary to processed_data for each transaction, summarizing
      key details: Transaction Hash, Block Index, block_time, received and sent
      amounts (denominated in Bitcoin instead of sats), and the BTC/USD price
      (formatted as a currency). If no values are available for received_amount
      or sent_amount, they remain empty strings. Finally, the function returns
      the processed_data list containing all processed transaction details.
    </span>
    <h3 className="h3 flex items-center text-center mt-10 justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Function for creating the data frame out of the processed data:
    </h3>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getConvertToDataCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      Calculates final balances and prepares data for conversion into a
      DataFrame. It computes total_received and total_sent by summing
      transaction amounts from processed_data, accommodating both string and
      list formats. The confirmed_balance is derived by subtracting total_sent
      from total_received, while the timestamp records the current UTC time in a
      formatted string.
    </span>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getSummaryDataCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      Creates two DataFrames: summary_df for a high-level summary of the user's
      transactions and transactions_df for detailed transaction data. The
      summary_data dictionary stores labels and corresponding values like the
      user's address, timestamp, total amounts, confirmed balance, live BTC/USD
      price, and transaction count. The function concatenates summary_df and
      transactions_df side-by-side, filling any missing values with empty
      strings, and returns the combined DataFrame.
    </span>
    <h3 className="h3 flex items-center text-center mt-10 justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Function to save data frames as Excel workbook:
    </h3>
    <div className="w-full xl:w-2/4 lg:w-full sm:w-full md:w-full mb-5 mt-5">
      <img
        src={getSaveToXlsxCode}
        alt=""
        className="w-full h-auto border-2 border-blue-400 rounded-lg"
      />
    </div>
    <span className="font-normal text-[16px] text-n-4 my-5 ">
      Saves DataFrame to an .xlsx file. The filename is constructed using the
      filename_prefix (defaulting to "address_statement") and the user_address,
      creating a file named like address_statement_user_address. The index=False
      parameter excludes DataFrame indices from the saved file.
    </span>
  </section>
);

export default PlatfromComponents;
