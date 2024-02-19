import React, { useContext } from 'react'
import UserContext from '../../context/user.context'

const Profile = () => {
  const userContext = useContext(UserContext);
  return (
    <div>{JSON.stringify(userContext)}
    <h1>Welcome {userContext.userData?.user?.name}</h1>
    </div>
  )
}

export default Profile