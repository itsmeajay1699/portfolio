import Header from "../components/Header";
import HeroPage from "../components/HeroPage";

const PortfolioPage = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Header />
      <div className="w-full h-auto bg-gray-500 text-white">
        <HeroPage />
      </div>
    </div>
  );
};

export default PortfolioPage;
