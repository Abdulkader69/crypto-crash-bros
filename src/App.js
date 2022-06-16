import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { BathRoom } from './components/BathRoom';
// import { CommunityTools } from './components/CommunityTools';
import { Header } from './components/Header';
import { RoadMapActivations } from './components/RoadMapActivations';
import { Specs } from './components/Specs';
import { Team } from './components/Team';
import { Welcome } from './components/Welcome';
import { WelcomeClub } from './components/WelcomeClub';
import AnimatedPage from "./AnimatedPage";
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import { YachtClub } from './components/YachtClub';
// import { FairDistribution } from './components/FairDistribution';
import { BuyAnApe } from './components/BuyAnApe';
import AnimatedIMG from './assets/images/banner-animation.gif'


export const LandingPage = () => {
  return (
    <AnimatedPage>
      <Welcome/>
    </AnimatedPage>
  )
}
export const Home = () => {
  return (
    <div className="crypto-landing-page">
      <Header/>
      <AnimatedPage>
        <Banner/>
        <YachtClub/>
        {/* <FairDistribution/> */}
        <BuyAnApe/>
        <Specs/>
        <WelcomeClub/>
        <BathRoom/>
        <RoadMapActivations/>
        {/* <CommunityTools/> */}
        <Team/>
      </AnimatedPage>
    </div>
  )
}
export const MintPage = () => {
  return (
    <AnimatedPage>
      <Header/>
      <div className='home-banner py-12 overflow-hidden' id='Banner'>
        <div className="w-full max-w-[1132px] m-auto pl-4 pr-4 md:pr-8 relative overflow-hidden md:h-[415px]">
            <div className="flex items-center justify-center bg-[rgba(175,213,86)] overflow-hidden w-full md:w-[calc(100%-260px)] py-10 md:py-2 pl-4 md:pl-0 pr-4 md:pr-11 rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site mb-8 md:mb-0">
                <div className="inner w-full">
                    <div className="sold-wrap mb-10 max-w-sm m-auto text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nostrum odit. Architecto vero, possimus enim corrupti fugiat odit quod sed.</p>
                    </div>
                    <div className="counter flex items-center justify-between max-w-[230px] m-auto mb-5 -mt-3">
                        <span className='text-3xl text-white font-bold w-8 h-8 border border-solid border-white cursor-pointer flex items-center justify-center'>-</span>
                        <span className='text-xl text-white font-bold'>10</span>
                        <span className='text-2xl text-white font-bold w-8 h-8 border border-solid border-white cursor-pointer flex items-center justify-center'>+</span>
                    </div>
                    <div className="link flex items-center justify-center mb-2 max-w-[300px] m-auto">
                        <a className='roadmap-bg w-full text-center py-2 px-12 text-xs sm:text-base text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="https://magiceden.io/marketplace/dope_duck_club">Mint Now</a>
                    </div>
                    {/* <div className="link flex items-center justify-center">
                        <a className='roadmap-bg mr-1 py-2 px-10 text-xs sm:text-base text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="https://discord.gg/tgChmTewMr">Discord</a>
                        <a className='roadmap-bg ml-1 py-2 px-10 text-xs sm:text-base text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="https://twitter.com/DopeDuckClub">Twitter</a>
                    </div> */}
                </div>
            </div>
            <div className="image md:absolute right-4 top-0 overflow-hidden rounded-[30px] flex h-full w-full md:w-[324px] border-2 border-solid border-Dark shadow-Site">
                <img className='w-full h-full object-cover' src={AnimatedIMG} alt="animation" />
            </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

function App() {
  const location = useLocation();
  return (
    <div className="page-container">
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={ <LandingPage/> } />
            <Route path="/home" element={ <Home/> } />
            <Route path="/mint" element={ <MintPage/> } />
          </Routes>
        </AnimatePresence>
        <Footer />
    </div>
  );
}

export default App;
