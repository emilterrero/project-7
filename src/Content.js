import './App.css';
import { useState, useEffect } from 'react';

function Content({ search, jobs }) {

    return (
        <div className='content'>
        {jobs.map(job => {
            if (search == job.SOC) {
                return (
                    <div className='content-div'>
                    <h2>{job.Occupation}</h2>
                    <h3>Probability: {job.Probability}</h3>
                    <ul classList='state-ul'>
                    <li>Alabama: {job.Alabama}</li>
                    <li>Alaska: {job.Alaska}</li>
                    <li>Arizona: {job.Arizona}</li>
                    <li>Arkansas: {job.Arkansas}</li>
                    <li>California: {job.California}</li>
                    <li>Colorado: {job.Colorado}</li>
                    <li>Connecticut: {job.Connecticut}</li>
                    <li>Delaware: {job.Delaware}</li>
                    <li>District of Columbia: {job['District of Columbia']}</li>
                    <li>Florida: {job.Florida}</li>
                    <li>Georgia: {job.Georgia}</li>
                    <li>Hawaii: {job.Hawaii}</li>
                    <li>Idaho: {job.Idaho}</li>
                    <li>:Illinois {job.Illinois}</li>
                    <li>Indiana: {job.Indiana}</li>
                    <li>:Iowa {job.Iowa}</li>
                    <li>Kansas: {job.Kansas}</li>
                    <li>Kentucky: {job.Kentucky}</li>
                    <li>Louisiana: {job.Louisiana}</li>
                    <li>Maine: {job.Maine}</li>
                    <li>Maryland: {job.Maryland}</li>
                    <li>Massachusetts: {job.Massachusetts}</li>
                    <li>Michigan: {job.Michigan}</li>
                    <li>Minnesota: {job.Minnesota}</li>
                    <li>Mississippi: {job.Mississippi}</li>
                    <li>Missouri: {job.Missouri}</li>
                    <li>Montana: {job.Montana}</li>
                    <li>Nebraska: {job.Nebraska}</li>
                    <li>Nevada {job.Nevada}</li>
                    <li>New Hampshire: {job['New Hampshire']}</li>
                    <li>New Jersey: {job['New Jersey']}</li>
                    <li>New Mexico: {job['New Mexico']}</li>
                    <li>New York: {job['New York']}</li>
                    <li>North Carolina: {job['North Carolina']}</li>
                    <li>North Dakota: {job['North Dakota']}</li>
                    <li>Ohio: {job.Ohio}</li>
                    <li>Oklahoma: {job.Oklahoma}</li>
                    <li>Oregon: {job.Oregon}</li>
                    <li>Pennsylvania: {job.Pennsylvania}</li>
                    <li>Rhode Island: {job['Rhode Island']}</li>
                    <li>South Carolina: {job['South Carolina']}</li>
                    <li>South Dakota: {job['South Dakota']}</li>
                    <li>Tennessee: {job.Tennessee}</li>
                    <li>Texas: {job.Texas}</li>
                    <li>Utah: {job.Utah}</li>
                    <li>Vermont: {job.Vermont}</li>
                    <li>Virginia: {job.Virginia}</li>
                    <li>Washington: {job.Washington}</li>
                    <li>West Virginia: {job['West Virginia']}</li>
                    <li>Wisconsin: {job.Wisconsin}</li>
                    <li>Wyoming: {job.Wyoming}</li>
                    </ul>
                    </div>
                )
            }
        })}
        </div>
    )
}

export default Content;
