import '../style/Sidebar.css'
import Logo from '../assets/logo.svg'
const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
      <img src={Logo} alt="MORMEDI " />
      </div>
      <div className="menu--list">
        <a href="#" className="item">
          
          Dashboard
        </a>
        <a href="#" className="item">
          
        Customers
        </a>
        <a href="#" className="item">
          
        Offers
        </a>
        <a href="#" className="item">
          
        Reports
        </a>
        <a href="#" className="item">
          
        Work team
        </a>
        
      </div>

    </div>
  )
}

export default Sidebar