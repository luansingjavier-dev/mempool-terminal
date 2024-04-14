import Section from "./Section";
import { BackgroundCircles, Rings } from "./layout/Header";

const Terminal = ({ children }) => (
  <Section id="terminal">
    <div className="container py-10 ">
      <div className="relative max-w-[23rem] mx-auto md:max-w-4xl xl:mb-20">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          {children}
        </div>
      </div>
    </div>
    <BackgroundCircles />
    <Rings />
  </Section>
);

export default Terminal;
