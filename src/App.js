import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import MultiplayerNumber from './components/PlayerInfo/MultiplayerNumber';
import LevelSelection from './components/LevelSelection/LevelSelection';
import SingleBoard from './components/Board/SingleBoard/SingleBoard';
import Settings from './components/Settings/Settings'
import Ranking from './components/Ranking/Ranking'
import { UserProvider }  from './contexts/UserContext';
import { PlayerModeProvider }  from './contexts/PlayerModeContext';
import { LevelProvider }  from './contexts/LevelContext';
import { NumberPlayerProvider }  from './contexts/NumberPlayerContext';
import { TimeProvider }  from './contexts/TimeContext';


function App() {

  return (
    <UserProvider>
    <PlayerModeProvider>
    <LevelProvider>
    <NumberPlayerProvider>
    <TimeProvider>
      <Router>
        <Navbar />
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/single-player' component={PlayerInfo} />
              <Route exact path='/single-board' component={SingleBoard} />
              <Route exact path='/multi-player' component={MultiplayerNumber} />
              <Route exact path='/select-level' component={LevelSelection} />
              <Route exact path ='/ranking' component={Ranking} />
              <Route exact path ='/settings' component={Settings} />
            </Switch>
          </div>
         <Footer /> 
      </Router>
    </TimeProvider>
    </NumberPlayerProvider>
    </LevelProvider>
    </PlayerModeProvider>
    </UserProvider>
  );
}

export default App;
