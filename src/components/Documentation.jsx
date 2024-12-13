import React from "react";
import PlatfromComponents from "./PlatfromComponents";
import PlatformArchitecture from "./PlatformArchitecture";
import AvailableNetworks from "./AvailableNetworks";
import GetStarted from "./GetStarted";
import KeyFeatures from "./KeyFeatures";
import MempoolTerminal from "./MempoolTerminal";

const Documentation = () => {
  return (
    <div className="ml-1/4 p-8 xl:w-full md:w-full lg:w-1/2 ">
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
