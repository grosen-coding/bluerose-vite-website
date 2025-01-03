import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AnimatedLogo from "./components/AnimatedLogo";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  const [isLogoComplete, setLogoComplete] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        {/* AnimatedLogo remains visible with a transition */}
        <AnimatedLogo
          onComplete={() => {
            setTimeout(() => setLogoComplete(true), 100); // Delay for smooth transition
          }}
        />
        <div
          style={{
            opacity: isLogoComplete ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {/* <Navbar /> */}
          <Routes>
            <Route
              path="/"
              element={<HeroSection isVisible={isLogoComplete} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
