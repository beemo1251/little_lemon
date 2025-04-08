import Logo from '../assets/images/Logo.svg';

export const Nav = () => {
  return (
    <nav>
      <div className='content-nav'>
        <img src={Logo} alt="logo_litte_lemon" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  )
}
