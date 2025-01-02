import { useState } from "react";
import { ThemeProvider } from "styled-components";
import AnimatedLogo from "./components/AnimatedLogo";
import HeroSection from "./components/HeroSection";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme"; // Import your theme file

function App() {
  const [showHero, setShowHero] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatedLogo onComplete={() => setShowHero(true)} />
      <HeroSection isVisible={showHero} />
    </ThemeProvider>
  );
}

export default App;
