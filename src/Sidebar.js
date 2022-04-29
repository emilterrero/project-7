import './App.css';
import { useState, useEffect } from 'react';

function Sidebar({ jobs }) {


    return (
        <div className='sidebar'>
        {jobs.map((job) => {
            return <p>{job.Occupation}</p>
        })}
        </div>
    )
}

export default Sidebar;
