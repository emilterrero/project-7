import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Content from './Content.js';

function App() {
    let [jobs, setJobs] = useState([])
    let [navOpen, setNav] = useState(false)
    let [search, setSearch] = useState('')

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

        <div className='body'>
        <Content 
        jobs={jobs}
        search={search}
        />

        {navOpen ? 
            <Sidebar
            search={search}
            setSearch={setSearch}
            jobs={jobs}
            />
            : ''
        }
        </div>
        </div>
    );
}

export default App;
