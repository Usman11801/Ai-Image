import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import SidebarLayout from "./components/LeftSideBar";
import { Header } from "./Pages/Header";
import SideBar from "./Pages/SideBar";

function App() {
  return (
    <>
      <div className="appCreate">
        <BrowserRouter>
          <Navbar />
          <Header />
        </BrowserRouter>{" "}
      </div>
    </>
  );
}

export default App;
