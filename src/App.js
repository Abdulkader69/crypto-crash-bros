import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { BathRoom } from './components/BathRoom';
import { CommunityTools } from './components/CommunityTools';
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
import { FairDistribution } from './components/FairDistribution';
import { BuyAnApe } from './components/BuyAnApe';


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
        <FairDistribution/>
        <BuyAnApe/>
        <Specs/>
        <WelcomeClub/>
        <BathRoom/>
        <RoadMapActivations/>
        <CommunityTools/>
        <Team/>
      </AnimatedPage>
    </div>
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
          </Routes>
        </AnimatePresence>
        <Footer />
    </div>
  );
}

export default App;
