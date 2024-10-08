import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import MainWrapper from "../components/MainWrapper";
import SkillSection from "../components/SkillSection";

const PortfolioPage = () => {
  return (
    <div className="w-full h-full relative">
      {/* <Header /> */}
      <div className="w-full h-screen bg-gray-500 text-white">
        <HeroPage />
        <MainWrapper>
          <SkillSection />
        </MainWrapper>
      </div>
    </div>
  );
};

export default PortfolioPage;
