const InfoCard = ({ content, title }) => (
  <div className="flex justify-start flex-col px-5 py-5 rounded-[20px] max-w-[350px] md:mr-5 sm:mr-5 mr-0 my-2 feedback-card hover: transition duration-300 transform hover:translate-y-[-4px]">
    <div className="flex flex-row">
      <div className="flex flex-col">
        <h4 className="font-semibold text-[17px] text-gradient">{title}</h4>
      </div>
    </div>
    <p className="font-normal text-[16px] text-n-4 my-5">{content}</p>
  </div>
);

export default InfoCard;
