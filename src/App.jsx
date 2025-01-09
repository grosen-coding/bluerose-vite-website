import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedLogo from "./components/AnimatedLogo";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DesignProcess from "./pages/DesignProcess";
import Showcase from "./pages/Showcase";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "nav main";
  grid-template-columns: 100px 1fr;
  grid-template-rows: 70px 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;

const MainWrapper = styled.main`
  grid-area: main;
  height: calc(100vh - 100px);
  overflow: hidden;
  position: relative;
  top: 30px;
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
          <>
            <AppContainer>
              <Header />
              <Sidebar />
              <MainWrapper>
                <AnimatedRoutes />
              </MainWrapper>
            </AppContainer>
          </>
        )}
      </Router>
    </ThemeProvider>
  );
};

const AnimatedRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/design-process"
          element={
            <PageWrapper>
              <DesignProcess />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/showcase"
          element={
            <PageWrapper>
              <Showcase />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => {
  return <>{children}</>;
};

export default App;
