import {dataProjects} from './mysData.js';
import {dataDates} from './mysData.js';
import {dataStartYear} from './mysData.js';
import {dataStartMonth} from './mysData.js';
import {dataScalerUnit} from './mysData.js';


const groupDataDates = Object.groupBy(dataDates, ({ projectID }) => projectID);
const arrayGroupDataDates = Object.keys(groupDataDates).map((e) => [e, groupDataDates[e]]);
// console.log(dataDates);
// console.log(groupDataDates);
// console.log(arrayGroupDataDates);

function getTime (e, i) {
  return e['phaseMonth'].split('/')[i];
}

let levelB = [];
for (let e of arrayGroupDataDates) {
  // let levelAA = e[0];
  let levelAB = [];
  for (let f of e[1]) {
    levelAB.push(Number((getTime(f, 2) - dataStartYear)) * 12 + 
    Number(getTime(f, 0)) - Number(dataStartMonth)); 
  }
  levelB.push(levelAB);
}
// console.log(levelB)


let modifiedDataProjects = dataProjects;
modifiedDataProjects.forEach((e, i) => {
  Object.defineProperties (e, {'startPoint' : {value: levelB[i][0] * dataScalerUnit}})
  Object.defineProperties (e, {'endPoint' : {value: dataScalerUnit * (Math.max(...levelB[i]) + 1)}})
})
console.log(modifiedDataProjects);

const listWidth = document.body.clientWidth;

let htmlProjectName = '';
let htmlProjectSvg = '';
for (let e of modifiedDataProjects) {
  htmlProjectName += `<a href="mys-project-intro.html?projectID=${e["projectID"]}
  &projectName=${e["projectName"]}">
  <li class="project-name-li">${e['projectName']}</li></a>`;
  htmlProjectSvg += `<li class="project-svg-li"><svg width = "${listWidth}px">
  <line x1="${e['startPoint']}" y1="5" x2="${e['endPoint']}" y2="5"></svg></li>`;
}

document.querySelector('.projects-name-ul').innerHTML = htmlProjectName;
document.querySelector('.projects-svg-ul').innerHTML = htmlProjectSvg;

