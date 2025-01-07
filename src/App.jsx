import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop"; // Ensure ScrollToTop is imported
import AnimatedLogo from "./components/AnimatedLogo";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DesignProcess from "./pages/DesignProcess";
import Showcase from "./pages/Showcase";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Services from "./pages/Services";

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
  grid-template-columns: 10% 1fr;
  grid-template-rows: auto 1fr 4%;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;

const MainWrapper = styled.main`
  grid-area: main;
  overflow: hidden;
`;

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
          <AppContainer>
            <Header />
            <Sidebar />
            <MainWrapper>
              <AnimatedRoutes isLogoComplete={isLogoComplete} />{" "}
            </MainWrapper>
            <Footer />
          </AppContainer>
        )}
      </Router>
    </ThemeProvider>
  );
};

const AnimatedRoutes = ({ isLogoComplete }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HeroSection isVisible={isLogoComplete} />} />{" "}
        <Route path="/about" element={<About />} />
        <Route path="/design-process" element={<DesignProcess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
