import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginC } from './components/loginC';

function App() {
  return (
    <Router>  
      <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/singin">Sign IN</Link>
            </li>
            <li>
              <Link to="/horarios">horarios</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/singin">
            <LoginC/> 
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/horarios">
            
          </Route>
        </Switch>
           
      </div>
    </Router>
  );
}

export default App;
