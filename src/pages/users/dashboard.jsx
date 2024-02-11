import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>This is user dashboard
           {/* {} */}
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard