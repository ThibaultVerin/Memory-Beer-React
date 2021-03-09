import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import MultiplayerInfo from './components/PlayerInfo/MultiplayerNumber';

function App() {
  return (
    <Router>
      <div className="App">
       <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/single-player' component={PlayerInfo} />
          <Route exact path='/multi-player' component={MultiplayerInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
