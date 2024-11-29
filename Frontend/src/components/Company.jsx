import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import Loading from "./Loading";
import Navbar from "./Navbar";
import ThemeContext from "../context/ThemeContext";
import SearchContext from "../context/SearchContext";

const Company = ({ cName }) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dark] = useContext(ThemeContext);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch] = useContext(SearchContext);

  const fetchData = async () => {

    const back = "https://restart-io-backend.onrender.com";
    setLoading(true);
    console.log("Fetching data...");
    axios
      .get(`${back}/${cName}`)
      .then((response) => {
        setCompanies(response.data);
        setFilteredCompanies(response.data);
      })
      .catch((err) => {
        console.error("Detailed error:", err.response || err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(e.target.value);

    const filtered = companies.filter((c) =>
      c.company.toLowerCase().includes(value)
    );

    setFilteredCompanies(filtered);
  };

  useEffect(() => {
    setCompanies([]);
    setSearchTerm("");
    fetchData();
  }, [cName]);

  return (
    <div
      className={`min-h-screen ${
        dark
          ? "bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
          : "bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] "
      }`}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div
            className={`flex flex-col space-y-4 px-[32px] md:px-[15%] pt-[12%] lg:pt-[5%] "
            }`}
          >
            {showSearch && (
              <input
                type="text"
                className="outline-none px-4 border border-purple-300 py-2 rounded-xl mt-[5%] md:mt-[2%]"
                placeholder="Type here..."
                value={searchTerm}
                onChange={handleSearch}
              />
            )}

            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((c, ind) => {
                return (
                  <div
                    key={ind}
                    className={`flex items-center gap-[24px] border p-[8px] md:p-[16px] rounded-xl shadow-sm backdrop-blur-md
                  bg-slate-100 dark:text-white dark:bg-black/5`}
                  >
                    <div className="">
                      <img
                        src={c.logo}
                        className="rounded-md h-[32px] w-[32px] md:h-[64px] md:w-[64px] border p-2 md:p-3 object-scale-down dark:bg-white"
                      />
                    </div>
                    <div className="flex-grow flex items-center justify-between md:ml-[64px]">
                      <h2 className="text-md md:text-lg font-semibold">
                        {c.company}
                      </h2>
                      <a
                        href={c.site}
                        className="flex items-center space-x-2 md:space-x-4 bg-purple-500 text-white px-4 py-1 md:px-6 md:py-2 rounded-full hover:scale-[1.05]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm font-light md:text-lg md:font-medium">
                          Visit
                        </span>
                        <IoIosArrowForward />
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <h4 className="text-center font-semibold dark:text-white">
                No results found!
              </h4>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Company.propTypes = {
  cName: PropTypes.string.isRequired,
};

export default Company;
