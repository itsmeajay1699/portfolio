import Header from "../components/Header";
import HeroPage from "../components/HeroPage";
import MainWrapper from "../components/MainWrapper";
import SkillSection from "../components/SkillSection";

const PortfolioPage = () => {
  return (
    <div className="w-full h-full relative">
      <Header />
      <div className="w-full h-screen bg-gray-500 text-white">
        <HeroPage />
        {/* <MainWrapper> */}
        <SkillSection />
        {/* </MainWrapper> */}
        <section className="h-screen">
          <h1>Hello world</h1>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
