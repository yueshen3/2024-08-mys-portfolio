import {curatedProjectID} from "./mysData.js";
import {curatedProjectName} from "./mysData.js";

let htmlProjectCard = [];
curatedProjectID.forEach((e, i) => {
  htmlProjectCard += `<a href="mys-project-intro.html?projectID=${e}
  &projectName=${curatedProjectName[i]}">
  <img src="image/${e.replaceAll(" ", "")}_0000.png">
  <p>${curatedProjectID[i]}</p>
  <p>${curatedProjectName[i]}</p>
  </a>`;
})
document.querySelector(".wrapper-projects").innerHTML = htmlProjectCard;








