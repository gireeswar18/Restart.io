import { IoHome, IoMoon, IoSearch } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import ThemeContext, { ThemeProvider } from "../context/ThemeContext";
import { useContext, useEffect } from "react";
import SearchContext from "../context/SearchContext";

const Navbar = () => {
  const [dark, setDark] = useContext(ThemeContext);
  const [search, toggleSearch] = useContext(SearchContext);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="fixed flex justify-center w-screen py-2 z-20">
      <div
        className={`flex gap-5 md:gap-8 border ${
          dark ? "bg-black border-white" : "border-purple-200"
        } px-4 py-3 rounded-xl shadow-lg backdrop-blur-md`}
      >
        <Link to="/">
          <IoHome
            size={20}
            className="hover:scale-110 transition-all cursor-pointer"
            color={dark ? "white" : ""}
          />
        </Link>
        <IoSearch
          size={20}
          className="hover:scale-110 transition-all cursor-pointer"
          color={dark ? "white" : ""}
          onClick={toggleSearch}
        />
        {dark ? (
          <FiSun
            size={20}
            className="hover:scale-110 transition-all cursor-pointer"
            onClick={() => setDark((prev) => !prev)}
            color="white"
          />
        ) : (
          <IoMoon
            size={20}
            className="hover:scale-110 transition-all cursor-pointer"
            onClick={() => setDark((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};
export default Navbar;
