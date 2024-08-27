import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection, stickyNav } from "../utils";

const Menu = () => (
 <ul className="menu">
  
    <li className="menu-item">
      <a href="#section-started">
        <span className="animated-button">
          <span>Resumo</span>
        </span>
      </a>
    </li>
    <li className="menu-item">
      <a href="#section-eu">
        <span className="animated-button">
          <span>Sobre Mim</span>
        </span>
      </a>
    </li>
    <li className="menu-item">
      <a href="#section-experience">
        <span className="animated-button">
          <span>Experiência</span>
        </span>
      </a>
    </li>
    <li className="menu-item">
      <a href="#section-education">
        <span className="animated-button">
        <span>Formação Acadêmica</span>
        </span>
      </a>
    </li>
    <li className="menu-item">
      <a href="#section-skills">
        <span className="animated-button">
        <span>Skills</span>
        </span>
      </a>
    </li>
   
    <li className="menu-item">
    <a target="_blank" href="https://api.whatsapp.com/send?phone=5521972832408&text=Ol%C3%A1,%20entrei%20no%20seu%20site%20e%20quero%20saber%20mais.">
    <span className="animated-button">
          <span>Bora Conversar?</span>
        </span>
      </a>
    </li>
   {/* <li className="menu-item menu-item-has-children">
      <Link legacyBehavior href="/blog">
        <a>
          <span className="animated-button">
            <span>Blog</span>
          </span>
        </a>
      </Link>
      <ul className="sub-menu">
        <li className="menu-item">
          <Link legacyBehavior href="/blog">
            <a>Blog Posts</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/single-post">
            <a>Single Post</a>
          </Link>
        </li> 
      </ul>
    </li>*/}
  </ul>
);

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", activeSection);
  }, []);

  return (
    <Fragment>
      <DaskTopHeader />
      <MobileHeader />
    </Fragment>
  );
};
export default Header;
const DaskTopHeader = () => (
  <header className="desktopHeader header">
    {/* logo */}
    <div className="logo">
      <a href="#">
        {/*<img className="logo-img" src="images/logo.png" alt="" />*/}
        <span className="logo-lnk">
Cadu Rocha        </span>
      </a>
    </div>
    {/* menu button */}
    <a href="#" className="menu-btn">
      <span />
    </a>
    {/* download cv button */}
    <a href="https://drive.devone.com.br/index.php/s/aZUK6m0MfY6QFWO" target="_Blank" className="btn download-cv-btn">
      <span className="animated-button">
        <span>Download CV</span>
      </span>
      <i className="icon fas fa-download" />
    </a>
    {/* header sidebar */}
    <div className="header-sidebar">
      {/* top menu */}
      <div className="top-menu">
        <div className="top-menu-nav">
          <div className="menu-topmenu-container">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  </header>
);
const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      {/* logo */}
      <div className="logo">
        <a href="#">
         {/* <img className="logo-img" src="images/logo.png" alt="" />*/}
          <span className="logo-lnk">
Cadu Rocha           
          </span>
        </a>
      </div>
      {/* menu button */}
      <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
        <span />
      </a>
      {/* download cv button */}
      <a href="https://drive.devone.com.br/index.php/s/aZUK6m0MfY6QFWO" target="_blank" className="btn download-cv-btn">
        <span className="animated-button">
          <span>Download CV</span>
        </span>
        <i className="icon fas fa-download" />
      </a>
      {/* header sidebar */}
      <div className="header-sidebar">
        {/* top menu */}
        <div className="top-menu">
          <div className="top-menu-nav">
            <div className="menu-topmenu-container">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
