import { logo, github, terminal, excel, fdTerminal } from "./images";

export const navigation = [
  {
    id: "0",
    title: "Repository",
    url: "https://github.com/madame-president/mempool-api-terminal",
    logo: github,
  },
];

export const mempool = [
  {
    id: "0",
    title: "Bitcoin wallet statements following CPAB standards",
    text: `Confirmed the existence and completeness of Bitcoin transaction data for audit purposes.`,
    download: true,
    imageUrl1: terminal,
    imageUrl2: excel,
    logo: logo,
  },
  {
    id: "1",
    title: "Designed to follow the audit requirements expressed by CPAB",
    text: "",
    download: false,
    imageUrl1: fdTerminal,
  },
];

export const info = [
  {
    id: "1",
    content: "You speak finance, they speak technical. We understand both.",
    title:
      "Inadequate understanding of audit risks when they design their audit approaches.",
  },
  {
    id: "2",
    content:
      "Get your data from the bitcoin network directly. Compare them side by side.",
    title:
      "Relied on information obtained by exchanges or custodians without evaluating reliability.",
  },
  {
    id: "3",
    content:
      "Create a transaction, and sign it. Using the txid we will retrieve your message.",
    title:
      "Insufficient evidence to support the entities' ownership to those assets.",
  },
  {
    id: "4",
    content:
      "Pool mining or solo mining. Either way, we provide a detailed report containing block rewards by quantity and date received.",
    title: "Lack of understanding of entities involved in mining activities.",
  },
  {
    id: "5",
    content:
      "The bitcoin network is the most powerful computer network on earth. We understand the bitcoin ledger (at its current network security) cannot be hacked or tampered with.",
    title:
      "Lack of evaluating reliability of information obtained from blockchains.",
  },
];

export const navItems = [
  {
    title: "What is Mempool API Terminal?",
    link: "#what-is-mempool-api-terminal",
  },
  {
    title: "Key Features",
    link: "#key-features",
  },
  {
    title: "Application  Architecture",
    link: "#application-architecture",
  },
  {
    title: "Main Application Components",
    link: "#main-application-components",
  },
  {
    title: "Available Networks",
    link: "#available-networks",
  },
  {
    title: "Installing the Application",
    link: "#installing-the-application",
  },
];

export const getTransactionDataCode = `def get_transaction_data(address):
    endpoint = f"https://mempool.space/api/address/{address}/txs"
    raw_data, seen_txids = [], set()
    after_txid = None
    try:
        while True:
            response = requests.get(f"{endpoint}?after_txid={after_txid}" if after_txid else endpoint)
            if response.status_code != 200:
                return None
            paginated_data = response.json()
            if not paginated_data:
                break
            for tx in paginated_data:
                if tx["txid"] not in seen_txids:
                    seen_txids.add(tx["txid"])
                    raw_data.append(tx)
            after_txid = paginated_data[-1]["txid"] if paginated_data else None
        return raw_data
    except requests.RequestException:
        return None
`;

export const getPriceLogCode = `def get_price_log(block_times, currency="USD"):
    price_log = []
    endpoint = "https://mempool.space/api/v1/historical-price"
    for block_time in block_times:
        try:
            response = requests.get(endpoint, params={"currency": currency, "timestamp": block_time})
            price = response.json().get("prices", [{}])[0].get(currency)
            if price is not None:
                price_log.append({"timestamp": block_time, f"BTC/{currency}": price})
        except requests.RequestException:
            continue
    return price_log
`;

export const getLivePriceCode = `def get_live_price():
    try:
        return requests.get("https://mempool.space/api/v1/prices").json().get("USD")
    except requests.RequestException:
        return None
`;

export const getProcessingDataCode = `def processing(raw_data, user_address):

    processed_data = []
    for transaction in raw_data:
        if "txid" in transaction and "status" in transaction:
            if "block_height" in transaction["status"] and "block_time" in transaction["status"]:
                txid = transaction["txid"]
                block_height = transaction["status"]["block_height"]
                block_time = transaction["status"]["block_time"]
                input_addresses, output_addresses, sent_amount, received_amount = [], [], [], []
`;

export const getTransactionCode = `for vin in transaction.get("vin", []):
                    if "prevout" in vin and "scriptpubkey_address" in vin["prevout"]:
                        address = vin["prevout"]["scriptpubkey_address"]
                        input_addresses.append(address)

                        if address == user_address and "value" in vin["prevout"]:
                            sent_amount.append(vin["prevout"]["value"])

                for vout in transaction.get("vout", []):
                    if "scriptpubkey_address" in vout:
                        address = vout["scriptpubkey_address"]
                        output_addresses.append(address)
                        
                        if address == user_address and "value" in vout:
                            received_amount.append(vout["value"])
`;

export const getPriceDataCode = `price_data = get_price_log([block_time])
btc_usd_price = price_data[0].get("BTC/USD", "N/A") if price_data else "N/A"
`;

export const getProcessedDataCode = `processed_data.append({
  "Transaction Hash": txid,
  "Block Index": block_height,
  "block_time": block_time,
  "received_amount": "{:.8f}".format(received_amount[0] / 1e8) if received_amount else "",
  "sent_amount": "{:.8f}".format(sent_amount[0] / 1e8) if sent_amount else "",
  "BTC/USD": "{:,.2f}".format(btc_usd_price)
})

return processed_data
`;

export const getConvertToDataCode = `def convert_to_dataframe(processed_data, live_price, user_address):
    
    total_received = sum(
    sum(float(value.split(" ")[0]) for value in tx["received_amount"].split(", ") if value) 
    if isinstance(tx["received_amount"], str) else sum(tx["received_amount"]) 
    for tx in processed_data
    )

    total_sent = sum(
    sum(float(value.split(" ")[0]) for value in tx["sent_amount"].split(", ") if value) 
    if isinstance(tx["sent_amount"], str) else sum(tx["sent_amount"]) 
    for tx in processed_data
    )

    confirmed_balance = total_received - total_sent

    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
`;

export const getSummaryDataCode = `summary_data = {
        "Address Statement": [
            "Report for",
            "Generated at",
            "Total received",
            "Total sent",
            "Confirmed balance",
            "Live BTC/USD",
            "Confirmed transaction count"
        ],
        "": [
            user_address,
            timestamp,
            f"{total_received:.8f} BTC",
            f"{total_sent:.8f} BTC",
            f"{confirmed_balance:.8f} BTC",
            f"S{live_price:,.2f}",
            f"{len(processed_data)}"
        ]
    }
    summary_df = pd.DataFrame(summary_data)
    transactions_df = pd.DataFrame(processed_data)

    return pd.concat([summary_df, transactions_df], axis=1).fillna("")
`;

export const getSaveToXlsxCode = `def save_to_xlsx(df, user_address, filename_prefix="address_statement"):
    df.to_excel(f"{filename_prefix}_{user_address}.xlsx", index=False)

save_to_xlsx(df, user_address)
`;
