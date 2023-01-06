import React, { useContext } from 'react'
import './style.css'
import { Footer, Nav, Profile } from '../../Components'
import { UserContext } from '../../Contexts/UserContext'

export default function ProfilePage() {
  return (
    <div className='page-container'>
      <Nav />
      <h1>Profile</h1>
      <Profile />
      <Footer />
    </div>
  )
}
