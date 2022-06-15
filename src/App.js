import { CommunityTools } from './components/CommunityTools';
import { Team } from './components/Team';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="crypto-landing-page">
      <Welcome/>
      <CommunityTools/>
      <Team/>
    </div>
  );
}

export default App;
