import "./index.css";
import Logo from "./components/Logo";
import HeroSection from "./components/HeroSection/HeroSection";
import WhyDifooch from "./components/WhyDifoochSection/WhyDifooch";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Advantages from "./components/Advantages/Advantages";
import Testimonials from "./components/Testimonials/Testimonials";
import Features from "./components/Features/Features";
import MultiLocation from "./components/MultiLocation/MultiLocation";
import Price from "./components/Price/Price";
import Ready from "./components/Ready/Ready";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
    <div className="bg-secondary">
      <div className="max-w-[1440px] mx-auto APP">
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
          <HowItWorks />
        </div>
          <Advantages />
          <div className="flex flex-col items-center mx-9">
            <Testimonials />
            <Features />
            <MultiLocation />
            <Price />
            <Ready />
          </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default App;
