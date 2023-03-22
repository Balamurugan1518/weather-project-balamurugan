import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// import Weather from './Reactproject/Weather';
import ProfileCard from './ProfileCard';
function App(){
  return(
    <>
    <Router>
      <div>
        <nav>
          <ul>
            

            <h1 style={{position:"relative", bottom:"200px", fontSize:"45px",right:"70px"}}>
              <Link to="/Weather">Weather Report</Link>
            </h1>
          </ul>

        
        
        <Routes>
        

          <Route path="/Weather" element={<ProfileCard />}>
            
          </Route> 
        </Routes>

        </nav>
        
      </div>
    </Router>
    </>
  )
  
}


export default App;
