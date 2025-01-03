import React from 'react';
import Job from './Job.jsx';

export default function Jobs() {
  const JobList = [
    {
      "img":"/images/jobs/google.png",
      "alt":"google",
      "name":"Google as Junior Software Engineer", 
      "date":"2019 Oct - Until now"
    },
    {
      "img":"images/jobs/samsung.png",
      "alt":"samsung",
      "name":"Samsung as Junior Software Engineer", 
      "date":"2010 Oct - 2019 Oct"
    }
  ];

  return (
    <ul className="jobs">
      {JobList && JobList.map(item => 
        <li className="job">
          <Job {...item}/>
        </li>
      )}
    </ul>
  );
}

