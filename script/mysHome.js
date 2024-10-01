import {dataProjectID} from './mysData.js';

console.log(dataProjectID);
let dataProjectIDsrc = [];
dataProjectID.forEach((e, i) => {
  dataProjectIDsrc.push(`image/${e.replaceAll(' ', '')}_0000.png`);
})
dataProjectIDsrc.toString();
let image = document.getElementById("home-gallery");
let imageStart = Math.floor(Math.random()*dataProjectIDsrc.length);
image.src = dataProjectIDsrc[imageStart];
setInterval(function(){
  if (imageStart < (dataProjectIDsrc.length - 1)){
    imageStart ++;
  } else {
    imageStart = 0;
  }
  image.src = dataProjectIDsrc[imageStart];
}, 5000);

