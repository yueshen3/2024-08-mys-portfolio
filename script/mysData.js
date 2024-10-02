import originalProjectsData from '../data/projects.json' with { type: 'json'};
import originalInfoData from '../data/info.json' with { type: 'json'};
import originalDatesData from '../data/dates.json' with { type: 'json'};
import originalPhasesData from '../data/phases.json' with { type: 'json'};

let modifiedProjectID = [];
originalProjectsData.forEach((e, i) => {
  if (e.curated == 'True') {
    modifiedProjectID.push(`${e.projectID}`);
  }
})
export const dataProjectID = modifiedProjectID;

let fullProjectName = [];
originalProjectsData.forEach((e, i) => {
  fullProjectName[i] = e.projectName;
})
export const dataProjectName = fullProjectName;

let fullInfoDescription = [];
originalInfoData.forEach((e, i) => {
  fullInfoDescription[i] = e.projectName;
})
export const dataInfoDescription = fullInfoDescription;


const startYear = '2009';
const startMonth = '1';
const scalerUnit = 5;
const endYear = '2028';
const endMonth = '12';


export const dataDates = originalDatesData;
export const dataInfo = originalInfoData;
export const dataProjects = originalProjectsData;
export const dataPhases = originalPhasesData;
export const dataStartYear = startYear;
export const dataStartMonth = startMonth;
export const dataScalerUnit = scalerUnit;
export const dataEndYear = endYear;
export const dataEndMonth = endMonth;
