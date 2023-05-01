import { Grid, Typography, Box, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Likes from "./Likes";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function SidebarLayout({ children }) {
  const [gallery, setGallery] = useState(false);
  const [likes, setLikes] = useState(false);
  const [fromText, setFromText] = useState(true);

  const [toggleStyle, setStyleToggle] = useState(false);
  const [toggleDetails, setDetailsToggle] = useState(false);
  const [toggleRatio, setRatioToggle] = useState(false);

  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [selectedDetails, setSelectedDetails] = useState(-1);
  const [selectedRatio, setSelectedRatio] = useState(-1);

  const toggleStyleFunction = () => {
    setStyleToggle(!toggleStyle);
  };
  const toggleDetailsFunction = () => {
    setDetailsToggle(!toggleDetails);
  };
  const toggleRatioFunction = () => {
    setRatioToggle(!toggleRatio);
  };

  const handleCardClick = (cardIndex) => {
    setSelectedCardIndex(cardIndex);
  };
  const handleDetailsClick = (cardIndex) => {
    setSelectedDetails(cardIndex);
  };
  const handleRatioClick = (cardIndex) => {
    setSelectedRatio(cardIndex);
  };

  const handleFromTextClick = (item) => {
    setGallery(false);
    setLikes(false);
    setFromText(true);
  };
  const handleGalleryClick = (item) => {
    setGallery(true);
    setLikes(false);
    setFromText(false);
  };
  const handleLikesClick = (item) => {
    setGallery(false);
    setLikes(true);
    setFromText(false);
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

  return (
    <Grid container>
      <Grid item xs={2} style={{ backgroundColor: "#2a2b2f" }}>
        <Box p={2} className="fixPosition">
          <Typography variant="h6" style={{ color: "white" }}></Typography>
          <ul className="list">
            <li
              className="listItem"
              onClick={handleFromTextClick}
              className={`${fromText ? "routeSelected" : "listItem"}`}
            >
              <div className="myLikes">
                From Text {fromText ? <ArrowBackIosIcon /> : ""}
              </div>
            </li>
            <li
              className={`${gallery ? "routeSelected" : "listItem"}`}
              onClick={handleGalleryClick}
            >
              <div className="myLikes">
                Gallery {gallery ? <ArrowBackIosIcon /> : ""}
              </div>
            </li>
            <li
              className={`${likes ? "routeSelected" : "listItem"}`}
              onClick={handleLikesClick}
            >
              {" "}
              <div className="myLikes">
                My Likes {likes ? <ArrowBackIosIcon /> : ""}
              </div>
            </li>
          </ul>
        </Box>
      </Grid>
      {fromText ? (
        <>
          {" "}
          <Grid
            className="fixPosition"
            item
            xs={7}
            style={{ backgroundColor: "black", height: "100vh" }}
          >
            {/* content for main content area */}
            {/* {children} */}
            <div className="cardContent">
              <div className="card cardSize"></div>
              <div className="input">
                <input
                  className="inputt"
                  placeholder="enter text here..."
                ></input>
                <button className="genratebtn">GENERATE</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} style={{ backgroundColor: "#2a2b2f" }}>
            <Box p={2} className="scrollPosition">
              <div className="dropsownmain">
                <div className="container">
                  <div className="mt-3 dropdown" onClick={toggleRatioFunction}>
                    <div className="styles">Aspect Ratio</div>
                  </div>
                  {toggleRatio ? (
                    <div className="cards-style">
                      {cards.map((card, index) => (
                        <div
                          key={index}
                          className={`card ${
                            selectedRatio === index ? "selected" : ""
                          }`}
                          onClick={() => handleRatioClick(index)}
                        >
                          {/* <h3>{card.title}</h3>
                          <p>{card.description}</p> */}
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}

                  {/* ///////////////////////////////////////////////////////////////////// */}
                  <div className="mt-3 dropdown" onClick={toggleStyleFunction}>
                    <div className="styles">Styles</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      class="ai_image_tags_title_open"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3.912L1.282.218a.756.756 0 0 0-1.062 0 .744.744 0 0 0 0 1.056L4.465 5.49l.003.005c.147.146.34.218.532.218a.751.751 0 0 0 .532-.218c.003-.001.003-.003.004-.005l4.245-4.217a.745.745 0 0 0 0-1.056.756.756 0 0 0-1.062 0L5 3.912z"
                      ></path>
                    </svg>
                  </div>
                  {toggleStyle ? (
                    <div className="cards-style">
                      {cards.map((card, index) => (
                        <div
                          key={index}
                          className={`${
                            selectedCardIndex === index
                              ? "Cardselected"
                              : "card"
                          }`}
                          onClick={() => handleCardClick(index)}
                        >
                          <div className="tick">
                            {selectedCardIndex === index ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="28"
                                height="27"
                                viewBox="0 0 28 27"
                                className="ai_image_tag_check"
                              >
                                <g>
                                  <g>
                                    <path
                                      d="M0,0L28,27L28,8C28,3.58172,24.4183,0,20,0L0,0Z"
                                      fill="#62FF93"
                                      fillOpacity="1"
                                    ></path>
                                  </g>
                                  <g>
                                    <path
                                      d="M22.89456,4.189074L17.39636,9.687280000000001L15.10544,7.39701C14.85399,7.144909999999999,14.441172,7.144909999999999,14.189074,7.39701C13.9369755,7.6491,13.9369755,8.06128,14.189074,8.313369999999999L16.93429,11.058589999999999C16.93558,11.05988,16.936230000000002,11.06118,16.93753,11.062470000000001C17.06325,11.18885,17.2298,11.25171,17.39636,11.25171C17.56291,11.25171,17.72882,11.18885,17.85519,11.062470000000001C17.85649,11.06118,17.85713,11.05988,17.85843,11.058589999999999L23.81093,5.10544C24.063000000000002,4.853342,24.063000000000002,4.441172,23.81093,4.189074C23.55883,3.9369755,23.14666,3.9369755,22.89456,4.189074Z"
                                      fillRule="evenodd"
                                      fill="#000000"
                                      fillOpacity="1"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                            ) : (
                              ""
                            )}
                          </div>

                          <img className="imageBorder" src={card.image} />
                          <p className="title">{card.title}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  {/* ///////////////////////////////////////////////////////////////////// */}

                  <div
                    className="mt-3 dropdown"
                    onClick={toggleDetailsFunction}
                  >
                    <div className="styles">Details</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      class="ai_image_tags_title_open"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3.912L1.282.218a.756.756 0 0 0-1.062 0 .744.744 0 0 0 0 1.056L4.465 5.49l.003.005c.147.146.34.218.532.218a.751.751 0 0 0 .532-.218c.003-.001.003-.003.004-.005l4.245-4.217a.745.745 0 0 0 0-1.056.756.756 0 0 0-1.062 0L5 3.912z"
                      ></path>
                    </svg>
                  </div>
                  {toggleDetails ? (
                    <div className="cards-style">
                      {cards.map((card, index) => (
                        <div
                          key={index}
                          className={`card ${
                            selectedDetails === index ? "selected" : ""
                          }`}
                          onClick={() => handleDetailsClick(index)}
                        >
                          <h3>{card.title}</h3>
                          <p>{card.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  {/* /////////////////////////////////////////////////////////////////////// */}
                </div>
              </div>
            </Box>
          </Grid>
        </>
      ) : (
        ""
      )}

      {gallery ? (
        <Grid
          item
          xs={10}
          style={{ backgroundColor: "black", height: "100vh" }}
        >
          <div>
            <Gallery />
          </div>
        </Grid>
      ) : (
        ""
      )}

      {likes ? (
        <Grid
          item
          xs={10}
          style={{ backgroundColor: "black", height: "100vh" }}
        >
          <div>
            <Likes />
          </div>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
}

export default SidebarLayout;
