import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white p-8 w-full">
      <div className="footer-section sm:grid-cols-2 grid grid-cols-3">
        <div className="logo-area w-[200px]">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="footer-about-area">
          <h2>Purpose Of This</h2>
          <p>
            In this website you can shop product of sporting-goods and also you
            can add product to sell.
          </p>
        </div>
        <div className="page-link-area">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
        <div className="social-link-area">
          <ul>
            <li>
              <a href="">social</a>
            </li>
            <li>
              <a href="">social</a>
            </li>
            <li>
              <a href="">social</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
