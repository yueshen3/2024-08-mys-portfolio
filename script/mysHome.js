import {curatedProjectID} from "./mysData.js";
import {curatedProjectName} from "./mysData.js";


function imgSrc (start) {
  return `image/${curatedProjectID[start].replaceAll(' ', '')}_0000.png`
}
let image = document.getElementById("home-gallery");
let anchor = document.getElementById("home-gallery-wrapper");
console.log(anchor);
let imageStart = Math.floor(Math.random()*curatedProjectID.length);
image.src = imgSrc(imageStart);
setInterval(function(){
  if (imageStart < (curatedProjectID.length - 1)){
    imageStart ++;
  } else {
    imageStart = 0;
  }
  image.src = imgSrc(imageStart);
  anchor.href = `mys-project-intro.html?projectID=${curatedProjectID[imageStart]}
  &projectName=${curatedProjectName[imageStart]}`
}, 5000);
