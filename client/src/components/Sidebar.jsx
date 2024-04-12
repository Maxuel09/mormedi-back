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
          
         home
        </a>
        <a href="#" className="item">
          
        customers
        </a>
        <a href="#" className="item">
          
        offers
        </a>
        <a href="#" className="item">
          
        reports
        </a>
        <a href="#" className="item">
          
        work team
        </a>
        
      </div>

    </div>
  )
}

export default Sidebar