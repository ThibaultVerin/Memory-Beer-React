import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import MultiplayerNumber from './components/PlayerInfo/PlayerNumber';
import LevelSelection from './components/LevelSelection/LevelSelection';
import SingleBoard from './components/Board/SingleBoard/SingleBoard';
import MultiBoard from './components/Board/MultiBoard/MultiBoard';
import Settings from './components/Settings/Settings'
import Ranking from './components/Ranking/Ranking'
import { UserProvider }  from './contexts/UserContext';
import { PlayerModeProvider }  from './contexts/PlayerModeContext';
import { LevelProvider }  from './contexts/LevelContext';
import { NumberPlayerProvider }  from './contexts/NumberPlayerContext';
import { TimeProvider }  from './contexts/TimeContext';
import { ActualPlayerProvider } from './contexts/ActualPlayerContext';


function App() {

  return (
    <UserProvider>
      <PlayerModeProvider>
        <LevelProvider>
          <NumberPlayerProvider>
            <TimeProvider>
              <ActualPlayerProvider>
                <Router>
                  <Navbar />
                    <div className="App">
                      <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/player-info' component={PlayerInfo} />
                        <Route exact path='/single-board' component={SingleBoard} />
                        <Route exact path='/multi-player' component={MultiplayerNumber} />
                        <Route exact path='/multi-board' component={MultiBoard} />
                        <Route exact path='/select-level' component={LevelSelection} />
                        <Route exact path ='/ranking' component={Ranking} />
                        <Route exact path ='/settings' component={Settings} />
                      </Switch>
                    </div>
                  <Footer /> 
                </Router>
              </ActualPlayerProvider>
            </TimeProvider>
          </NumberPlayerProvider>
        </LevelProvider>
      </PlayerModeProvider>
    </UserProvider>
  );
}

export default App;
