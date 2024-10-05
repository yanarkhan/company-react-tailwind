import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Home />
        <Features />
        <About />
        <Pricing />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
