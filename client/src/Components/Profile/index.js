import React, { useContext, useEffect } from 'react'
import './style.css'
import { UserContext } from '../../Contexts/UserContext'
import { Navigate } from 'react-router-dom'

/* 

Show user comments, info and issues

*/

export default function Profile() {
  const { userState, logout } = useContext(UserContext)
  useEffect(()=>{
    console.log('profile', userState.user)

  }, [])
  return (
    <div className="profile-container">
      <h2>{userState.user.username}</h2>
      <button onClick={() => logout()}>Logout</button>
      {!userState.token && <Navigate to="/" replace={true}/>}
    </div>
  )
}
