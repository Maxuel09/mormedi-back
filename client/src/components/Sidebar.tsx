<<<<<<< HEAD
import '../style/Sidebar.css'
import Logo from '../assets/logo.svg'
=======
import Logo from '../assets/logo.svg'
import {Link} from "react-router-dom"

>>>>>>> 597e925f7678aca6105300c92edfa820eb46889e
const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
<<<<<<< HEAD
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

=======
        <img src={Logo} alt="logo Mormedi" />
      </div>
      <div className="menu--list">
          <Link to={""} className='item'>
          Home
          </Link>
          <Link to={"/clients"} className='item'>
          Clients
          </Link>
          <Link to={""} className='item'>
          Offers
          </Link>
          <Link to={""} className='item'>
          Reports
          </Link>
          <Link to={""} className='item'>
          Work team
          </Link>    
      </div>
>>>>>>> 597e925f7678aca6105300c92edfa820eb46889e
    </div>
  )
}

export default Sidebar