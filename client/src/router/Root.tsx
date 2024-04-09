import { Outlet } from "react-router-dom"
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


function Root() {
  
  return (
    <>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default Root
