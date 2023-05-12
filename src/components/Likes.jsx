import React, { useState, useEffect } from "react";
import download from "../Assets/download.png";
import shere from "../Assets/shere.png";
import satrF from "../Assets/starF.png";

function Likes() {
  // const cards = [
  //   {
  //     id: 1,
  //     description: "Description of Card 1",
  //     image:
  //       "http://127.0.0.1:5000/media/Images/generated_images/v1_txt2img_0_INiZMl1.png",
  //   },
  // ];
  const [galleryData, setGalleryData] = useState();

  useEffect(() => {
    const storeToken = localStorage.getItem("token");
    const token = storeToken?.substring(1, storeToken.length - 1);

    fetch("http://127.0.0.1:5000/api/list/like/images/", {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!Array.isArray(galleryData)) {
    return (
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
          Please Login and then try again for Favourites.
        </p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="mainLikes">
        {galleryData?.map((item, index) => (
          <div className="extraDiv2">
            <div className="imgDivM">
              <img className="widthh" src={item.image_url} />
            </div>
            <div className="buttonBit">
              <button className="btnn">
                <img src={satrF} />
              </button>
              <button className="btnn">
                <img src={download} />
              </button>
              <button className="btnn">
                <img src={shere} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Likes;
