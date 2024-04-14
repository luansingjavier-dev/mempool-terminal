import React from "react";
import Section from "./Section";

const Footer = () => (
  <Section id="meet" className="!px-0 !py-10">
    <div className="container flex-col flex sm:justify-center justify-center items-center gap-10 max-sm:flex-col">
      <p className="caption text-n-4 lg:block hover:transition duration-300 transform hover:translate-y-[-4px]">
        © {new Date().getFullYear()} Super Developer Ltd. All rights reserved.
      </p>
      <p className="quote text-n-4 hover:transition duration-300 transform hover:translate-y-[-4px]">
        Special instructions about the install
      </p>
    </div>
  </Section>
);

export default Footer;
