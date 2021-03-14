import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import MultiplayerNumber from './components/PlayerInfo/MultiplayerNumber';
import MultiplayerInfo from './components/PlayerInfo/MultiplayerInfo';
import { UserProvider }  from './contexts/UserContext';

function App() {

  return (
    <UserProvider>
      <Router>
        <div className="App">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/single-player' component={PlayerInfo} />
            <Route exact path='/multi-player' component={MultiplayerNumber} />
            <Route exact path='/multi-info' component={MultiplayerInfo} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
