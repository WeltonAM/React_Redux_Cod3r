import { Routes, Route, Navigate } from "react-router"
import Home from './components/pages/Home'
import User from './components/pages/User'

const Routers = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<User />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

  )
}

export default Routers