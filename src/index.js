import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//VIDEO CONTAINER RETURNS ARRAY
const videoStartDiv = document.getElementById("video-start");
const videoStartList = videoStartDiv.getElementsByTagName('video');
let startVideo;
const videoEndList = document.getElementById("video-end").getElementsByTagName('video');
let endVideo;
// console.log(videoStartList);
for(let item of videoStartList){
  if (getComputedStyle(item).display === 'block'){    
    startVideo = item;
    // console.log(startVideo);
  }  
}
console.log(videoEndList);
for(let item of videoEndList){
  if(getComputedStyle(item).display === 'block'){
    endVideo = item;
    // console.log(endVideo);
  }
}
startVideo.addEventListener("ended", ChangeVideo);

function ChangeVideo() {  
  startVideo.removeEventListener("ended", ChangeVideo);
  startVideo.classList.toggle("video-hide");
  videoStartDiv.setAttribute('hidden', 'true');
  // endVideo.classList.toggle("video-hide"); //UN-HIDE
  endVideo.classList.toggle("video-show");
  endVideo.play();
  // console.log("DUN VIDEO");
}
// ////////////////////////////////////////////////////////////////////////

const mainContainer = document.getElementsByClassName("main-container")[0];
window.addEventListener("load", function (event) {
  console.log("page is fully loaded");
  mainContainer.classList.add("start-transition");
});

//REACT JSX ACTION
const domContainer = document.getElementById("root");
//
ReactDOM.render(<App />, domContainer);
