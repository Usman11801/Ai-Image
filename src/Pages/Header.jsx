import React from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SideBar from "./SideBar";
import FromImage from "./FromImage";
import Gallery from "../components/Gallery";
// import Favourites from "./Favourites";
import Likes from "../components/Likes";
import Explore from "./Explore";
import Upscale from "./Upscale";
import Accounts from "./Accounts";
import Login from "./Login";

export const Header = () => {
  const headerOptions = [
    {
      id: 1,
      text: "From Text",
      path: "/",
      component: SideBar,
    },
    {
      id: 2,
      text: "From Image",
      path: "/from-image",
      component: FromImage,
    },
    {
      id: 3,
      text: "My Gallery",
      path: "/my-gallery",
      component: Gallery,
    },
    {
      id: 4,
      text: "Favourites",
      path: "/favourites",
      component: Likes,
    },
    {
      id: 5,
      text: "Explore",
      path: "/explore",
      component: Explore,
    },
    {
      id: 6,
      text: "Upscale",
      path: "/upscale",
      component: Upscale,
    },
  ];

  const location = useLocation();

  return (
    <>
      <div className="header-options">
        {headerOptions.map((item) => {
          const isActive = location.pathname === item.path;
          const style = isActive
            ? {
                background:
                  "linear-gradient(to right, rgb(255 132 215) 0%,#84ffeb 100%)",
                fontWeight: "800",
              }
            : null;
          return (
            <div className="header-text-div" key={item.id}>
              <NavLink
                to={item.path}
                className="header-text"
                activeStyle={{ color: "red" }}
                style={style}
              >
                {item.text}
              </NavLink>
            </div>
          );
        })}
      </div>

      <Routes>
        {headerOptions.map((item, index) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/sign-out" element={<Login />} />
      </Routes>
    </>
  );
};
