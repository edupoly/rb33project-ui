import React from 'react'
import { Outlet } from 'react-router-dom'

function ManagerDashboard() {
  return (
    <div>
        <h2>ManagerDashboard</h2>
        <Outlet></Outlet>
    </div>
  )
}

export default ManagerDashboard