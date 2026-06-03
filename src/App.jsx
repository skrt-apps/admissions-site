import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diagnostic from "./pages/Diagnostic";
import Report from "./pages/Report";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostic" element={<Diagnostic />} />
        <Route path="/about" element={<About />} />
        <Route path="/report/:id" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}
