import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';

function App() {
  return (
    
    <div>
        <Navbar/>
        <div id="inner-div">
          <div className="grid-container">
            <div className="item1">
              <a href="organizationLogin.html">ORGANIZATION &nbsp; <i className="fa fa-building" aria-hidden="true" /></a>
            </div>
            <div className="item2">
              <a href="studentLogin.html">STUDENT &nbsp;<i className="fa fa-user" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        {/* navbar script */}
      </div>
  );
}

export default App;
