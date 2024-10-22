import '../css/Dashbord.css';

import React from 'react';

export const Dashboard = () => {
  return (
  <div className="content">
    <div className="main-content w-100"> 
      <div className="right-content">
        <div className="dashboardBoxWrapper">
          <div className="dashboardBox">Box 1</div>
          <div className="dashboardBox">Box 2</div>
          <div className="dashboardBox">Box 3</div>
          <div className="dashboardBox">Box 4</div>
        </div>
        <div className="dashboardBoxWrapperRow">
          <div className="box">Right Box</div> 
        </div>
      </div>
    </div>
    </div>
  );
};

