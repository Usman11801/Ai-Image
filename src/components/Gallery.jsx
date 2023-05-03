import React, { useEffect, useState } from "react";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import gallery1 from "../Assets/galery1.png";
import gallery2 from "../Assets/gallery2.png";
import gallery3 from "../Assets/gallery3.png";
import gallery4 from "../Assets/gallery4.png";

import download from "../Assets/download.png";
import shere from "../Assets/shere.png";
import satrF from "../Assets/starF.png";

function Gallery() {
  const cards = [
    { id: 1, description: "Description of Card 1", image: gallery1 },
    { id: 2, description: "Description of Card 2", image: gallery2 },
    { id: 3, description: "Description of Card 3", image: gallery3 },
    { id: 4, description: "Description of Card 4", image: gallery4 },
  ];
  const [galleryData, setGalleryData] = useState();

  function addFavourite(id) {
    fetch(`http://127.0.0.1:5000/api/images/like/${id}/`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    // console.log("id==:", id);
    // fetch(`http://127.0.0.1:5000/api/images/like/${id}/`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  }
  useEffect(() => {
    // const Token = localStorage.getItem("token");
    const Token = "adb8fc95c69ab0cd72e9cb332ba24674a2b2c2ef";
    console.log("tokentoken token:", Token);
    fetch("http://127.0.0.1:5000/api/gallery/images/", {
      headers: {
        Authorization: `Bearer ${Token}`,
        // "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGalleryData(data);
        console.log("galleryData,", data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="">
      <div className="mainGallery">
        {cards.map((item, index) => (
          <div className="extraDiv">
            <div className="imgDivM">
              <img className="widthh" src={item.image} />
            </div>
            <div className="buttonBit">
              <button
                className="btnn"
                onClick={() => {
                  addFavourite(item.id);
                }}
              >
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

export default Gallery;
