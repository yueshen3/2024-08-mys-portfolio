import {dataInfo} from './mysData.js';

const url = new URL(location.href);
const projectID = url.searchParams.get("projectID");
const projectName = url.searchParams.get("projectName");
console.log(dataInfo);

const dataInfoIndex = dataInfo.findIndex((e) => Number(e.projectID.replaceAll(" ", "")) 
== Number(projectID.replaceAll(" ", "")));
const projectDescription = dataInfo[dataInfoIndex].discription;
// const projectDiscipline = dataInfo[dataInfoIndex].discipline;
const projectArea = dataInfo[dataInfoIndex]["gross floor area_sqf"];
console.log(projectDescription);
console.log(projectArea);


let htmlIntroCard = `<img src="image/${projectID.replaceAll(' ', '')}_0000.png">
<ul>
<li>Project Code : ${projectID}</li>
<li>Project Name : ${projectName}</li>
<li>Project Description : ${projectDescription}</li>
</ul>
`;

document.querySelector('.wrapper-project-card').innerHTML = htmlIntroCard;








