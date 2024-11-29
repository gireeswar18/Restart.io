import { ReactTyped } from "react-typed";
import { useContext, useEffect, useState } from "react";
import { IoClose, IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { FiSun } from "react-icons/fi";

const Home = () => {
  const [dark, setDark] = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const collections = {
    MAANG: "maang",
    "Fortune 500": "fortune",
    WITCH: "witch",
  };

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="flex flex-col items-center h-screen py-[2%] px-[15%] overflow-x-hidden">
      <div className="fixed top-3 right-8">
        <button>
        {dark ? (
          <FiSun
            size={24}
            className="hover:scale-110 transition-all cursor-pointer"
            onClick={() => setDark((prev) => !prev)}
            color="white"
          />
        ) : (
          <IoMoon
            size={24}
            className="hover:scale-110 transition-all cursor-pointer"
            onClick={() => setDark((prev) => !prev)}
          />
        )}
        </button>
      </div>

      <div className="header-container flex flex-col items-center justify-center px-[15%] py-[2%]">
        <div className="">
          <h1 className="text-[40px] md:text-[60px] font-extrabold text-center dark:text-white">
            Restart.
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500">
              io
            </span>
          </h1>
          <div className="flex flex-col items-start h-[32px] md:h-[40px] w-full bg-gray-100 border border-purple-200">
            <div className="font-audio-wide text-[12px] md:text-[16px] text-gray-500 pl-2 py-[7px] md:pl-4 md:py-2">
              <ReactTyped
                strings={[
                  "A Git for Job Sites...",
                  "Making Job Search Easier...",
                ]}
                style={{
                  fontFamily: "Audiowide",
                }}
                typeSpeed={20}
                backSpeed={30}
                backDelay={1500}
                cursorChar="_"
                loop
              />
            </div>
          </div>
          <div className="btn-container flex flex-col items-center justify-center pt-[32px] md:pt-[56px]">
            <button
              className="px-3 py-2 text-[12px] md:text-[16px] md:px-6 md:py-2 rounded-md hover:scale-110 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 transition ease-in-out duration-300 text-white "
              onClick={toggleModal}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className="note-container flex flex-col items-center justify-center bg-purple-200 mt-[64px] rounded-xl backdrop-blur-md shadow-md px-[15%] py-[2%]">
        <div className="">
          <h1 className="text-xl font-bold text-center py-3">
            Important Note!!
          </h1>

          <ul className="list-disc md:text-lg">
            <li>
              Career sites that are not well-maintained, lack adequate security
              measures, or impose location restrictions will not be included.
            </li>
            <li>
              Please ensure you are using a site specific to your region by
              verifying the domain (e.g., .in, .us, etc.).
            </li>
            <li>
              Only websites that offer job search functionality or direct links
              to job postings are considered for inclusion.
            </li>
          </ul>

          <div className="text-center font-bold text-xl pt-4">
            <p>Good Luck for your job search</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={toggleModal}
          className={`fixed inset-0 flex justify-center items-center
              transition-colors ${
                isOpen ? "visible bg-gray-400/80 dark:bg-black/80" : "invisible"
              }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-xl shadow transition-all p-6 ${
              isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
            }`}
          >
            <button
              className="absolute top-2 right-2 p-2 bg-white hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600"
              onClick={toggleModal}
            >
              <IoClose size={24} />
            </button>
            <div className="pt-4 flex flex-col items-center justify-center w-96 md:w-48">
              <p className="font-bold text-lg">Check these </p>

              <div className="flex flex-col space-y-3 pt-3 w-full">
                {Object.entries(collections).map(([key, value], ind) => {
                  return (
                    <Link key={ind} to={`/${value}`}>
                      <div
                        className="border border-gray-200 py-2 px-4 rounded-lg flex justify-between font-medium shadow-md hover:scale-105 transition-all cursor-pointer"
                      >
                        <div>{key}</div>
                        {">"}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
