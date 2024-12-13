import { logo, github, terminal, excel, fdTerminal } from "./images";

export const navigation = [
  {
    id: "0",
    title: "Repository",
    url: "https://github.com/madame-president/mempool-terminal",
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
    title: "Platform Architecture",
    link: "#platform-architecture",
  },
  {
    title: "Platform Components",
    link: "#platform-components",
  },
  {
    title: "Available Networks",
    link: "#available-networks",
  },
  {
    title: "Ready to Get Started?",
    link: "#get-started",
  },
];
