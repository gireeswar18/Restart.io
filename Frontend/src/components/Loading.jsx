import Lottie from "lottie-react";
import loading from "../assets/Animation - 1732025270765.json";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Loading = () => {
  const [dark] = useContext(ThemeContext);

  return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-60 h-60 flex items-center justify-center flex-col">
          <Lottie animationData={loading} loop={true} />
          <h2 className="text-xl font-bold">Loading</h2>
        </div>
      </div>
  );
};
export default Loading;
