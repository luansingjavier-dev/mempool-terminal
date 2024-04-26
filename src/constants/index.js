import { logo, github, terminal, excel, fdTerminal } from "./images";

export const navigation = [
  {
    id: "0",
    title: "Meet the Team",
    url: "https://github.com/madame-president/mempool-terminal",
    logo: github,
  },
];

export const mempool = [
  {
    id: "0",
    title: "Verified Bitcoin wallet statements blazingly fast",
    text: `Comprehensive wallet "financial" statements for Bitcoin companies seeking loans, capital investment, or IPO readiness.`,
    download: true,
    imageUrl1: terminal,
    imageUrl2: excel,
    logo: logo,
  },
  {
    id: "1",
    title:
      "Developing an open-source approach to providing historical Bitcoin wallet data",
    text: "",
    download: false,
    imageUrl1: fdTerminal,
  },
];

export const info = [
  {
    id: "1",
    content:
      "Empower yourself with absolute control over your data, its storage, access, and sharing.",
    title: "Own your data. Truly.",
  },
  {
    id: "2",
    content:
      "Safeguard your privacy and protect your data by eliminating reliance on cloud services.",
    title: "Privacy. Uncompromised.",
  },
  {
    id: "3",
    content:
      "Personalize your self-hosted environment with apps that match your needs - file servers, ad blockers, Bitcoin node, and more.",
    title: "Tailored to you. By you.",
  },
  {
    id: "4",
    content:
      "Liberate yourself from the cloud, and save on recurring cloud-based subscription costs.",
    title: "Break free & save.",
  },
  {
    id: "5",
    content:
      "Get lightning-fast data access & seamless services, optimized for your individual self-hosted experience.",
    title: "Accelerated performance.",
  },
  {
    id: "6",
    content:
      "Your home server safeguards your data, even when cloud-based companies face storms and shut down.",
    title: "Rainy day resilience.",
  },
];
