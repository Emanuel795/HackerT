import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import TimeTable from './Routes/TimeTable/TimeTable';
import { LoginC } from './components/loginC';
import { Signup } from './components/signup';
import { TimeTable1} from './components/timeTable';

function App() {
  return (
    <Router>  
      <div className="App">
      <div className='bannerContainer'>
          <nav className='navGeneral'>
              <div className='container_imageLogo'>
                <img src="https://i.imgur.com/xuDqqoq.png" alt="imagen" />
              </div>
            <ul>
              <li>
                <button className='navButton'>
                  <Link to="/singin">Sign IN</Link>
                </button>
              </li>
              <li>
                <button className='navButton'>
                  <Link to="/signup">Sign UP</Link>
                </button>
              </li>
              <li>
                <button className='navButton'>
                  <Link to="/horarios">horarios</Link>
                </button>
              </li>
              <li>
                <button className='navButton'>
                  <Link to="/">main</Link>
                </button>
              </li>
            </ul>
          </nav>
      </div>  

        <Routes>
          
          <Route path="/">
            <Route path="horarios" element={<TimeTable/>}></Route>
            <Route path="singin" element={<LoginC/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
            <Route path="table" element={<TimeTable1/>}></Route>
            
            
          </Route>
          
        
          
        </Routes>
           
      </div>
    </Router>
  );
}

export default App;
