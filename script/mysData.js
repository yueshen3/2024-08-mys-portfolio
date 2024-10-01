import originalProjectsData from '/2024-08 mys-portfolio/data/projects.json' with { type: 'json'};
import originalInfoData from '/2024-08 mys-portfolio/data/info.json' with { type: 'json'};
import originalDatesData from '/2024-08 mys-portfolio/data/dates.json' with { type: 'json'};
import originalPhasesData from '/2024-08 mys-portfolio/data/phases.json' with { type: 'json'};

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


export const dataDates = originalDatesData;
export const dataInfo = originalInfoData;
export const dataProjects = originalProjectsData;
export const dataPhases = originalPhasesData;





