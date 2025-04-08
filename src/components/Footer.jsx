import logo from '../assets/images/footer_logo.png';

export const Footer = () => {
  return (
    <footer>
      <div className='content-footer'>
        <div className="logo">
          <img src={logo} alt="little lemon" />
        </div>
        <div className="first-column">
          <h4>Dootmat Navigation</h4>
          <span>Home</span>
          <span>About</span>
          <span>Menu</span>
          <span>Reservations</span>
          <span>Order Online</span>
          <span>Login</span>
        </div>
        <div className="second-column">
          <h4>Contact</h4>
          <span>Adress</span>
          <span>phone number</span>
          <span>email</span>
        </div>
        <div className="third-column">
          <h4>Social Media</h4>
          <span>Adress</span>
          <span>phone number</span>
          <span>email</span>
        </div>
      </div>
    </footer>
  )
}
