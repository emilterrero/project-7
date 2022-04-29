import './App.css';
import { useState, useEffect } from 'react';

function Sidebar({ jobs, search, setSearch }) {

    const jobClick = (e) => {
        console.log(e.target.id)
        setSearch(e.target.id)
    }


    return (
        <div className='sidebar'>
        {jobs.map((job) => {
            return <p
                id={job.SOC}
                onClick={jobClick}
                >
                {job.Occupation}
                </p>
        })}
        </div>
    )
}

export default Sidebar;
