import { useState } from 'react'
import './App.css'
import LoginForm from './pages/Login/LoginForm.jsx'
import EmailConfirmationForm from './pages/UpdatePassword/EmailConfirmation/EmailConfirmationForm'
import UpdatePasswordForm from './pages/UpdatePassword/UpdatePassword/UpdatePasswordForm'
import HomePage from './pages/HomePage/HomePage'
import EventsPage from './pages/EventsPage/EventsPage'
import MyOrders from './pages/My Orders/MyOrders'



function App() {
  const [count, setCount] = useState(0)

  return (
      <MyOrders />
  )
}

export default App