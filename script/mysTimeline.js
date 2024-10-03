import {dataScalerUnit} from './mysData.js';
import {dataStartYear} from './mysData.js';
import {dataEndYear} from './mysData.js';

const arrayYears = [];
let recordYear = dataStartYear;
for (let i = 0; i <= dataEndYear - dataStartYear; i++) {
  arrayYears[i] = recordYear.toString();
  recordYear ++;
}

const yearLength = 12 * dataScalerUnit;
let domTime = '';
arrayYears.forEach((e, i) => {
  domTime += `<p>${e}</p>`;
})
document.querySelector('.all-years').innerHTML = domTime;

let startPointX = 0;
let htmlSvgVertical = [];
for (let i = 0; i <= dataEndYear - dataStartYear; i++) {
  const e = `<line x1="${startPointX}" y1="0" 
  x2="${startPointX}" y2="${window.innerHeight}"/>`;
  startPointX += yearLength;
  htmlSvgVertical[i] = e;
}

let svgHoriStrokeWidth = 20;
let svgHeight = document.querySelector('.time-line').offsetHeight;
const htmlSvgHorizontal = `<line x1="0" y1="${svgHeight - svgHoriStrokeWidth / 2}" 
x2="${(dataEndYear - dataStartYear + 1) * yearLength}" 
y2="${svgHeight - svgHoriStrokeWidth / 2}" 
style = "stroke-width: ${svgHoriStrokeWidth};"/>`
document.querySelector('.svg-lines').innerHTML = htmlSvgVertical + htmlSvgHorizontal;
document.querySelector('.svg-lines').setAttribute("height", `${svgHeight}`)


document.body.style.height = 3750 + "px";
document.body.style.width = (dataEndYear - dataStartYear + 1) * yearLength + "px";
