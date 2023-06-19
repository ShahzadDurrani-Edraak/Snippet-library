import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";
import Content from "./Content";
import Single from "./Single";
import AddSnippet from "./Add-snippet";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [content, setContent] = useState("home");

  const changeContentAdd = () => {
    setContent("add");
  };
  const changeContentHome = () => {
    setContent("home");
  };
  //Windows height adjustment
  const fullHeight = () => {
    const elements = document.querySelectorAll(".js-fullheight");

    const setFullHeight = () => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      elements.forEach((element) => {
        element.style.height = windowHeight + "px";
      });
    };
    setFullHeight();
    window.addEventListener("resize", setFullHeight);
  };

  //Keypress Handler
  const handleKeyPress = (event) => {
    if (
      (event.metaKey && event.keyCode === 75) ||
      (event.ctrlKey && event.keyCode === 75)
    ) {
      console.log("done");
      const searchBar = document.getElementById("search");
      searchBar.focus();
      event.preventDefault();
    }
  };

  useEffect(() => {
    // Height function call
    fullHeight();

    const cmd_icons = document.getElementById("search_cmd");
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      cmd_icons.innerHTML = "⌘ k";
    } else {
      cmd_icons.innerHTML = "ctrl + k";
    }
    const searchBar = document.getElementById("search");
    const searchDiv = document.getElementById("inner_form");
    searchBar.addEventListener("focus", function () {
      searchDiv.style.boxShadow = "0px 2px 79px -7px rgba(62,100,255,0.73)";
    });
    searchBar.addEventListener("blur", function () {
      searchDiv.style.boxShadow = "none";
    });
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <div className="wrapper d-flex align-items-stretch js-fullheight">
        <Sidebar onChangeContent={changeContentAdd}></Sidebar>
        {/* Page Content  */}
        <div id="content" className="p-4 p-md-5 col-md-10">
          <NavBar></NavBar>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
