import React from "react";
import PlatfromComponents from "./PlatfromComponents";
import PlatformArchitecture from "./PlatformArchitecture";
import AvailableNetworks from "./AvailableNetworks";
import GetStarted from "./GetStarted";
import KeyFeatures from "./KeyFeatures";
import MempoolTerminal from "./MempoolTerminal";

const Documentation = () => {
  return (
    <div className="ml-1/6 p-8 xl:w-full xl:ml-0 lg:ml-10 md:w-full">
      <MempoolTerminal />
      <KeyFeatures />
      <PlatformArchitecture />
      <PlatfromComponents />
      <AvailableNetworks />
      <GetStarted />
    </div>
  );
};

export default Documentation;
