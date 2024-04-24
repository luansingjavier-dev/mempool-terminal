import { windows } from "../constants/images";
const hover =
  "hover: transition duration-300 hover:translate-y-[-4px] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]";

const Content = ({ title, text, download, imageUrl1, imageUrl2, logo }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/mempool-terminal.exe";
    link.download = "mempool-terminal.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 bg-n-7 rounded-2xl overflow-hidden lg:min-h-[46rem]">
      <div className="py-3 px-4 xl:px-8 md:py-10">
        <h4 className="h4 flex items-center text-center justify-between text-gradient mb-4 hover: transition duration-300 transform hover:translate-y-[-4px]">
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
              className={`rounded-2xl flex items-center justify-center w-[10rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[12rem] md:h-[3.5rem] hover: transition duration-300 transform hover:translate-y-[-4px]`}
            >
              <div
                className={`flex items-center justify-center w-full h-full bg-n-7  px-5 py-2 rounded-[1rem] hover:cursor-pointer`}
              >
                <img
                  className=" mr-2 hidden md:flex"
                  src={windows}
                  width={32}
                  height={32}
                  alt="Windows"
                />
                <button onClick={handleDownload}>
                  <p className="caption text-n-3 text-center hover:text-n-4 transition-colors duration-200 text-gradient md:text-left">
                    Download for Windows
                  </p>
                </button>
              </div>
            </li>
          </ul>
        )}
      </div>
      {imageUrl2 ? (
        <div className="relative mb-10 h-[20rem]">
          <img
            src={imageUrl1}
            alt="First Image"
            className={`w-full md:w-3/4 ${hover}`}
          />
          <img
            src={imageUrl2}
            alt="Second Image"
            className={`absolute w-full sm:w-full md:w-3/4 md:top-20 right-0 ${hover}`}
          />
        </div>
      ) : (
        <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[30rem]">
          <img src={imageUrl1} className="w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
};
export default Content;
