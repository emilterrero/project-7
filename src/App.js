import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';

function App() {
    let [jobs, setJobs] = useState([])
    let [navOpen, setNav] = useState(false)

    useEffect(() => {
        fetch('https://automationreplaceapi.herokuapp.com/automations')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[])


  return (
    <div className="App">
      <Navbar 
      navOpen={navOpen}
      setNav={setNav}
      />
      {navOpen ? 
      <Sidebar 
      jobs={jobs}
      />
          : ''
      }
    </div>
  );
}

export default App;
