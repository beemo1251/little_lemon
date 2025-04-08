import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';

export const Nav = () => {
  return (
    <nav>
      <div className='content-nav'>
        <img src={Logo} alt="logo_litte_lemon" />
        <ul>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to='/about'>About</NavLink>
          <NavLink className="nav-link" to='/menu'>Menu</NavLink>
          <NavLink className="nav-link" to='/booking'>Reservations</NavLink>
          <NavLink className="nav-link" to='/order'>Order Online</NavLink>
          <NavLink className="nav-link" to='/login'>Login</NavLink>
        </ul>
      </div>
    </nav>
  )
}
