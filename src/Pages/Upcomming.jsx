import React, { useState } from "react";
import ullu1 from "../Assets/ullu1.png";
import ullu2 from "../Assets/ullu2.png";
import ullu3 from "../Assets/ullu3.png";
import errowFarward from "../Assets/errowFarwar.png";

const Upcomming = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };
  const cards = [
    { id: 1, image: ullu1 },
    { id: 2, image: errowFarward },
    { id: 3, image: ullu2 },
    { id: 4, image: errowFarward },
    { id: 5, image: ullu3 },
  ];
  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        borderTop: " 1px solid white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        {cards.map((item, index) => {
          return (
            <>
              {item.id === 2 || item.id === 4 ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{ width: "100%", height: "15%" }}
                    key={item.id}
                    src={item.image}
                  />
                </div>
              ) : (
                <img style={{ width: "20%" }} key={item.id} src={item.image} />
              )}
            </>
          );
        })}
      </div>
      <div>
        <div style={{ marginTop: "1.5rem" }}>
          <div
            className="centered-div"
            onClick={() => document.getElementById("gallery-input").click()}
          >
            <button
              className="centered-button"
              // onClick={() => document.getElementById("gallery-input").click()}
            >
              Select Image
            </button>
            <input
              type="file"
              id="gallery-input"
              accept="image/*"
              onChange={handleImageSelect}
              style={{ display: "none" }}
            />
            {selectedImage && (
              <div className="selected-image">
                <img src={selectedImage} alt="Selected" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomming;
