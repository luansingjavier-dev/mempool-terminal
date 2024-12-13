import React from "react";

const AvailableNetworks = () => (
  <section id="available-networks" className="mb-6 scroll-mt-32">
    <h2 className="h2 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
      Available Networks
    </h2>

    <p className="body mb-[2rem] text-n-3">Bitcoin Mainnet</p>
    <p className="font-normal text-[16px] text-n-4 my-5">
      Bitcoin Mainnet refers to the primary blockchain network for Bitcoin
      transactions. It is the live, operational version of the Bitcoin network
      where real transactions occur and are confirmed. The term "Mainnet"
      distinguishes it from other test networks (like Bitcoin Testnet) used for
      development and testing purposes.
    </p>
    <p className="body mb-[2rem] text-n-3">Key points about Bitcoin Mainnet:</p>
    <ul className="list-disc pl-6 mt-2 space-y-2">
      <li className="font-normal text-[16px] text-n-4 my-5">
        <span className="body mb-[2rem] text-n-3">Real Transactions:</span>{" "}
        Mainnet is where users send and receive actual Bitcoin. Every Bitcoin
        transaction on Mainnet is permanent and recorded on the blockchain.
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <span className="body mb-[2rem] text-n-3">Mining and Consensus:</span>{" "}
        Bitcoin miners on Mainnet validate transactions and secure the network
        by solving complex cryptographic puzzles. The consensus mechanism is
        Proof of Work (PoW).
      </li>
      <li className="font-normal text-[16px] text-n-4 my-5">
        <span className="body mb-[2rem] text-n-3">Network Security:</span>{" "}
        Mainnet is the actual, production network with the highest level of
        security and decentralization. Transactions on this network require real
        Bitcoin (BTC) to send and receive.
      </li>
    </ul>

    <p className="font-normal text-[16px] text-n-4 my-5">
      Mainnet is the foundation of Bitcoin’s operation, supporting its
      decentralized nature, transaction integrity, and the overall security of
      the Bitcoin ecosystem.
    </p>
  </section>
);

export default AvailableNetworks;
