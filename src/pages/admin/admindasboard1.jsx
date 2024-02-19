import React,{useContext} from 'react'
import { Outlet } from 'react-router-dom'
import { isLocalAdminUser } from '../../auth/helper.auth'

import { Navigate } from 'react-router-dom'
import UserContext from '../../context/user.context'


const AdminDasboard = () => {

   const userContext = useContext(UserContext);

  const dashboardView = () => {
    return (
      <div>
        <h1>This is admin dashboard</h1>

        <Outlet></Outlet>
      </div>
    )
  }
  return (
      (isLocalAdminUser())?dashboardView(): <Navigate to="/users/home"/>
  )
}

export default AdminDasboard