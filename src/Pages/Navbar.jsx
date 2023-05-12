import React, { useState, useEffect } from "react";
import Logo from "../Assets/Logo.png";
import LogoName from "../Assets/logoName.png";
import { NavLink } from "react-router-dom";
import Popup from "./Popup";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isSignBtn, setIsSignBtn] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleToggle = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    const access = localStorage.getItem("access");
    setIsSignBtn(!!access);

    const handleStorageChange = (event) => {
      if (event.key === "access") {
        setIsSignBtn(!!event.newValue);
      }
      if (event.key === "accessChanged") {
        // Add this condition
        setIsSignBtn(false);
        localStorage.removeItem("accessChanged");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const signIn = () => {
    localStorage.setItem("access", "true");
    setIsSignBtn(true);
  };

  const signOut = () => {
    localStorage.clear();
    setIsSignBtn(false);
    setShowOptions(false);
  };

  return (
    <>
      <div className="NavBar" style={{ display: "flex" }}>
        <div className="main-logos">
          <div className="logo-div">
            <img className="img-logo" src={Logo} />
          </div>
          <div className="logo-name-div">
            <img className="img-name-logo" src={LogoName} />
          </div>
        </div>
        <div
          className="toggle-div"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "2%",
          }}
        >
          {isSignBtn ? (
            <button
              className="toggle-button-account"
              onClick={handleToggle}
            ></button>
          ) : (
            <button className="popupBtn" onClick={togglePopup}>
              Signin
            </button>
          )}
          {showOptions && (
            <div className="options">
              <ul>
                <li className="link-li" onClick={() => setShowOptions(false)}>
                  <NavLink
                    className="navLinkStyle"
                    to="/accounts"
                    activeClassName="active-link"
                  >
                    Accounts
                  </NavLink>
                </li>
                <li className="link-li2" onClick={signOut}>
                  <div className="link-li">
                    <p className="navLinkStyle">Sign Out</p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {showPopup && <Popup togglePopup={togglePopup} signIn={signIn} />}
    </>
  );
};

export default Navbar;
