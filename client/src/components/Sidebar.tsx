import Logo from '../assets/logo.svg'
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <img src={Logo} alt="MORMEDI " />
      </div>
      <div className="menu--list">
          <Link to={""} className='item'>
          home
          </Link>
          <Link to={"/clients"} className='item'>
          clients
          </Link>
          <Link to={""} className='item'>
          offers
          </Link>
          <Link to={""} className='item'>
          reports
          </Link>
          <Link to={""} className='item'>
          workteam
          </Link>    
      </div>
    </div>
  )
}

export default Sidebar