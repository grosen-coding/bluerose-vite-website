import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
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
import PageLoader from "./components/Loader";

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
  grid-template-columns: 100px 1fr;
  grid-template-rows: 70px 1fr 30px;

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
  height: calc(100vh - 100px);
  overflow: hidden;
`;

const App = () => {
  const [isLogoComplete, setLogoComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNavigation = (callback) => {
    setLoading(true); // Activate loader
    setTimeout(() => {
      setLoading(false); // Deactivate loader after minimum duration
      callback();
    }, 1500); // Matches loader duration
  };

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
          <>
            <PageLoader active={loading} />
            <AppContainer>
              <Header />
              <Sidebar />
              <MainWrapper>
                <AnimatedRoutes handleNavigation={handleNavigation} />
              </MainWrapper>
              <Footer />
            </AppContainer>
          </>
        )}
      </Router>
    </ThemeProvider>
  );
};

const AnimatedRoutes = ({ handleNavigation }) => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route
          path="/about"
          element={
            <PageWrapper handleNavigation={handleNavigation}>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/design-process"
          element={
            <PageWrapper handleNavigation={handleNavigation}>
              <DesignProcess />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper handleNavigation={handleNavigation}>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper handleNavigation={handleNavigation}>
              <Services />
            </PageWrapper>
          }
        />
        <Route
          path="/showcase"
          element={
            <PageWrapper handleNavigation={handleNavigation}>
              <Showcase />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children, handleNavigation }) => {
  const hasNavigated = useRef(false);

  useEffect(() => {
    if (handleNavigation && !hasNavigated.current) {
      handleNavigation(() => {
        hasNavigated.current = true; // Mark navigation as completed
      });
    }
  }, [handleNavigation]);

  return <>{children}</>;
};

export default App;
