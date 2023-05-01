import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import "../index.css";
import center from "../Assets/centerIMG.png";
import center2 from "../Assets/center2.png";
import errowDown from "../Assets/errowDown.png";
import SliderComponent from "./SliderComponent";
import { Slider } from "antd";

const marks = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
};

const SideBar = () => {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(!on);
  };
  const [value, setValue] = useState(1);

  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [selectedDetails, setSelectedDetails] = useState([]);
  const [selectedRatio, setSelectedRatio] = useState(-1);

  const [toggleStyle, setStyleToggle] = useState(false);
  const [toggleDetails, setDetailsToggle] = useState(false);
  const [lightEffects, setLightEffects] = useState(false);
  const [composition, setComposition] = useState(false);

  const [toggleRatio, setRatioToggle] = useState(false);

  const [selectedDot, setSelectedDot] = useState(1);

  const [numberImages, setNumberImages] = useState(1);
  const [ratio, setRatio] = useState();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleChange = (newValue) => {
    console.log("newValue:", newValue);
    // if (newValue === 1 || newValue === 2 || newValue === 3 || newValue === 4) {
    // }
    setNumberImages(newValue);
    console.log("value==", numberImages);
  };

  const handleDotClick = (dotNumber) => {
    setSelectedDot(dotNumber);
  };

  const toggleStyleFunction = () => {
    setStyleToggle(!toggleStyle);
  };
  const toggleDetailsFunction = () => {
    setDetailsToggle(!toggleDetails);
  };
  const toggleEffectsFunction = () => {
    setLightEffects(!lightEffects);
  };
  const toggleCompositionFunction = () => {
    setComposition(!composition);
  };
  const toggleRatioFunction = () => {
    setRatioToggle(!toggleRatio);
  };
  const handleRatioClick = (card, cardIndex) => {
    // console.log("card", card);
    setSelectedRatio(cardIndex);
    setRatio(card);
    console.log("ratio:", ratio);
  };

  const handleCardClick = (cardIndex) => {
    setSelectedCardIndex(cardIndex);
  };
  const [styleCard, setStyleCard] = useState();

  const handleCardStyleClick = (card, cardIndex) => {
    setStyleCard(card);
    console.log("card", cardIndex);
    setSelectedCardIndex(cardIndex);
  };
  const handleDetailsClick = (cardIndex) => {
    if (selectedDetails.includes(cardIndex)) {
      setSelectedDetails(
        selectedDetails.filter((index) => index !== cardIndex)
      );
    } else {
      setSelectedDetails([...selectedDetails, cardIndex]);
    }
  };
  // toggleRatio

  const styles = {
    sidebar: {
      height: "auto",
      backgroundColor: "black",
      padding: "10px",
      borderRadius: "none",
    },
    content: {
      height: "200vh",
      backgroundColor: "black",
      padding: "10px",
      borderRadius: "none",
    },
  };
  const cards = [
    {
      title: "Card 1",
      description: "Description of Card 1",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/tt8qogmtefam.png",
    },
    {
      title: "Card 2",
      description: "Description of Card 2",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/iqbl04mo6r0s.jpg",
    },
    {
      title: "Card 3",
      description: "Description of Card 3",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/en7tjm0hmpnx.png",
    },

    {
      title: "Card 4",
      description: "Description of Card 1",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/13gvkimxgn9d.png",
    },
    {
      title: "Card 5",
      description: "Description of Card 2",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/1psbxzaonp1c.jpg",
    },
    {
      title: "Card 6",
      description: "Description of Card 3",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/p9i0r6ft2qfp.png",
    },

    {
      title: "Card 7",
      description: "Description of Card 1",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/qnqtaw2me2o3.jpg",
    },
    {
      title: "Card 8",
      description: "Description of Card 2",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/667doe5pzpro.png",
    },
    {
      title: "Card 9",
      description: "Description of Card 3",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/rafi0sjdv5qp.png",
    },
    {
      title: "Card 10",
      description: "Description of Card 3",
      image:
        "https://pub-static.fotor.com/assets/aiImageConfig/template/rafi0sjdv5qp.png",
    },
    {
      title: "Card 11",
      description: "Description of Card 3",
      image:
        "https://pub-static.fotor.com/assets/text_to_image/picture_type/1-4.png",
    },
  ];

  const Aspects = [
    {
      id: 1,
      title: "1:1",
    },
    {
      id: 2,
      title: "3:2",
    },
    {
      id: 3,
      title: "5:5",
    },
  ];

  const DetailsData = [
    {
      id: 1,
      title: "Random",
    },
    {
      id: 2,
      title: "Perfect Portrait",
    },
    {
      id: 3,
      title: "Super-Detailed",
    },
    {
      id: 4,
      title: "Ultra-realistic",
    },
    {
      id: 5,
      title: "studio Quality",
    },
    {
      id: 6,
      title: "8k / HD",
    },

    {
      id: 7,
      title: "High Contrast",
    },
    {
      id: 8,
      title: "Realistic shadows",
    },
    {
      id: 9,
      title: "Smooth Rendering",
    },
    {
      id: 10,
      title: "Sharp Focus",
    },
  ];
  const LightEffects = [
    {
      id: 1,
      title: "Random",
    },
    {
      id: 2,
      title: "Studio Lighting",
    },
    {
      id: 3,
      title: "Octane Render",
    },
    {
      id: 4,
      title: "Movie Lighting",
    },
    {
      id: 5,
      title: "Volume Lighting",
    },
    {
      id: 6,
      title: "General Lighting",
    },

    {
      id: 7,
      title: "Soft Lighting",
    },
    {
      id: 8,
      title: "Ray Tracing",
    },
    {
      id: 9,
      title: "Global Lighting",
    },
  ];
  const Compositions = [
    {
      id: 1,
      title: "Large Aperture",
    },
    {
      id: 2,
      title: "Wide Angle",
    },
    {
      id: 3,
      title: "Triangulation",
    },
    {
      id: 4,
      title: "Gaming",
    },
    {
      id: 5,
      title: "Golden Ratio",
    },
    {
      id: 6,
      title: "Macro",
    },
  ];
  const clickGenerate = () => {
    console.log("numberImages", numberImages);
    console.log("ratio", ratio);
    console.log("styleCard", styleCard);
    console.log("inputValue", inputValue);

    const data = {
      num_images: numberImages,
      ratio: ratio.title,
      style: styleCard.title,
      // text_input: inputValue,
      text_input: "Flying car",

      negative_input: "red",
    };

    fetch("http://127.0.0.1:8002/api/generate/images/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <Grid container>
      <Grid item xs={3} style={{ backgroundColor: "black" }}>
        {/* //Side Bar */}
        <Paper style={styles.sidebar} className="mainGrid">
          <div className="flex">
            <div className="MainDiv">
              {/* ////////// */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "15px 19px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#B6EEF5",
                      fontSize: "1.2rem",
                      fontFamily: "Tomorrow",
                      fontStyle: "italic",
                    }}
                  >
                    Advanced Setting
                  </p>
                </div>
                <div>
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
                            color: "white",
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
                </div>
              </div>
              {/* ////////////////// */}
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "90%" }}>
                    <p
                      style={{
                        margin: "0px",
                        color: "#b6eef5",
                        fontFamily: "Tomorrow",
                        fontStyle: "italic",
                        fontSize: "1.2rem",
                      }}
                    >
                      Number of images
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "90%" }}>
                    <Slider
                      min={1}
                      max={4}
                      marks={marks}
                      value={numberImages}
                      onChange={handleChange}
                      onAfterChange={handleChange}
                      dotStyle={{
                        border: "none",
                      }}
                      activeDotStyle={{
                        border: "none",
                        color: "blue",
                      }}
                    />
                  </div>
                </div>{" "}
              </div>
              {/* ////////////////////////////// */}
              <div
                className="mt-3 dropdown dropDown-backgound"
                onClick={toggleRatioFunction}
              >
                <div className="styles">Aspect Ratio</div>
                <img className="errowIcone" src={errowDown} />
              </div>
              {toggleRatio ? (
                <div className="cards-style">
                  {Aspects.map((card, index) => (
                    <div
                      key={index}
                      className={`cardStle ${
                        selectedRatio === index ? "selectedd" : ""
                      }`}
                      onClick={() => handleRatioClick(card, index)}
                    >
                      <div className="ratioDiv">
                        <p className="ratio"> {card.title} </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
              <div
                className="mt-3 dropdown dropDown-backgound"
                onClick={toggleStyleFunction}
              >
                <div className="styles">Styles</div>
                <img className="errowIcone" src={errowDown} />
              </div>

              {toggleStyle ? (
                <div className="cards-style">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`${
                        selectedCardIndex === index ? "Cardselected" : "card"
                      }`}
                      onClick={() => handleCardStyleClick(card, index)}
                    >
                      <img className="imageBorder" src={card.image} />
                      <p className="title">{card.title}</p>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {on ? (
                <>
                  <div
                    className="mt-3 dropdown dropDown-backgound"
                    onClick={toggleDetailsFunction}
                  >
                    <div className="styles">Details</div>
                    <img className="errowIcone" src={errowDown} />
                  </div>
                  {toggleDetails ? (
                    <div className="cards-style">
                      {DetailsData.map((card, index) => (
                        <div
                          key={index}
                          className={`detailscard ${
                            selectedDetails.includes(index) ? "yesSelected" : ""
                          }`}
                          onClick={() => handleDetailsClick(index)}
                        >
                          <p className="titleDetails">{card.title}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
              {/* /////////////////////////////////////////// */}
              {on ? (
                <>
                  <div
                    className="mt-3 dropdown dropDown-backgound"
                    onClick={toggleEffectsFunction}
                  >
                    <div className="styles">Light Effects</div>
                    <img className="errowIcone" src={errowDown} />
                  </div>
                  {lightEffects ? (
                    <div className="cards-style">
                      {LightEffects.map((card, index) => (
                        <div
                          className="detailscard"
                          key={index}
                          // className={`${
                          //   selectedCardIndex === index
                          //     ? "Cardselected"
                          //     : "card"
                          // }`}
                          onClick={() => handleCardClick(index)}
                        >
                          {/* <img className="imageBorder" src={card.image} /> */}
                          <p className="titleDetails">{card.title}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
              {/* /////////////////////////////////////////////////////////// */}
              {on ? (
                <>
                  <div
                    className="mt-3 dropdown dropDown-backgound"
                    onClick={toggleCompositionFunction}
                  >
                    <div className="styles">Composition</div>
                    <img className="errowIcone" src={errowDown} />
                  </div>
                  {composition ? (
                    <div className="cards-style">
                      {Compositions.map((card, index) => (
                        <div
                          key={index}
                          className="detailscard"
                          // className={`${
                          //   selectedCardIndex === index
                          //     ? "Cardselected"
                          //     : "card"
                          // }`}
                          onClick={() => handleCardClick(index)}
                        >
                          {/* <img className="imageBorder" src={card.image} /> */}
                          <p className="titleDetails">{card.title}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
              {on ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "90%" }}>
                    <div style={{ paddingLeft: "15%" }}>
                      <p
                        style={{
                          color: "#b6eef5",
                          margin: "0px",
                          marginBottom: "1%",
                          marginTop: "25%",
                          fontSize: "1.2rem",
                          fontFamily: "Tomorrow",
                          fontStyle: "italic",
                        }}
                      >
                        Negative Prompt:
                      </p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      <input
                        style={{
                          height: "8vh",
                          width: "80%",
                          borderRadius: "27px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="sideBorder"></div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper style={styles.content}>
          <div className="Main-Content">
            <div className="flex align-item contentSetting">
              {/* <div className="card cardSize"></div> */}
              <div className="centercards">
                <img src={center} />
                <img src={center2} />
              </div>
              <div className="btns-div">
                <button className="btn-Style">Download</button>
                <button className="btn-Style">Share</button>
                <button className="btn-Style">Mint NFT</button>
                <button className="btn-Style">Upscale</button>
              </div>
            </div>
            <div className="input">
              <input
                className="inputt"
                placeholder="enter text here..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="genratebtn" onClick={clickGenerate}>
                GENERATE
              </button>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SideBar;
