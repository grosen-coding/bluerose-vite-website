import { useState } from "react";
import AnimatedLogo from "./components/AnimatedLogo";
import HeroSection from "./components/HeroSection";

function App() {
  const [showHero, setShowHero] = useState(false);

  return (
    <>
      <AnimatedLogo onComplete={() => setShowHero(true)} />
      <HeroSection isVisible={showHero} />
    </>
  );
}

export default App;
