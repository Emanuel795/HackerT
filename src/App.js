import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import TimeTable from './Routes/TimeTable/TimeTable'
import { LoginC } from './components/loginC';

function App() {
  return (
    <Router>  
      <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/singin">Sign IN</Link>
            </li>
            <li>
              <Link to="/horarios">horarios</Link>
            </li>
            <li>
              <Link to="/">main</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          
          <Route path="/">
            <Route path="horarios" element={<TimeTable/>}></Route>
            <Route path="singin" element={<LoginC/>}></Route>
          </Route>
          
          
          
        </Routes>
           
      </div>
    </Router>
  );
}

export default App;
