import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedLogo from "./components/AnimatedLogo";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DesignProcess from "./pages/DesignProcess";
import Showcase from "./pages/Showcase";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1; /* Ensures main content fills available space */
  padding-top: 150px; /* Pushes content below the Navbar */
`;

const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  z-index: 1000; /* Ensures Navbar stays on top */
  transform: translateY(${(props) => (props.isVisible ? "0" : "-100%")});
  transition: transform 0.8s ease-in-out;
  overflow: hidden;
`;

function App() {
  const [isLogoInNavbar, setLogoInNavbar] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <AnimatedLogo
            onComplete={() => setLogoInNavbar(true)}
            inNavbar={isLogoInNavbar}
          />
          <Header isVisible={isLogoInNavbar}>
            {isLogoInNavbar && <Navbar />}
          </Header>
          <ContentWrapper>
            <AnimatedRoutes isLogoInNavbar={isLogoInNavbar} />
          </ContentWrapper>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

function AnimatedRoutes({ isLogoInNavbar }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HeroSection isVisible={isLogoInNavbar} />} />
        <Route path="/about" element={<About />} />
        <Route path="/design-process" element={<DesignProcess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
