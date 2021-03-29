import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import MultiplayerNumber from './components/PlayerInfo/MultiplayerNumber';
import MultiplayerInfo from './components/PlayerInfo/MultiplayerInfo';
import LevelSelection from './components/LevelSelection/LevelSelection';
import SingleBoard from './components/Board/SingleBoard/SingleBoard';
import Settings from './components/Settings/Settings'
import { UserProvider }  from './contexts/UserContext';
import { NumberUserProvider }  from './contexts/NumberUserContext';
import { LevelProvider }  from './contexts/LevelContext';


function App() {

  return (
    <UserProvider>
    <LevelProvider>
    <NumberUserProvider>
      <Router>
        <Navbar />
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/single-player' component={PlayerInfo} />
              <Route exact path='/single-board' component={SingleBoard} />
              <Route exact path='/multi-player' component={MultiplayerNumber} />
              <Route exact path='/multi-info' component={MultiplayerInfo} />
              <Route exact path='/select-level' component={LevelSelection} />
              <Route exact path ='/settings' component={Settings} />
            </Switch>
          </div>
         <Footer /> 
      </Router>
     </NumberUserProvider>
     </LevelProvider>
    </UserProvider>
  );
}

export default App;
