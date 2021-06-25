import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//VIDEO START
const videoStart = document.getElementById("video-speed");
const videoEnd = document.getElementById("video-end");
videoStart.addEventListener("ended", ChangeVideo);

function ChangeVideo() {
  videoStart.removeEventListener("ended", ChangeVideo);
  videoStart.classList.toggle("video-hide");
  videoStart.classList.toggle("video-show"); //HIDE
  videoEnd.classList.toggle("video-hide"); //UN-HIDE
  videoEnd.classList.toggle("video-show");
  videoEnd.play();
}
// ////////////////////////////////////////////////////////////////////////

const mainContainer = document.getElementsByClassName("main-container")[0];
console.log(mainContainer);
window.addEventListener("load", function (event) {
  console.log("page is fully loaded");
  mainContainer.classList.add("start-transition");
});

//REACT JSX ACTION
const domContainer = document.getElementById("root");
//
ReactDOM.render(<App />, domContainer);
