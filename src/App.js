import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import MultiplayerNumber from './components/PlayerInfo/MultiplayerNumber';
import MultiplayerInfo from './components/PlayerInfo/MultiplayerInfo';
import LevelSelection from './components/LevelSelection/LevelSelection';
import { UserProvider }  from './contexts/UserContext';
import { NumberUserProvider }  from './contexts/NumberUserContext';
import { LevelProvider }  from './contexts/LevelContext';

function App() {

  return (
    <UserProvider>
    <LevelProvider>
    <NumberUserProvider>
      <Router>
        <div className="App">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/single-player' component={PlayerInfo} />
            <Route exact path='/multi-player' component={MultiplayerNumber} />
            <Route exact path='/select-level' component={LevelSelection} />
            <Route exact path='/multi-info' component={MultiplayerInfo} />
          </Switch>
        </div>
      </Router>
     </NumberUserProvider>
     </LevelProvider>
    </UserProvider>
  );
}

export default App;
