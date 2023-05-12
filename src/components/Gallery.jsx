import React, { useEffect, useState, useRef } from "react";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import download from "../Assets/download.png";
import shere from "../Assets/shere.png";
import satrF from "../Assets/starF.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Gallery() {
  const imageRef = useRef(null);

  const [galleryData, setGalleryData] = useState([]);

  function addFavourite(Iid) {
    console.log("Iid", Iid);
    toast.success("Added to favourite!");
    const id = localStorage.getItem("id");
    const storeToken = localStorage.getItem("token");
    const token = storeToken.substring(1, storeToken.length - 1);

    const formData = new FormData();
    // formData.append("image", image);
    const data = {
      image_id: Iid,
    };
    fetch(`http://127.0.0.1:5000/api/images/like/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  const handleDownload = (saveImage) => {
    if (imageRef.current && imageRef.current.nodeName === "IMG") {
      const link = document.createElement("a");
      link.download = "my-image.png"; // specify the filename

      const newImage = new Image();
      newImage.crossOrigin = "anonymous";
      newImage.src = saveImage;
      newImage.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = newImage.width;
        canvas.height = newImage.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(newImage, 0, 0);

        link.href = canvas.toDataURL(); // convert the canvas to data URL and set it as the href
        link.click(); // trigger the download
      };
    }
  };

  useEffect(() => {
    const storeToken = localStorage.getItem("token");
    const token = storeToken?.substring(1, storeToken.length - 1);

    fetch("http://127.0.0.1:5000/api/gallery/images/", {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGalleryData(data);
        console.log("galleryData,", data);
      })
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
          Please Login and then try again for Gallery.
        </p>
      </div>
    );
  }
  return (
    <div className="">
      <ToastContainer />
      <div className="mainGallery">
        {galleryData?.map((item, index) => (
          <div className="extraDiv">
            <div className="imgDivM">
              <img className="widthh" ref={imageRef} src={item?.image} />
            </div>
            <div className="buttonBit">
              <button
                className="btnn"
                onClick={() => {
                  addFavourite(item?.id);
                }}
              >
                <img src={satrF} />
              </button>
              <button className="btnn">
                <img
                  // onClick={handleDownload}
                  src={download}
                  onClick={() => {
                    handleDownload(item?.image);
                  }}
                />
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
