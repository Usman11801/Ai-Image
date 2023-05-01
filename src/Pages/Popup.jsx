import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Popup = ({ togglePopup }) => {
  const [isSign, setIsSign] = useState(true);
  const isLogin = () => {
    console.log("isSign", isSign);
    setIsSign(!isSign);
  };
  return (
    <div className="popup">
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button className="closeBtn" onClick={togglePopup}>
          X
        </button>
      </div>
      {isSign ? <Login /> : <SignUp />}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <p style={{ width: "100%", textAlign: "center", color: "black" }}>
          {isSign
            ? "you dont have an account? please"
            : "you have an account? please"}{" "}
          <span className="colorLink" onClick={isLogin}>
            {isSign ? "SignUp" : "SignIn"}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Popup;
