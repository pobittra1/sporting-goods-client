import { styles } from "@/css/styles";
import logo from "../../assets/logo.png";
import { Facebook, Linkedin, Send, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer
      className=" text-white p-8 w-full"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #d6c8d1, #d9c5c6, #d5c3bc, #ccc3b5, #bfc4b4)",
      }}
    >
      <div className="footer-section flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-6/12 mb-8 md:mb-0">
          <div className="logo-area w-full md:w-6/12">
            <a href="#">
              <img className="w-[200px]" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="footer-about-area mt-4 md:mt-0 md:ml-3">
            <h2 className="text-2xl font-bold">Purpose Of This</h2>
            <p>
              <span className="text-black text-2xl font-semibold">
                Welcome{" "}
              </span>
              to Elite{" "}
              <span className="text-black font-semibold">Sporting goods.</span>
              <p className="mt-2 text-sm text-gray-600">
                Your one-stop shop for all your sporting needs! Whether you're
                an avid athlete, a weekend warrior, or just starting your
                fitness journey, we have everything you need to excel in your
                sport. Our wide range of high-quality products includes
                equipment, apparel, and accessories for every sport imaginable.
                Explore our categories below and gear up for your next
                adventure!
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around w-full md:w-6/12">
          <div className="page-link-area mb-8 md:mb-0">
            <h2 className="text-black text-2xl font-bold">Links</h2>
            <ul className="gap-2 flex flex-col">
              <li>
                <a className={styles.underlineAnim} href="">
                  All Products
                </a>
              </li>
              <li>
                <a className={styles.underlineAnim} href="">
                  Manage Products
                </a>
              </li>
              <li>
                <a className={styles.underlineAnim} href="">
                  Cart
                </a>
              </li>
              <li>
                <a className={styles.underlineAnim} href="">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="social-link-area">
            <h2 className="text-black text-2xl font-bold">Visit here</h2>
            <ul className="flex mt-2 gap-6">
              <li>
                <a className={styles.underlineAnim} href="">
                  <Linkedin className="text-white pb-1" />
                </a>
              </li>
              <li>
                <a className={styles.underlineAnim} href="">
                  <Send className="text-white pb-1" />
                </a>
              </li>
              <li>
                <a className={styles.underlineAnim} href="">
                  <Facebook className="text-white pb-1" />
                </a>
              </li>
              <li>
                <a className={styles.underlineAnim} href="">
                  <Twitter className="text-white pb-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
