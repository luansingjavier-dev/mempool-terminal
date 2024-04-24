import { info } from "../constants";
import InfoCard from "./InfoCard";
import Section from "./Section";

const Information = () => (
  <Section id="info">
    <div className="flex justify-center items-center flex-col px-4 xl:px-8 max-w-[23rem] mx-auto md:max-w-[83.7rem] pt-10 bg-n-7 overflow-hidden relative z-[1]">
      <p className="text-center body mb-[1rem] text-n-3 hover: transition duration-300 transform hover:translate-y-[-4px]">
        Discover the freedom of self-hosting.
      </p>
      <h4 className="h4 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
        Goodbye, cloud. Hello, server in your home.
      </h4>
    </div>
    <div className="flex flex-wrap justify-center max-w-[23rem] mx-auto md:max-w-[83.7rem] pt-2 pb-10 bg-n-7 overflow-hidden relative z-[1]">
      {info.map((card) => (
        <InfoCard key={card.id} {...card} />
      ))}
    </div>
  </Section>
);

export default Information;
