import {dataInfo} from './mysData.js';

const url = new URL(location.href);
const projectID = url.searchParams.get("projectID");
const projectName = url.searchParams.get("projectName");
console.log(dataInfo);

const dataInfoIndex = dataInfo.findIndex((e) => Number(e.projectID.replaceAll(" ", "")) 
== Number(projectID.replaceAll(" ", "")));
const projectLocation = dataInfo[dataInfoIndex]["location"];
const projectDiscipline = dataInfo[dataInfoIndex]["discipline"];
const projectGArea = dataInfo[dataInfoIndex]["gross floor area_sqf"];
const projectProgram = dataInfo[dataInfoIndex]["programs"];
const projectDescription = dataInfo[dataInfoIndex].discription;
// console.log(projectDescription);


let htmlIntroCard = `<img src="image/${projectID.replaceAll(' ', '')}_0000.png">
<table><tbody>
<tr><th class="first-row">Code</th><td class="first-row">${projectID}</td></tr>
<tr><th>Name</th><td>${projectName}</td></tr>
<tr><th>Location</th><td>${projectLocation}</td></tr>
<tr><th>Discipline</th><td>${projectDiscipline}</td></tr>
<tr><th>Gross Area</th><td>${Intl.NumberFormat('en-US').format(projectGArea)} sf</td></tr>
<tr><th>Program</th><td>${projectProgram}</td></tr>
<tr><th>Description</th><td>${projectDescription}</td></tr>
</table></tbody>
`;

document.querySelector('.wrapper-project-card').innerHTML = htmlIntroCard;








