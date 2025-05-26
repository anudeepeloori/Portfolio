import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpenIcon from "../../Assets/menu-png.png";
import menuCloseIcon from "../../Assets/close-square-png.png";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="nav-logo">Anudeep.dev</h2>
      </div>

      <div className="nav-mobile-icon" onClick={openMenu}>
        <img src={menuOpenIcon} alt="Open Menu" />
      </div>

      <ul className="nav-menu" ref={menuRef}>
        <div className="nav-close-icon" onClick={closeMenu}>
          <img src={menuCloseIcon} alt="Close Menu" />
        </div>

        {links.map((link) => (
          <li key={link.name}>
            <AnchorLink
              className={`anchor-link ${activeLink === link.name.toLowerCase() ? "active" : ""}`}
              offset={50}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name.toLowerCase());
                closeMenu();
              }}
            >
              {link.name}
            </AnchorLink>
            
          </li>
        ))}
        
      </ul>

      <div className="nav-connect desktop-only">
        <AnchorLink className="anchor-link connect-btn" offset={50} href="#contact">
          Contact
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
