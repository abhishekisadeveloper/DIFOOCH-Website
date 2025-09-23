import "./index.css";
import Logo from "./components/Logo";
import HeroSection from "./components/HeroSection/HeroSection";
import WhyDifooch from "./components/WhyDifoochSection/WhyDifooch";

const App = () => {
  return (
    <>
      <div className="bg-secondary max-w-[1440px] mx-auto APP">
          <Logo />
          {/* horizontal line */}
          <div className="w-full h-[1px] mt-[16px]">
            <img
              className="w-full h-full"
              src="./horizontalLine.png"
              alt="horizontalLine"
            />
          </div>
        <div className="flex flex-col items-center mx-9">

          <HeroSection />
          <WhyDifooch />
        </div>
      </div>
    </>
  );
};

export default App;
