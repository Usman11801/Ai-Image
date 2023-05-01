import React, { useState, useEffect } from "react";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";
import download from "../Assets/download.png";
import shere from "../Assets/shere.png";
import satrF from "../Assets/starF.png";

import gallery1 from "../Assets/galery1.png";
import gallery2 from "../Assets/gallery2.png";
import gallery3 from "../Assets/gallery3.png";
import gallery4 from "../Assets/gallery4.png";
// import { useState } from "react";

function Likes() {
  const cards = [
    { id: 1, description: "Description of Card 1", image: gallery1 },
    { id: 2, description: "Description of Card 2", image: gallery2 },
  ];
  const [galleryData, setGalleryData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/gallery/images/")
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
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
            {/* <div className="cards"> </div> */}
            <div className="buttonBit">
              <button
                className="btnn"
                // style={{ color: "white", border: "1px solid white" }}
              >
                <img src={satrF} />
              </button>
              <button
                className="btnn"
                // style={{ color: "white", border: "1px solid white" }}
              >
                <img src={download} />
              </button>
              <button
                className="btnn"
                // style={{ color: "white", border: "1px solid white" }}
              >
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
