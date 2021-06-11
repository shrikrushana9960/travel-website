import React, { useState, useEffect } from "react";

import { Link,useHistory } from "react-router-dom";
import Button from "./Button";
import "./NavBar.css";
import "./Footer.css"


function Navbar() {
   const history = useHistory();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [search,setSearch]=useState('Tranding');
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const handlerEnter=(event)=>{
    if(event.key === 'Enter')
    {
      console.log(search);
      setSearch("");
      history.push(`/services/${search}`);
setClick(false);
    }
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Movies
            <i className="far fa-play-circle" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div className={click ? "nav-input" : "nav-links"}>
                <input
                  className="footer-input"
                  name="email"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  onKeyDown={handlerEnter}
                  type="text"
                  placeholder="Search Movie"
                />
              </div>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Actor
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button path="/sign-up" buttonStyle="btn--outline">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
