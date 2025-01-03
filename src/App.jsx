import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import AnimatedLogo from "./components/AnimatedLogo";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  const [isLogoInNavbar, setLogoInNavbar] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AnimatedLogo
          onComplete={() => setLogoInNavbar(true)}
          inNavbar={isLogoInNavbar}
        />
        {isLogoInNavbar && <Navbar isVisible={isLogoInNavbar} />}
        <AnimatedRoutes isLogoInNavbar={isLogoInNavbar} />
      </Router>
    </ThemeProvider>
  );
}

function AnimatedRoutes({ isLogoInNavbar }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HeroSection isVisible={isLogoInNavbar} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
