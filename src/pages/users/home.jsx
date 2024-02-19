import React, { useContext } from 'react'
import UserContext from '../../context/user.context'

const Home = () => {

    const userContext = useContext(UserContext);
  return (
    <div>
    
    <h1>{JSON.stringify(useContext)}</h1>
    <h1>User is Logged in  {userContext.isLogin+''}</h1>
    </div>
  )
}

export default Home