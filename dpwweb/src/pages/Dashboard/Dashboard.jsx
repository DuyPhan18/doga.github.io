import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import Widget from '../../components/Widget/Widget'
import "./dashboard.css"
const Dashboard = () => {


  return (
    <div className='dashboard'>
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="dashboardCon">
        <div className="content">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="charts">
         
        </div>
      </div>


    </div>
  )
}

export default Dashboard