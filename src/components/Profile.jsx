import React, { useContext } from "react"
import UserContext from "../context/userContext"
function Profile() {
    const {user}=useContext(UserContext)

  if(!user) return <div>please login</div>
  return <div>welcome {user.username} and password {user.password}</div>
  
}

export default Profile