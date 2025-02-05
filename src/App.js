import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Nosotros from "./Pages/Nosotros";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nosotros" element={<Nosotros/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
