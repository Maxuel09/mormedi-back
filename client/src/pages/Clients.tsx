import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Profile from '../components/Profile'
const Clients = () => {
  return (
    <div>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Content />
          <Profile />
        </div>
      </div>

    </div>
  )
}

export default Clients