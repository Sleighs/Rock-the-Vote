import React, {useState} from "react"

const UserContext = React.createContext()

function UserContextProvider(props){ 
  const initState = { 
    user: JSON.parse(localStorage.getItem('rtv-user')) || {}, 
    token: localStorage.getItem('rtv-token') || null, 
    //loggedIn: false,
    isAuth: false, 
  }

  const [userState, setUserState] = useState(initState)

  async function signup(credentials){
    const res = await fetch('/auth/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    })

    const data = await res.json()

    const { user, token } = data

    if (user){
      localStorage.setItem('rtv-token', token)
      localStorage.setItem('rtv-user', JSON.stringify(user))
    }

    setUserState(prevState => ({
      ...prevState,
      user: user,
      token: token,
    })) 

    console.log('Sign up data', data)
  }

  async function login(credentials){
    const res = await fetch('/auth/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    })

    const data = await res.json()

    const { user, token } = data

    if (user){
      localStorage.setItem('rtv-token', token)
      localStorage.setItem('rtv-user', JSON.stringify(user))
    }
    
    setUserState(prevState => ({
      ...prevState,
      user: user,
      token: token,
    }))

    console.log('Log in data', data)
  }

  async function logout(credentials){    
    // remove from local storage
    localStorage.removeItem('rtv-token')
    localStorage.removeItem('rtv-user')
    
    setUserState(prevState => ({
      ...prevState,
      user: {},
      token: null,
    }))
  }
  
  return (
    <UserContext.Provider value={{
      //...userState,
      userState, 
      setUserState,
      signup,
      login,
      logout
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}