
import { Outlet } from "react-router-dom"
// import Sidebar from '../components/Sidebar'
// import Content from '../components/Content'
// import Profile from '../components/Profile'
import Header from '../components/Header'

function App() {

  return (
    <div className="dashboard">
      <Header/>
      {/* <Sidebar/> */}
      <Outlet/>
    </div>
  )
}

export default App
