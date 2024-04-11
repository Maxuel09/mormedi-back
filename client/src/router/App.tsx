
import { Outlet } from "react-router-dom"
// import Sidebar from '../components/Sidebar'
// import Content from '../components/Content'
// import Profile from '../components/Profile'
// import Header from '../components/Header'
import '../style/App.css'

function App() {

  return (
    <>


      {/* <Header/> */}
      <Outlet />
    </>
  )
}

export default App
