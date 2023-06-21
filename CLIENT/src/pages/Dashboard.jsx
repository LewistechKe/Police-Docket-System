import React from 'react'
import "../styles/dashboard.css"
import SingleCard from '../components/reusable/SingleCard';

import CaseChart from "../charts/CaseChart";
import CaseTypeChart from '../charts/CaseTypeChart';

const caseObj = {
  title: "Total Cases",
  totalNumber:99,
  icon:'ri-apps-2-line',
};

const opencasesObj = {
  title: "Open Cases",
  totalNumber:16,
  icon:'ri-book-open-line',
};

const closedcasesObj = {
  title: "Closed Cases",
  totalNumber:47,
  icon:'ri-folder-lock-line',
};

const incidenttypesObj = {
  title: "Incident Types",
  totalNumber: 9,
  icon:'ri-error-warning-line',
};

function Dashboard() {
  return (
  <div className="dashboard">
    <div className="dashboard_wrapper">
      <div className="dashboard_cards">
       <SingleCard item={caseObj} />
       <SingleCard item={opencasesObj} />
       <SingleCard item={closedcasesObj} />
       <SingleCard item={incidenttypesObj} />
      </div>

      <div className="statics">
        <div className="stats">
          <h3 className='stats_title'>Case Weekly Stats</h3>
         <CaseChart />
        </div>

        <div className="stats">
          <h3 className='stats_title'>Incedent Type Stats</h3>
          <CaseTypeChart />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;