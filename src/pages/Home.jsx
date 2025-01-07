import HeroSection from "../components/HeroSection";

// Main Home Page
const Home = () => {
  return (
    <main aria-label="Home Page">
      {/* Hero Section */}
      <HeroSection isVisible={true} />

      {/* Additional Sections can be added here */}
    </main>
  );
};

export default Home;
