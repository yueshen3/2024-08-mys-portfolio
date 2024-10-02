import {dataProjects} from './mysData.js';
import {dataDates} from './mysData.js';
import {dataStartYear} from './mysData.js';
import {dataStartMonth} from './mysData.js';
import {dataScalerUnit} from './mysData.js';


const groupDataDates = Object.groupBy(dataDates, ({ projectID }) => projectID);
const arrayGroupDataDates = Object.keys(groupDataDates).map((e) => [e, groupDataDates[e]]);
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

let modifiedDataProjects = dataProjects;
modifiedDataProjects.forEach((e, i) => {
  Object.defineProperties (e, {'startPoint' : {value: levelB[i][0] * dataScalerUnit}})
  Object.defineProperties (e, {'endPoint' : {value: dataScalerUnit * (Math.max(...levelB[i]) + 1)}})
})
// console.log(modifiedDataProjects);

let htmlProjectName = '';
let htmlProjectSvg = '';
for (let e of modifiedDataProjects) {
  htmlProjectName += `<li class="project-name-li">${e['projectName']}</li>`;
  htmlProjectSvg += `<svg height="10" class="project-svg-li">
  <line x1="${e['startPoint']}" y1="12" x2="${e['endPoint']}" y2="12"></svg>`;
}

document.querySelector('.projects-name-ul').innerHTML = htmlProjectName;
document.querySelector('.projects-svg-ul').innerHTML = htmlProjectSvg;
