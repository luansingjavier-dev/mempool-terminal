const Content = ({ title, text, download, imageUrl, logo }) => (
  <div className="p-4 bg-n-7 rounded-2xl overflow-hidden lg:min-h-[46rem]">
    <div className="py-1 px-4 xl:px-8 md:py-10">
      <h4 className="h4 flex items-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
        {title}
        {logo && (
          <img
            src={logo}
            className=" w-[25px] h-[25px] object-cover hidden lg:flex"
          />
        )}
      </h4>
      <p className="text-center body mb-[2rem] text-n-3 hover: transition duration-300 transform hover:translate-y-[-4px]">
        {text}
      </p>
      {download && (
        <ul className="flex items-center justify-center ">
          <li
            className={`rounded-2xl flex items-center justify-center w-[8rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[8.5rem] md:h-[3.5rem] hover: transition duration-300 transform hover:translate-y-[-4px]`}
          >
            <div
              className={`flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem] hover:cursor-pointer`}
            >
              <p className="caption text-n-3 text-center hover:text-n-4 transition-colors duration-200 text-gradient">
                Download for Windows
              </p>
            </div>
          </li>
        </ul>
      )}
    </div>

    <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[30rem]">
      <img src={imageUrl} className="w-full h-full object-cover" />
    </div>
  </div>
);
export default Content;
