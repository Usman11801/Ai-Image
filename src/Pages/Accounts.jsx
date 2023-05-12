import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tab = ({ activeTab, label, onClick }) => (
  <button
    // style={{ background: "none", border: "none" }}
    className={`${activeTab === label ? "active-label" : "Not-active-label"} `}
    onClick={() => onClick(label)}
  >
    {label}
  </button>
);

const AccountInfo = () => {
  const storeToken = localStorage.getItem("token");
  const token = storeToken?.substring(1, storeToken.length - 1);

  const [email, setEmail] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:5000/accounts/profile/", {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail(data);
        console.log("email", email.email);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log("data", data);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "90vh",
          backgroundColor: "white",
          marginTop: "2%",
          padding: "2%",
        }}
      >
        <p
          style={{
            color: "black",
            textAlign: "start",
            fontSize: "26px",
            fontWeight: "700",
            color: "#1a1b1c",
            lineHeight: "28px",
            marginBottom: "5%",
          }}
        >
          Personal Info
        </p>
        <p className="heading-form">nickname</p>
        <p className="inout-form">{email.first_name}</p>
        <div className="devider"></div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="heading-form">Email Address</p>
            <p className="inout-form">{email.email}</p>
          </div>
          <div style={{ height: "3rem", display: "flex", gap: "10px" }}>
            <div className="box">Modify an Email</div>
          </div>
        </div>
        <div className="devider"></div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="heading-form">Platform</p>
            <img
              className="inout-img"
              src="https://www.fotor.com/_nuxt/img/7c6e853.png"
            ></img>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "3rem", display: "flex", gap: "10px" }}>
              <div className="box">Bind</div>
              <div className="box">Unbind</div>
            </div>
          </div>
        </div>
        {/* <p className="inout-form">usman11801@gmail.com</p> */}
        <div className="devider"></div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="heading-form">Password</p>
            <p className="inout-form">*************************</p>
          </div>
          <div style={{ height: "3rem", display: "flex", gap: "10px" }}>
            <div className="box">Reset the Password</div>
          </div>
        </div>
        <div className="devider"></div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="heading-form">Gender</p>{" "}
          </div>
          <div style={{ height: "3rem", display: "flex", gap: "10px" }}>
            <div>
              <div style={{ display: "flex", gap: "20px" }}>
                <label className="labelReplace">
                  <input
                    type="radio"
                    value="male"
                    // checked="male"
                    // onChange={handleGenderChange}
                  />
                  Male
                </label>
                <label className="labelReplace">
                  <input
                    type="radio"
                    value="female"
                    // checked="female"
                    // onChange={handleGenderChange}
                  />
                  Female
                </label>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="devider"></div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="heading-form">What do you want to use Fotor for?</p>
            <p className="inout-form">Not selected</p>
          </div>
          <div style={{ height: "3rem", display: "flex", gap: "10px" }}>
            <div className="box">Select</div>
          </div>
        </div>
        <div className="devider"></div>
      </div>
      <div
        style={{
          width: "50%",
          height: "90vh",
          backgroundColor: "#eaeaeb",
          marginTop: "2%",
          padding: "2%",
        }}
      >
        <div style={{ marginTop: "-40px", display: "flex", gap: "13px" }}>
          <input
            type="checkbox"
            id="myCheckbox"
            name="myCheckbox"
            // value="isChecked"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
          />
          <label className="labelReplace" htmlFor="myCheckbox">
            Check this box
          </label>
        </div>
        <p style={{ margin: "0px", paddingTop: "10px", fontSize: "1.2rem" }}>
          Keep me informed about new features, tips and tutorials, Fotor news
          and updates by email.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              width: "180px",
              height: "50px",
              background: "#2c7dfa",
              color: "white",
              border: "none",
              fontSize: "20px",
              borderRadius: "10px",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const storeToken = localStorage.getItem("token");
  const token = storeToken?.substring(1, storeToken.length - 1);
  const [credit, setCredit] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  function handleSubmit(values, { setSubmitting }) {
    console.log("values", values);
    // const email = localStorage.getItem("email");
    // const id = localStorage.getItem("id");
    const storeToken = localStorage.getItem("token");
    const token = storeToken.substring(1, storeToken.length - 1);
    fetch("http://127.0.0.1:5000/accounts/buy_credit/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num_credits: values?.Credits,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login successful");
          response.json().then((data) => {
            console.log(data);
          });
          toast.success("Request Sent Successfully!");
        } else {
          console.error("Submit Credits Failed");
          toast.error("Network Error!");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/accounts/profile/", {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCredit(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div
      style={{
        paddingTop: "2%",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // justifyContent: "center",
      }}
    >
      <ToastContainer />

      <div
        style={{
          width: "50%",
          height: "28vh",
          backgroundColor: "white",
          padding: "2%",
          marginTop: "0%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="myCredits">My Credits</p>
          <p className="aboutCredits">About Credits</p>
        </div>
        <div className="devider"></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100px",
          }}
        >
          <p className="noCreditsYet">
            <span style={{ color: "black", fontWeight: 800 }}>
              {credit?.credit}
            </span>
            {"  "}
            credits
          </p>{" "}
          <div>
            <p className="buyCredits" onClick={handleClick}>
              Buy Credits
            </p>
            {showPopup && (
              <div className="popup">
                <p className="cross" onClick={() => setShowPopup(false)}>
                  X
                </p>
                <div>
                  <Formik
                    initialValues={{ Credits: "" }}
                    validationSchema={Yup.object({
                      Credits: Yup.string().required("Credits is required"),
                    })}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="mb-4">
                          <div className="flex-style">
                            <label
                              htmlFor="email"
                              style={{ fontSize: "1.2rem" }}
                              className="block font-bold mb-2"
                            >
                              Enter credits
                            </label>
                            <Field
                              placeholder=" please enter credits..."
                              type="number"
                              id="Credits"
                              name="Credits"
                              className="border p-2 rounded-lg w-full"
                            />
                          </div>

                          <p
                            className="text-red-500"
                            style={{
                              color: "red",
                              fontSize: "1.1rem",
                              fontWeight: "500",
                            }}
                          >
                            <ErrorMessage
                              name="Credits"
                              className="text-red-500"
                            />
                          </p>
                        </div>
                        {/* ////////////////////////////////////////// */}
                        {/* //////////////////////////////////////////////// */}
                        <div
                        //   style={{ display: "flex", justifyContent: "center" }}
                        >
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className=""
                            style={{
                              background: "rgb(72, 72, 237)",
                              color: "white",
                              borderRadius: "7px",
                              padding: "10px 39px",
                              border: "none",
                            }}
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                          {/* <>
                  <label className="switch">
                    <input type="checkbox" checked={on} onChange={toggle} />
                    <span className="slider round">
                      {on ? (
                        <span
                          style={{
                            color: "white",
                            margin: "0px",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            height: "100%",
                            paddingLeft: "7%",
                          }}
                        >
                          On
                        </span>
                      ) : (
                        <span
                          style={{
                            color: "black",
                            margin: "0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                            height: "100%",
                            paddingRight: "7%",
                          }}
                        >
                          Off
                        </span>
                      )}
                    </span>
                  </label>
                </> */}
                        </div>

                        <div></div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            )}
          </div>{" "}
        </div>
        <div className="devider"></div>
      </div>
      {/* ////////////////////////////////////////////////// */}
      <div
        style={{
          width: "50%",
          height: "28vh",
          backgroundColor: "white",
          padding: "2%",
          marginTop: "3%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <p className="validCredits">Valid Credits</p>
            <p className="InvalidCredits">Invalid Credits</p>
          </div>

          {/* <p className="aboutCredits">About Credits</p> */}
        </div>
        <div className="devider"></div>

        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <p className="noCreditsYet">
            <span style={{ color: "black", fontWeight: 800 }}>
              {credit?.credit}
            </span>
            {"  "}
            credits
          </p>
          {/* <p className="aboutCredits">Buy Credits</p> */}
        </div>
        <div className="devider"></div>
      </div>
      {/* //////////////////////////////////////////////// */}
    </div>
  );
};

const Accounts = () => {
  const [activeTab, setActiveTab] = useState("Account Info");

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <navBar />
      <div className="bg-gray-100 rounded-t-lg">
        <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "15px" }}>
          <div
            className="flex justify-center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Tab
              label="Account Info"
              activeTab={activeTab}
              onClick={handleTabClick}
            />
            <Tab
              label="Credits"
              activeTab={activeTab}
              onClick={handleTabClick}
            />
          </div>
        </div>
        <div className="bg-accounts">
          {activeTab === "Account Info" ? <AccountInfo /> : <Settings />}
        </div>
      </div>
    </>
  );
};

export default Accounts;
