import React, { useState } from "react";
// import "./styles.css";

const FromImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const openTab = (evt, tabName) => {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  return (
    <div className="fromImage-main">
      <div className="fromimagew">
        <div className="tab">
          <button
            className="tablinks active"
            onClick={(event) => openTab(event, "women")}
          >
            Women
          </button>
          <button
            className="tablinks"
            onClick={(event) => openTab(event, "men")}
          >
            Men
          </button>
          <button
            className="tablinks"
            onClick={(event) => openTab(event, "kids")}
          >
            Kids
          </button>
          <button
            className="tablinks"
            onClick={(event) => openTab(event, "pets")}
          >
            Pets
          </button>
          <div id="women" className="tabcontent" style={{ display: "block" }}>
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/woman/0.png"
              alt="image 1"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/woman/1.png"
              alt="image 2"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/woman/2.png"
              alt="image 3"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/woman/3.png"
              alt="image 4"
            />
          </div>
          <div id="men" className="tabcontent">
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/man/0.png"
              alt="image 5"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/man/1.png"
              alt="image 6"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/man/2.png"
              alt="image 7"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/man/3.png"
              alt="image 8"
            />
          </div>
          <div id="kids" className="tabcontent">
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/girls/0.png"
              alt="image 9"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/girls/1.png"
              alt="image 1/0"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/girls/2.png"
              alt="image 1/1"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/girls/3.png"
              alt="image 1/2"
            />
          </div>
          <div id="pets" className="tabcontent">
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/pet/0.png"
              alt="image 1/3"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/pet/1.png"
              alt="image 1/4"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/pet/2.png"
              alt="image 1/5"
            />
            <img
              src="https://static.fotor.com/app/features/img/imageToCartoon/pet/3.png"
              alt="image 1/6"
            />
          </div>
        </div>

        <div>
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

export default FromImage;
