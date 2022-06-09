import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
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
                <Link to="/singin" className='navButton'>Sign IN</Link>
              </li>
              <li>
                <Link to="/signup" className='navButton'>Sign UP</Link>
              </li>
              <li>
                <Link to="/table" className='navButton'>horarios</Link>
              </li>
              <li>
                <Link to="/" className='navButton'>main</Link>
              </li>
            </ul>
          </nav>
      </div>  

        <Routes>
          
          <Route path="/">
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
