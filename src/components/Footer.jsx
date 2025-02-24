import logo from "../assets/images/logo_white.png";
import "../assets/styles/Footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src={logo} alt="logo" className="footer-logo" />
      </div>
      <div className="footer-text">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;