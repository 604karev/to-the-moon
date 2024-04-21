import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import HeroSection from "components/Hero/HeroSection";
import OffersSection from "components/Offers/OffersSection";

const HomePage = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <OffersSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
