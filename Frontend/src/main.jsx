import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Company from "./components/Company.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/maang" element={<Company cName="maang" />} />
          <Route path="/fortune" element={<Company cName="fortune" />} />
          <Route path="/witch" element={<Company cName="witch" />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </ThemeProvider>
);
