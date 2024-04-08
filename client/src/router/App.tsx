import { Outlet } from "react-router-dom"
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


function App() {
  
  return (
    <>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default App
