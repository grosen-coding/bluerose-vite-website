import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedLogo from "./components/AnimatedLogo";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DesignProcess from "./pages/DesignProcess";
import Showcase from "./pages/Showcase";
import Home from "./pages/Home";

const App = () => {
  const [isLogoComplete, setLogoComplete] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <AnimatedLogo
          onComplete={() => setLogoComplete(true)}
          inNavbar={isLogoComplete}
        />
        {isLogoComplete && (
          <AnimatePresence mode="wait">
            <Routes>
              {/* Layout wraps all nested routes */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="design-process" element={<DesignProcess />} />
                <Route path="contact" element={<Contact />} />
                <Route path="showcase" element={<Showcase />} />
              </Route>
            </Routes>
          </AnimatePresence>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
