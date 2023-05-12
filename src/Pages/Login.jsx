import { useState } from "react";
// import Link from "next/link";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  const [sign, setSign] = useState(false);

  const [on, setOn] = useState(false);
  const toggle = () => {
    console.log("Toggle", on);
    setOn(!on);
  };
  const isLogin = () => {
    setSign(!sign);
  };

  function handleSubmit(values, { setSubmitting }) {
    console.log("values", values);

    fetch("http://127.0.0.1:5000/accounts/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Login successful
          console.log("Login successful");
          response.json().then((data) => {
            // Save the response data in the local storage
            // localStorage.setItem("userData", JSON.stringify(data));
            console.log(data);
            localStorage.setItem("id", JSON.stringify(data.id));
            localStorage.setItem("access", JSON.stringify(data.access));
            localStorage.setItem("email", JSON.stringify(data.email));
            localStorage.setItem("refresh", JSON.stringify(data.refresh));
            localStorage.setItem("token", JSON.stringify(data.token));
            // Close the popup
            setOn(false);
            window.location.reload();
          });
        } else {
          // Login failed
          console.error("Login failed");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
    // const id = localStorage.getItem("userData");
    // console.log("id==========", id);
  }

  return (
    <div
      className=" h-screen flex items-center justify-center"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="bg-white p-8 rounded-lg"
        style={{
          width: "100%",
          height: "100%",
          padding: "2rem",
          marginTop: "2%",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Signin</h2>
        <Formik
          initialValues={{ firstName: "", password: "", email: "" }}
          validationSchema={Yup.object({
            // firstName: Yup.string()
            //   .max(50, "Must be 50 characters or less")
            //   .min(5, "Must be 5 characters or greater")
            //   .required("First name is required"),
            password: Yup.string()
              .max(50, "Must be 50 characters or less")
              .min(5, "Must be 5 characters or greater")
              .required("last name is required"),
            email: Yup.string()
              .email("Invalid email address")
              //   .max(20, "Must be 50 characters or less")
              //   .min(15, "Must be 5 characters or greater")
              .required("Email is required"),
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
                    Email
                  </label>
                  <Field
                    placeholder=" please enter email..."
                    type="email"
                    id="email"
                    name="email"
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
                  <ErrorMessage name="email" className="text-red-500" />
                </p>
              </div>
              {/* ////////////////////////////////////////// */}
              <div className="mb-4">
                <div className="flex-style">
                  <label
                    htmlFor="password"
                    className="block font-bold mb-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Password
                  </label>
                  <Field
                    placeholder=" please enter password..."
                    type="password"
                    id="password"
                    name="password"
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
                  <ErrorMessage name="password" className="text-red-500" />
                </p>
              </div>
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
                  {isSubmitting ? "Submitting..." : "Signin"}
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
  );
}

export default Login;
