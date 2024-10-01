import {dataProjectID} from './mysData.js';

let listImg = '';
dataProjectID.forEach((e, i) => {
  listImg += `<a href="mys-project-intro.html?projectID=${e}">
  <img src="image/${e.replaceAll(' ', '')}_0000.png"></a>`;
})
document.querySelector('.wrapper-projects').innerHTML = listImg;








