import { Welcome } from './components/Welcome';
import { Team } from './components/Team';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="crypto-landing-page">
      <Welcome/>
      <Banner/>
      <Team/>
    </div>
  );
}

export default App;
