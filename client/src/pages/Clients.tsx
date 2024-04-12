import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Clients = () => {
  return (
    <div>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Content />
          
        </div>
      </div>

    </div>
  )
}

export default Clients