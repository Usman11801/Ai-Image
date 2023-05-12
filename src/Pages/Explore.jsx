import React from "react";
import Upcomming from "./Upcomming";

const Explore = () => {
  return (
    <>
      {/* <Upcomming /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <p
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            // alignItems: "center",
            color: "white",
            paddingBottom: "15rem",
          }}
        >
          Upcoming
        </p>
      </div>
    </>
  );
};

export default Explore;
